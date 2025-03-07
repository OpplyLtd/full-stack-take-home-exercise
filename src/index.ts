import { listOfDatabaseItems } from './mockData';
import { Order, TestOutput, User } from './types';
import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
} from './utils';

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
