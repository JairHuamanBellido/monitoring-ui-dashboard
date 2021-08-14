import { Account } from "./Account";

export interface User {
  id: number;
  name: string;
  age: number;
  lastname: string;
  dni: string;
  email: string;
  avatar: string;
  account: Account;
}
