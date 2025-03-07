import {
  countNumberOfUniqueCities,
  calculateTotalLengthOfFullNames,
} from '../src/utils';
import { User, Address } from '../src/types';

describe('countNumberOfUniqueCities', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const addresses: Address[] = [
      { id: 1, city: 'Ha voi', type: 'address' },
      { id: 2, city: 'Havoi', type: 'address' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });

  test('it considers different cities if they have different characters other than blank spaces', () => {
    const addresses: Address[] = [
      { id: 1, city: 'Ha voi', type: 'address' },
      { id: 2, city: 'Ha vois', type: 'address' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(2);
  });
});

describe('calculateTotalLengthOfFullNames', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const users: User[] = [
      { id: 1, firstName: 'Dja', lastName: 'Vim', type: 'user' },
      { id: 2, firstName: 'No', lastName: 'Mklsdf', type: 'user' },
    ];
    expect(calculateTotalLengthOfFullNames(users)).toBe(16);
  });
});
