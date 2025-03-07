import { Address, DatabaseItem, DatabaseItemType, Order, User } from './types';

export function countNumberOfUniqueCities(addresses: Address[]): number {
  const cities = addresses.map((address) => {
    return address.city;
  });

  const trimmedCities = cities.map((city) => {
    return city.replace(/\s+/g, '');
  });

  const uniqueCities = new Set(trimmedCities);
  return uniqueCities.size;
}

export function calculateTotalLengthOfFullNames(users: User[]): number {
  // This variable is holds the list of full names so that
  // the total length includes the space between first and last names
  const foos = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });

  return foos.reduce((lengthOfFullNames, foo): number => {
    return lengthOfFullNames + foo.length;
  }, 0);
}

export function createAddress({ id, city }: Address): DatabaseItem {
  return { type: DatabaseItemType.ADDRESS, id, city };
}

export function createOrder({ id, price }: Order): DatabaseItem {
  return { type: DatabaseItemType.ORDER, id, price };
}

export function createUser({ id, firstName, lastName }: User): DatabaseItem {
  return { type: DatabaseItemType.USER, id, firstName, lastName };
}

export function processOrders(items: DatabaseItem[]): Order[] {
  return items.filter(
    (item) => item.type === DatabaseItemType.ORDER,
  ) as Order[];
}

export function processUsers(items: DatabaseItem[]): User[] {
  return items.filter((item) => item.type === DatabaseItemType.USER) as User[];
}

export function processAddresses(items: DatabaseItem[]): Address[] {
  return items
    .filter(
      (item) => item.type === DatabaseItemType.ADDRESS && item.city != null,
    )
    .map((item) => ({ id: item.id, city: item.city })) as Address[];
}
