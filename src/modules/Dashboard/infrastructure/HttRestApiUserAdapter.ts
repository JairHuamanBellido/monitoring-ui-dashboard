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
}
