import { HttpRestApi } from "core/api/HttRestApi";
import { HttpRestApiAdminAuthenticationResponse } from "../models/HttpRestApiAdminAuthenticationResponse";
import { HttpRestApiAdminAuthentication } from "../models/HttRestApiAdminAuthentication";

export class AdminAuthService {

    public static async login(payload: HttpRestApiAdminAuthentication): Promise<HttpRestApiAdminAuthenticationResponse>{
        const {data} = await HttpRestApi.post<HttpRestApiAdminAuthenticationResponse>('/authentication/admin',payload)
        return data;
    }
}