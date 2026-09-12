/**
 * Centralized App Store URLs and Mobile Detection Utilities for DigiVolt One.
 */

export const APP_STORE_URL = 'https://apps.apple.com/us/app/digivolt/id6766707727';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.digi02.digivolt';

/**
 * Checks if the current visitor is on an Apple device (iPhone, iPad, iPod, iPadOS).
 */
export function isAppleDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = (navigator.userAgent || navigator.vendor || (window as any).opera || '').toLowerCase();
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const isIPadOS = /macintosh/i.test(ua) && (navigator.maxTouchPoints || 0) > 1;
  return isIOS || isIPadOS;
}

/**
 * Checks if the current visitor is on an Android device.
 */
export function isAndroidDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = (navigator.userAgent || navigator.vendor || (window as any).opera || '').toLowerCase();
  return /android/i.test(ua);
}

/**
 * Checks if the current user is visiting from a mobile device or a screen width < 768px.
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = (navigator.userAgent || navigator.vendor || (window as any).opera || '').toLowerCase();
  const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(ua);
  const isSmallScreen = window.innerWidth < 768;
  const hasTouch = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;

  return isMobileUA || (isSmallScreen && hasTouch) || isSmallScreen;
}

/**
 * Returns the direct store URL depending on the client OS:
 * - Apple App Store for iOS / iPadOS
 * - Google Play Store for Android & other platforms
 */
export function getDirectStoreUrl(): string {
  if (isAppleDevice()) {
    return APP_STORE_URL;
  }
  return PLAY_STORE_URL;
}

export const PRODUCTION_DOMAIN = 'https://digivolt.ng';

/**
 * Returns the permanent universal download URL.
 * Hardcoded to the official production domain (https://digivolt.ng/download)
 * so that any printed, published, or scanned QR code is permanent and never breaks.
 *
 * When scanned by any smartphone camera:
 * - iPhones & iPads -> redirected directly to Apple App Store
 * - Android phones  -> redirected directly to Google Play Store
 */
export function getUniversalDownloadUrl(): string {
  return `${PRODUCTION_DOMAIN}/download`;
}

/**
 * Helper to handle the "Get App" action across the entire website:
 * - On mobile: instantly redirects to either Apple App Store or Google Play.
 * - On desktop: opens the QR code modal for scanning.
 */
export function handleGetAppAction(onDesktopModal: () => void): void {
  if (isMobileDevice()) {
    window.location.href = getDirectStoreUrl();
  } else {
    onDesktopModal();
  }
}
