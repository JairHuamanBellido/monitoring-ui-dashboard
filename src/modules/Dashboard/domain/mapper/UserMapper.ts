import { UserForTableAdapter } from "../adapter/ui/UserForTableAdapter";
import { User } from "../entity/User";

export class UserMapper {
  public static toUserForTable(user: User): UserForTableAdapter {
    return {
      ...user,
      isLogged: false,
      socketIdSession: "",
    };
  }

  public static toUsersForTable(users: User[]): UserForTableAdapter[] {
    return users.map((user) => this.toUserForTable(user));
  }
}
