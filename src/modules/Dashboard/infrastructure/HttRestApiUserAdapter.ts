import { HttRestApiWithInterceptor } from "core/api/HttRestApi";
import { User } from "../domain/entity/User";

export class HttpRestApiUserAdapter {
  public static async guest(): Promise<User> {
    const { data } = await HttRestApiWithInterceptor.get<User>(`users/guest`);
    return data;
  }

  public static async getAllUsers(): Promise<User[]> {
    const { data } = await HttRestApiWithInterceptor.get<User[]>(`users/for-admin`);
    return data;
  }

  public static async updateAccountStatus(accountId:number): Promise<void>{
    await HttRestApiWithInterceptor.patch(`users/account-status/${accountId}`)
  }

  public static async getUserByDni(dni: string): Promise<User>{
    const { data } = await HttRestApiWithInterceptor.get<User>(`users/${dni}`)
    return data;
  }
}
