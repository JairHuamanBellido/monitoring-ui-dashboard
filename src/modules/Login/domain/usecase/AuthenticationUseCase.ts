import { LocalStorageAdapter } from "core/adapters/LocalStorageAdapter";
import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiLoginAdapter } from "modules/Login/infrastructure/HttpRestApiLoginAdapter";
import { AuthenticationUIAdapter } from "../adapter/AuthenticationUIAdapter";
import { LoginPort } from "../port/LoginPort";

export class AuthenticationUseCase implements UseCase<AuthenticationUIAdapter,void> {

    public static async execute(adapter: AuthenticationUIAdapter): Promise<void> {
        const port: LoginPort = {
            username: adapter.username,
            password: adapter.password
        }
        
        const httpResponse = await HttpRestApiLoginAdapter.login(port);
        LocalStorageAdapter.addValue({key: "id", value: httpResponse.id.toString()})
        LocalStorageAdapter.addValue({key: "token", value: httpResponse.accessToken})
    }
}