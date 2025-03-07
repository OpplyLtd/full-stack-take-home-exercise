import { DatabaseItemType } from '../src/types';
import {
  countNumberOfUniqueCities,
  calculateTotalLengthOfFullNames,
  createAddress,
  createOrder,
  createUser,
} from '../src/utils';

describe('countNumberOfUniqueCities', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const addresses = [
      { id: 1, city: 'Ha voi' },
      { id: 2, city: 'Havoi' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });

  test('it considers different cities if they have different characters other than blank spaces', () => {
    const addresses = [
      { id: 1, city: 'Ha voi' },
      { id: 2, city: 'Ha vois' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(2);
  });
});

describe('calculateTotalLengthOfFullNames', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const users = [
      { id: 1, firstName: 'Dja', lastName: 'Vim' },
      { id: 2, firstName: 'No', lastName: 'Mklsdf' },
    ];
    expect(calculateTotalLengthOfFullNames(users)).toBe(16);
  });
});

describe('DatabaseItem Creation Functions', () => {
  it('should create a valid Address item', () => {
    const address = createAddress({ id: 10, city: 'Wobi' });

    expect(address).toEqual({
      type: DatabaseItemType.ADDRESS,
      id: 10,
      city: 'Wobi',
    });
    expect(address.type).toBe(DatabaseItemType.ADDRESS);
    expect(address.id).toBe(10);
    expect(address.city).toBe('Wobi');
  });

  it('should create a valid Order item', () => {
    const order = createOrder({ id: 1, price: 1000 });

    expect(order).toEqual({
      type: DatabaseItemType.ORDER,
      id: 1,
      price: 1000,
    });
    expect(order.type).toBe(DatabaseItemType.ORDER);
    expect(order.id).toBe(1);
    expect(order.price).toBe(1000);
  });

  it('should create a valid User item', () => {
    const user = createUser({ id: 1, firstName: 'Av', lastName: 'Doi' });

    expect(user).toEqual({
      type: DatabaseItemType.USER,
      id: 1,
      firstName: 'Av',
      lastName: 'Doi',
    });
    expect(user.type).toBe(DatabaseItemType.USER);
    expect(user.firstName).toBe('Av');
    expect(user.lastName).toBe('Doi');
  });

  it('should combine addresses, orders, and users into a single list', () => {
    const addresses = [
      createAddress({ id: 10, city: 'Wobi' }),
      createAddress({ id: 11, city: 'Wobi' }),
    ];
    const orders = [
      createOrder({ id: 1, price: 1000 }),
      createOrder({ id: 2, price: 2000 }),
    ];
    const users = [
      createUser({ id: 1, firstName: 'Av', lastName: 'Doi' }),
      createUser({ id: 2, firstName: 'Uoi', lastName: 'Frwn' }),
    ];

    const combined = [...addresses, ...orders, ...users];

    expect(combined).toHaveLength(6);
    expect(combined[0].type).toBe(DatabaseItemType.ADDRESS);
    expect(combined[3].type).toBe(DatabaseItemType.ORDER);
    expect(combined[5].type).toBe(DatabaseItemType.USER);
  });
});
