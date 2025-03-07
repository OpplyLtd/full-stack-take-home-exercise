import { Address, DatabaseItem, DatabaseItemType, Order, User } from './types';

export function countNumberOfUniqueCities(addresses: Address[]): number {
  const citiesWithoutWhitespace = addresses.map((address) =>
    address.city.replace(/\s+/g, ''),
  );

  const uniqueCities = new Set(citiesWithoutWhitespace);
  return uniqueCities.size;
}

export function calculateTotalLengthOfFullNames(users: User[]): number {
  const totalLength = users.reduce((accumulatedLength, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;

    return accumulatedLength + fullName.length;
  }, 0);

  return totalLength;
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
