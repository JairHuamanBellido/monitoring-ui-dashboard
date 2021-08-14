import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiUserAdapter } from "modules/Dashboard/infrastructure/HttRestApiUserAdapter";
import { UserForTableAdapter } from "../../adapter/ui/UserForTableAdapter";
import { UserMapper } from "../../mapper/UserMapper";

export class GetUsersUseCase implements UseCase<void, UserForTableAdapter[]> {
  public static async execute(): Promise<UserForTableAdapter[]> {
    const httpResponse = await HttpRestApiUserAdapter.getAllUsers();
    return UserMapper.toUsersForTable(httpResponse);
  }
}
