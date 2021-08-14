import { UserForTableAdapter } from "modules/Dashboard/domain/adapter/ui/UserForTableAdapter";
import { GetUsersUseCase } from "modules/Dashboard/domain/usecase/user/GetUsersUseCase";
import { useQuery } from "react-query";

export default function useGetUsers() {
  return useQuery<UserForTableAdapter[]>("fetchUsers", () => GetUsersUseCase.execute());
}
