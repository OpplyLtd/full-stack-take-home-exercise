import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
} from './utils';
import { TestOutput } from './types';
import { unorganisedListOfDatabaseItems } from './data';

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

  testOutput.countOfDatabaseItems = unorganisedListOfDatabaseItems.length;

  for (const databaseItem of unorganisedListOfDatabaseItems) {
    if (databaseItem.type === 'order') {
      testOutput.orders.push(databaseItem);
    } else if (databaseItem.type === 'address') {
      testOutput.addresses.push(databaseItem);
    } else if (databaseItem.type === 'user') {
      testOutput.users.push(databaseItem);
    }
  }

  testOutput.totalRevenue = testOutput.orders.reduce(
    (revenue, order): number => revenue + order.price,
    0,
  );

  testOutput.countOfUniqueCities = countNumberOfUniqueCities(
    testOutput.addresses,
  );

  testOutput.totalLengthOfFullNames = calculateTotalLengthOfFullNames(
    testOutput.users,
  );

  testOutput.allFullNames = testOutput.users.map(
    (user) => `${user.firstName} ${user.lastName}`,
  );

  return testOutput;
}

main();
