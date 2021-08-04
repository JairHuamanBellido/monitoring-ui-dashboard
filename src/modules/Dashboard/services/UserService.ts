import { HttRestApiWithInterceptor } from "core/api/HttRestApi";
import { User } from "core/entity/User";

export class UserService {
  private static readonly basePath: string = "users";

  public static async guest(): Promise<User> {
    const { data } = await HttRestApiWithInterceptor.get<User>(`${this.basePath}/guest`);
    return data;
  }
  
  public static async GetAllUsers(): Promise<User[]> {
    const { data } = await HttRestApiWithInterceptor.get<User[]>(`${this.basePath}/by-admin`);
    return data;
  }

}
