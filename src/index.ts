import { listOfDatabaseItems } from './mockData';
import { Order, TestOutput, User } from './types';
import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
  processAddresses,
  processOrders,
  processUsers,
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

  testOutput.orders = processOrders(listOfDatabaseItems);
  testOutput.users = processUsers(listOfDatabaseItems);
  testOutput.addresses = processAddresses(listOfDatabaseItems);

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
    return `${user.firstName} ${user.lastName}`;
  });

  return testOutput;
}

main();
