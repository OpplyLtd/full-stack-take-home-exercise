export type DatabaseItemType = 'user' | 'order' | 'address';

export interface BaseDatabaseItem {
  type: DatabaseItemType;
  id: number;
}

export interface User extends BaseDatabaseItem {
  type: 'user';
  firstName: string;
  lastName: string;
}

export interface Order extends BaseDatabaseItem {
  type: 'order';
  price: number;
}

export interface Address extends BaseDatabaseItem {
  type: 'address';
  city: string;
}

export type DatabaseItem = User | Order | Address;

export interface TestOutput {
  countOfDatabaseItems: number;
  orders: Order[];
  totalRevenue: number;
  addresses: Address[];
  countOfUniqueCities: number;
  users: User[];
  totalLengthOfFullNames: number;
  allFullNames: string[];
}
