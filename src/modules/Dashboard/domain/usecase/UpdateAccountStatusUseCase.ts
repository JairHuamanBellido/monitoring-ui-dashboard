import { HttpRestApiUserAdapter } from "modules/Dashboard/infrastructure/HttRestApiUserAdapter";

export class UpdateAccountStatusUseCase {
 
    public static async execute(accounId:number): Promise<void> {
        await HttpRestApiUserAdapter.updateAccountStatus(accounId);
    }
}