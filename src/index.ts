import { DatabaseItem, Order, TestOutput, User } from './types';
import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
  createAddress,
  createOrder,
  createUser,
} from './utils';

const orders: DatabaseItem[] = [
  createOrder({ id: 1, price: 1000 }),
  createOrder({ id: 2, price: 2000 }),
  createOrder({ id: 3, price: 1500 }),
  createOrder({ id: 4, price: 1600 }),
  createOrder({ id: 5, price: 900 }),
  createOrder({ id: 6, price: 900 }),
  createOrder({ id: 7, price: 900 }),
  createOrder({ id: 8, price: 500 }),
  createOrder({ id: 9, price: 1200 }), //id is same for two of the orders but the price was different
  createOrder({ id: 9, price: 1300 }),
];

const users: DatabaseItem[] = [
  createUser({ id: 1, firstName: 'Av', lastName: 'Doi' }),
  createUser({ id: 2, firstName: 'Uoi', lastName: 'Frwn' }),
  createUser({ id: 3, firstName: 'Ue', lastName: 'Uoianlw' }),
];
const addresses: DatabaseItem[] = [
  createAddress({ id: 10, city: 'Wobi' }),
  createAddress({ id: 11, city: 'Wobi' }),
  createAddress({ id: 12, city: 'Das' }),
  createAddress({ id: 13, city: 'Wobi' }),
  createAddress({ id: 14, city: 'Ordenon' }),
];

export const listOfDatabaseItems: DatabaseItem[] = [
  ...users,
  ...orders,
  ...addresses,
];

export default function main(): TestOutput {
  const testOutput: TestOutput = {
    countOfDatabaseItems: 0,
    orders: [],
    totalRevenue: 0,
    addresses: [],
    countOfUniqueCities: 0,
    users: [],
    totalLengthOfFullNames: 0,
    allFullNames: [],
  };

  testOutput.countOfDatabaseItems = listOfDatabaseItems.length;

  for (const databaseItem of listOfDatabaseItems) {
    if (databaseItem.type === 'order') {
      testOutput.orders.push(databaseItem as Order);
    }

    if (databaseItem.type === 'address') {
      if (databaseItem.city != null) {
        testOutput.addresses.push({
          id: databaseItem.id,
          city: databaseItem.city,
        });
      }
    }

    if (databaseItem.type === 'user') {
      testOutput.users.push(databaseItem as User);
    }
  }

  testOutput.totalRevenue = testOutput.orders.reduce(
    (revenue, order): number => {
      return revenue + order.price;
    },
    0,
  );

  testOutput.countOfUniqueCities = countNumberOfUniqueCities(
    testOutput.addresses,
  );

  testOutput.totalLengthOfFullNames = calculateTotalLengthOfFullNames(
    testOutput.users,
  );

  testOutput.allFullNames = testOutput.users.map((user) => {
    return user.firstName + ' ' + user.lastName;
  });

  return testOutput;
}

main();
