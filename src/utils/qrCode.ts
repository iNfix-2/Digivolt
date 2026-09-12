/**
 * Pure TypeScript QR Code generator
 * Generates 100% compliant ISO/IEC 18004 QR codes as SVG paths.
 * Zero external dependencies.
 */

export type EccLevel = 'L' | 'M' | 'Q' | 'H';

interface EccConfig {
  ordinal: number;
  formatBits: number;
}

const ECC_CONFIGS: Record<EccLevel, EccConfig> = {
  L: { ordinal: 0, formatBits: 1 },
  M: { ordinal: 1, formatBits: 0 },
  Q: { ordinal: 2, formatBits: 3 },
  H: { ordinal: 3, formatBits: 2 },
};

const ECC_CODEWORDS_PER_BLOCK: number[][] = [
  [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
  [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
];

const NUM_ERROR_CORRECTION_BLOCKS: number[][] = [
  [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
  [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
  [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
  [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],
];

export class QrCodeModel {
  readonly version: number;
  readonly size: number;
  readonly errorCorrectionLevel: EccConfig;
  readonly mask: number;
  private readonly modules: boolean[][];
  private isFunction: boolean[][];

  constructor(version: number, errorCorrectionLevel: EccConfig, dataCodewords: number[], msk: number) {
    if (version < 1 || version > 40) throw new RangeError('Version out of range');
    this.version = version;
    this.size = version * 4 + 17;
    this.errorCorrectionLevel = errorCorrectionLevel;

    this.modules = [];
    this.isFunction = [];
    for (let y = 0; y < this.size; y++) {
      this.modules.push(new Array(this.size).fill(false));
      this.isFunction.push(new Array(this.size).fill(false));
    }

    this.drawFunctionPatterns();
    const allCodewords = this.addEccAndInterleave(dataCodewords);
    this.drawCodewords(allCodewords);

    if (msk === -1) {
      let minPenalty = 1000000000;
      for (let i = 0; i < 8; i++) {
        this.applyMask(i);
        this.drawFormatBits(i);
        const penalty = this.getPenaltyScore();
        if (penalty < minPenalty) {
          minPenalty = penalty;
          msk = i;
        }
        this.applyMask(i);
      }
    }
    this.mask = msk;
    this.applyMask(msk);
    this.drawFormatBits(msk);
    this.isFunction = [];
  }

  getModule(x: number, y: number): boolean {
    return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
  }

  private drawFunctionPatterns(): void {
    for (let i = 0; i < this.size; i++) {
      this.setFunctionModule(6, i, i % 2 === 0);
      this.setFunctionModule(i, 6, i % 2 === 0);
    }
    this.drawFinderPattern(3, 3);
    this.drawFinderPattern(this.size - 4, 3);
    this.drawFinderPattern(3, this.size - 4);

    const alignPatPos = QrCodeModel.getAlignmentPatternPositions(this.version);
    const numAlign = alignPatPos.length;
    for (let i = 0; i < numAlign; i++) {
      for (let j = 0; j < numAlign; j++) {
        if (!((i === 0 && j === 0) || (i === 0 && j === numAlign - 1) || (i === numAlign - 1 && j === 0))) {
          this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
    }

    this.drawFormatBits(0);
    this.drawVersion();
  }

  private drawFormatBits(mask: number): void {
    const data = (this.errorCorrectionLevel.formatBits << 3) | mask;
    let rem = data;
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const bits = ((data << 10) | rem) ^ 0x5412;

    for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, QrCodeModel.getBit(bits, i));
    this.setFunctionModule(8, 7, QrCodeModel.getBit(bits, 6));
    this.setFunctionModule(8, 8, QrCodeModel.getBit(bits, 7));
    this.setFunctionModule(7, 8, QrCodeModel.getBit(bits, 8));
    for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, QrCodeModel.getBit(bits, i));

    for (let i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, QrCodeModel.getBit(bits, i));
    for (let i = 8; i < 15; i++) this.setFunctionModule(8, this.size - 15 + i, QrCodeModel.getBit(bits, i));
    this.setFunctionModule(8, this.size - 8, true);
  }

  private drawVersion(): void {
    if (this.version < 7) return;
    let rem = this.version;
    for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
    const bits = (this.version << 12) | rem;
    for (let i = 0; i < 18; i++) {
      const bit = QrCodeModel.getBit(bits, i);
      const a = this.size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      this.setFunctionModule(a, b, bit);
      this.setFunctionModule(b, a, bit);
    }
  }

  private drawFinderPattern(x: number, y: number): void {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        const xx = x + dx;
        const yy = y + dy;
        if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size) {
          this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
        }
      }
    }
  }

  private drawAlignmentPattern(x: number, y: number): void {
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
  }

  private setFunctionModule(x: number, y: number, isDark: boolean): void {
    this.modules[y][x] = isDark;
    this.isFunction[y][x] = true;
  }

  private addEccAndInterleave(data: number[]): number[] {
    const ver = this.version;
    const ecl = this.errorCorrectionLevel;
    const numBlocks = NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    const blockEccLen = ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
    const rawCodewords = Math.floor(QrCodeModel.getNumRawDataModules(ver) / 8);
    const numShortBlocks = numBlocks - (rawCodewords % numBlocks);
    const shortBlockLen = Math.floor(rawCodewords / numBlocks);

    const blocks: { data: number[]; ecc: number[] }[] = [];
    const rs = QrCodeModel.reedSolomonComputeDivisor(blockEccLen);
    for (let i = 0, k = 0; i < numBlocks; i++) {
      const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i >= numShortBlocks ? 1 : 0));
      k += dat.length;
      const ecc = QrCodeModel.reedSolomonComputeRemainder(dat, rs);
      if (i >= numShortBlocks) dat.push(0);
      blocks.push({ data: dat, ecc });
    }

    const result: number[] = [];
    for (let i = 0; i < shortBlockLen - blockEccLen; i++) {
      for (let j = 0; j < numBlocks; j++) result.push(blocks[j].data[i]);
    }
    for (let j = numShortBlocks; j < numBlocks; j++) result.push(blocks[j].data[shortBlockLen - blockEccLen]);
    for (let i = 0; i < blockEccLen; i++) {
      for (let j = 0; j < numBlocks; j++) result.push(blocks[j].ecc[i]);
    }
    return result;
  }

  private drawCodewords(data: number[]): void {
    let i = 0;
    for (let right = this.size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < this.size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? this.size - 1 - vert : vert;
          if (!this.isFunction[y][x] && i < data.length * 8) {
            this.modules[y][x] = QrCodeModel.getBit(data[Math.floor(i / 8)], 7 - (i % 8));
            i++;
          }
        }
      }
    }
  }

  private applyMask(mask: number): void {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        let invert: boolean;
        switch (mask) {
          case 0: invert = (x + y) % 2 === 0; break;
          case 1: invert = y % 2 === 0; break;
          case 2: invert = x % 3 === 0; break;
          case 3: invert = (x + y) % 3 === 0; break;
          case 4: invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
          case 5: invert = ((x * y) % 2) + ((x * y) % 3) === 0; break;
          case 6: invert = (((x * y) % 2) + ((x * y) % 3)) % 2 === 0; break;
          case 7: invert = (((x + y) % 2) + ((x * y) % 3)) % 2 === 0; break;
          default: throw new RangeError('Invalid mask');
        }
        if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
      }
    }
  }

  private getPenaltyScore(): number {
    let result = 0;
    for (let y = 0; y < this.size; y++) {
      let runColor = false;
      let runX = 0;
      const runHistory = [0, 0, 0, 0, 0, 0, 0];
      for (let x = 0; x < this.size; x++) {
        if (this.modules[y][x] === runColor) {
          runX++;
          if (runX === 5) result += 3;
          else if (runX > 5) result++;
        } else {
          this.finderPenaltyAddHistory(runX, runHistory);
          if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * 40;
          runColor = this.modules[y][x];
          runX = 1;
        }
      }
      result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * 40;
    }

    for (let x = 0; x < this.size; x++) {
      let runColor = false;
      let runY = 0;
      const runHistory = [0, 0, 0, 0, 0, 0, 0];
      for (let y = 0; y < this.size; y++) {
        if (this.modules[y][x] === runColor) {
          runY++;
          if (runY === 5) result += 3;
          else if (runY > 5) result++;
        } else {
          this.finderPenaltyAddHistory(runY, runHistory);
          if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * 40;
          runColor = this.modules[y][x];
          runY = 1;
        }
      }
      result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * 40;
    }

    for (let y = 0; y < this.size - 1; y++) {
      for (let x = 0; x < this.size - 1; x++) {
        const color = this.modules[y][x];
        if (color === this.modules[y][x + 1] && color === this.modules[y + 1][x] && color === this.modules[y + 1][x + 1]) {
          result += 3;
        }
      }
    }

    let total = 0;
    let black = 0;
    for (const row of this.modules) {
      for (const color of row) {
        if (color) black++;
        total++;
      }
    }
    const k = Math.ceil(Math.abs((black * 20) / total - 10)) - 1;
    result += k * 10;
    return result;
  }

  private finderPenaltyAddHistory(currentRunLength: number, runHistory: number[]): void {
    runHistory.pop();
    runHistory.unshift(currentRunLength);
  }

  private finderPenaltyCountPatterns(runHistory: number[]): number {
    const n = runHistory[1];
    const core = n > 0 && runHistory[2] === n && runHistory[3] === 3 * n && runHistory[4] === n && runHistory[5] === n;
    return (core && runHistory[0] >= 4 * n && runHistory[6] >= n ? 1 : 0) +
           (core && runHistory[6] >= 4 * n && runHistory[0] >= n ? 1 : 0);
  }

  private finderPenaltyTerminateAndCount(currentRunColor: boolean, currentRunLength: number, runHistory: number[]): number {
    if (currentRunColor) {
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      currentRunLength = 0;
    }
    currentRunLength += this.size;
    this.finderPenaltyAddHistory(currentRunLength, runHistory);
    return this.finderPenaltyCountPatterns(runHistory);
  }

  static getAlignmentPatternPositions(ver: number): number[] {
    if (ver === 1) return [];
    const num = Math.floor(ver / 7) + 2;
    const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (num * 2 - 2)) * 2;
    const result = [6];
    for (let pos = ver * 4 + 10; result.length < num; pos -= step) result.splice(1, 0, pos);
    return result;
  }

  static getNumRawDataModules(ver: number): number {
    let result = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      const numAlign = Math.floor(ver / 7) + 2;
      result -= (25 * numAlign - 10) * numAlign - 55;
      if (ver >= 7) result -= 36;
    }
    return result;
  }

  static getNumDataCodewords(ver: number, ecl: EccConfig): number {
    return Math.floor(QrCodeModel.getNumRawDataModules(ver) / 8) -
      ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
  }

  static reedSolomonComputeDivisor(degree: number): number[] {
    const result = new Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < degree; j++) {
        result[j] = QrCodeModel.reedSolomonMultiply(result[j], root);
        if (j + 1 < degree) result[j] ^= result[j + 1];
      }
      root = QrCodeModel.reedSolomonMultiply(root, 0x02);
    }
    return result;
  }

  static reedSolomonComputeRemainder(data: number[], divisor: number[]): number[] {
    const result = new Array(divisor.length).fill(0);
    for (const b of data) {
      const factor = b ^ (result.shift() ?? 0);
      result.push(0);
      for (let i = 0; i < divisor.length; i++) result[i] ^= QrCodeModel.reedSolomonMultiply(divisor[i], factor);
    }
    return result;
  }

  static reedSolomonMultiply(x: number, y: number): number {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
      z = (z << 1) ^ ((z >>> 7) * 0x11d);
      z ^= ((y >>> i) & 1) * x;
    }
    return z;
  }

  static getBit(x: number, i: number): boolean {
    return ((x >>> i) & 1) !== 0;
  }

  static encodeText(text: string, level: EccLevel = 'M'): QrCodeModel {
    const ecl = ECC_CONFIGS[level];
    const bytes: number[] = [];
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code < 128) bytes.push(code);
      else if (code < 2048) {
        bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
      } else if (code < 65536) {
        bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
      }
    }

    let version = 1;
    while (version <= 40) {
      const dataCapacityBits = QrCodeModel.getNumDataCodewords(version, ecl) * 8;
      const headerBits = 4 + (version < 10 ? 8 : 16);
      if (headerBits + bytes.length * 8 <= dataCapacityBits) break;
      version++;
    }
    if (version > 40) throw new Error('Data too long for QR code');

    const bitBuffer: number[] = [0, 1, 0, 0];
    const countBits = version < 10 ? 8 : 16;
    for (let i = countBits - 1; i >= 0; i--) bitBuffer.push((bytes.length >>> i) & 1);
    for (const b of bytes) {
      for (let i = 7; i >= 0; i--) bitBuffer.push((b >>> i) & 1);
    }

    const dataCapacityBits = QrCodeModel.getNumDataCodewords(version, ecl) * 8;
    const terminator = Math.min(4, dataCapacityBits - bitBuffer.length);
    for (let i = 0; i < terminator; i++) bitBuffer.push(0);
    while (bitBuffer.length % 8 !== 0) bitBuffer.push(0);

    const padByte1 = 0xec;
    const padByte2 = 0x11;
    let pad = padByte1;
    while (bitBuffer.length < dataCapacityBits) {
      for (let i = 7; i >= 0; i--) bitBuffer.push((pad >>> i) & 1);
      pad = pad === padByte1 ? padByte2 : padByte1;
    }

    const dataCodewords: number[] = [];
    for (let i = 0; i < bitBuffer.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bitBuffer[i + j];
      dataCodewords.push(b);
    }

    return new QrCodeModel(version, ecl, dataCodewords, -1);
  }

  toSvgPath(quietZone = 2): { path: string; viewBoxSize: number } {
    const parts: string[] = [];
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.modules[y][x]) {
          parts.push(`M${x + quietZone},${y + quietZone}h1v1h-1z`);
        }
      }
    }
    return {
      path: parts.join(''),
      viewBoxSize: this.size + quietZone * 2,
    };
  }
}
