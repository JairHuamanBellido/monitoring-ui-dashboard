import { HttpError } from "core/types/HttpError";
import { User } from "modules/Dashboard/domain/entity/User";
import { GetUserByDniUseCase } from "modules/Dashboard/domain/usecase/user/GetUserByDniUseCase";
import { useQuery } from "react-query";

export default function useGetUserByDni(dni: string) {
  return useQuery<User, HttpError>(["fetchUser", dni], () =>
    GetUserByDniUseCase.execute(dni)
  );
}
