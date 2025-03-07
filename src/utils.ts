import { Address, User } from './types';

/**
 * Counts the number of unique cities from a list of addresses
 *
 * @param addresses - Array of address objects
 * @returns The number of unique cities
 */
export function countNumberOfUniqueCities(addresses: Address[]): number {
  const trimmedCities = addresses.map((address) => {
    return address.city.replace(/\s+/g, '');
  });

  const uniqueCities = new Set(trimmedCities);
  return uniqueCities.size;
}

/**
 * Calculates the total length of all users' full names
 *
 * @param users - Array of user objects
 * @returns The total combined length of all full names
 */
export function calculateTotalLengthOfFullNames(users: User[]): number {
  // Generate full names with space between first and last names
  const fullNames = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });

  return fullNames.reduce((lengthOfFullNames, fullName): number => {
    return lengthOfFullNames + fullName.length;
  }, 0);
}
