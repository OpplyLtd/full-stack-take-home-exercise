export enum DatabaseItemType {
    USER = 'user',
    ORDER = 'order',
    ADDRESS = 'address',
  }

export type DatabaseItem = {
    type: DatabaseItemType;
    id: number;
    firstName?: string;
    lastName?: string;
    price?: number;
    city?: string;
  };

 export type Order = {
    id: number;
    price: number;
  };
  
  export type Address = {
    id: number;
    city: string;
  };
  
  export type User = {
    id: number;
    firstName: string;
    lastName: string;
  };
  
  export type TestOutput = {
    countOfDatabaseItems: number;
    orders: Order[];
    totalRevenue: number;
    addresses: Address[];
    countOfUniqueCities: number;
    users: User[];
    totalLengthOfFullNames: number;
    allFullNames: string[];
  };