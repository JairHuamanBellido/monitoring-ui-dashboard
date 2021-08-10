import { HttpRestApi } from "core/api/HttRestApi";
import { LoginPort } from "../domain/port/LoginPort";
import { AuthenticationResponseUseCaseDto } from "../domain/usecase/dto/AuthenticationResponseUseCaseDto";

export class HttpRestApiLoginAdapter {
    public static async login(port: LoginPort): Promise<AuthenticationResponseUseCaseDto>{
        const {data} = await HttpRestApi.post<AuthenticationResponseUseCaseDto>('/authentication/admin',port)
        return data;
    }
}