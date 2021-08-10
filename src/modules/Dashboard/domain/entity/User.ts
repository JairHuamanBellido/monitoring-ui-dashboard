import { Account } from "./Account";

export interface User {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  email: string;
  avatar: string;
  account: Account;
}
