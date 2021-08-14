import { User } from "../../entity/User";

export interface UserForTableAdapter extends User{
    isLogged: boolean;
    socketIdSession: string;
}
