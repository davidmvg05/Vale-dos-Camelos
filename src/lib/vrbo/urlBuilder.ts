import type { BookingState } from '@/types/booking';

const VRBO_PROPERTY_BASE_URL = 'https://www.vrbo.com/4289949ha';

/**
 * Builds a validated, safe deep-link URL pointing to the official VRBO listing.
 * Locks the domain to prevent open redirects.
 */
export function buildVrboDeepLink(state: Partial<BookingState>): string {
  const url = new URL(VRBO_PROPERTY_BASE_URL);

  if (state.checkIn && /^\d{4}-\d{2}-\d{2}$/.test(state.checkIn)) {
    url.searchParams.set('chkin', state.checkIn);
    url.searchParams.set('startDate', state.checkIn);
  }

  if (state.checkOut && /^\d{4}-\d{2}-\d{2}$/.test(state.checkOut)) {
    url.searchParams.set('chkout', state.checkOut);
    url.searchParams.set('endDate', state.checkOut);
  }

  if (typeof state.adults === 'number' && state.adults >= 1 && state.adults <= 20) {
    url.searchParams.set('adults', state.adults.toString());
  }

  if (typeof state.children === 'number' && state.children >= 0 && state.children <= 20) {
    url.searchParams.set('children', state.children.toString());
  }

  return url.toString();
}
