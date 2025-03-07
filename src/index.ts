import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
} from './utils';

import { DatabaseItem, Order, User, Address, TestOutput } from './types';

const unorganisedListOfDatabaseItems: DatabaseItem[] = [
  {
    type: 'user',
    id: 1,
    firstName: 'Av',
    lastName: 'Doi',
  },
  {
    type: 'user',
    id: 2,
    firstName: 'Uoi',
    lastName: 'Frwn',
  },
  {
    type: 'user',
    id: 3,
    firstName: 'Ue',
    lastName: 'Uoianlw',
  },
  {
    type: 'order',
    id: 1,
    price: 1000,
  },
  {
    type: 'order',
    id: 2,
    price: 2000,
  },
  {
    type: 'order',
    id: 3,
    price: 1500,
  },
  {
    type: 'order',
    id: 4,
    price: 1600,
  },
  {
    type: 'order',
    id: 5,
    price: 900,
  },
  {
    type: 'order',
    id: 6,
    price: 900,
  },
  {
    type: 'order',
    id: 7,
    price: 900,
  },
  {
    type: 'order',
    id: 8,
    price: 500,
  },
  {
    type: 'order',
    id: 9,
    price: 1200,
  },
  {
    type: 'order',
    id: 9,
    price: 1300,
  },
  {
    type: 'address',
    id: 10,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 11,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 12,
    city: 'Das',
  },
  {
    type: 'address',
    id: 13,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 14,
    city: 'Ordenon',
  },
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

  testOutput.countOfDatabaseItems = unorganisedListOfDatabaseItems.length;

  for (const databaseItem of unorganisedListOfDatabaseItems) {
    if (databaseItem.type === 'order') {
      testOutput.orders.push(databaseItem as Order);
    }

    if (databaseItem.type === 'address') {
      testOutput.addresses.push(databaseItem as Address);
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
