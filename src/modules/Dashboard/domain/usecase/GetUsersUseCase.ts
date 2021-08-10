import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiUserAdapter } from "modules/Dashboard/infrastructure/HttRestApiUserAdapter";
import { User } from "../entity/User";

export class GetUsersUseCase implements UseCase<void,User[]> {
    public static async execute(): Promise<User[]>{ 
        const httpResponse = await HttpRestApiUserAdapter.getAllUsers();
        return httpResponse;
    }
}