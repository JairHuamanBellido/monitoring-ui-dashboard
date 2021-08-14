import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiUserAdapter } from "modules/Dashboard/infrastructure/HttRestApiUserAdapter";
import { User } from "../../entity/User";

export class GetUserByDniUseCase implements UseCase<{ dni: string }, User> {
  public static async execute(dni: string): Promise<User> {
    return await HttpRestApiUserAdapter.getUserByDni(dni);
  }
}
