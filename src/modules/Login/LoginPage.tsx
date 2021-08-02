import { Logo } from "assets";
import { AxiosError } from "axios";
import { HttpErrorMessageUIAdapter } from "core/adapters/HttpErrorMessageAdapter";
import { LocalStorage } from "core/entity/LocalStorage";
import { HttpError } from "core/types/HttpError";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";
import { Button, Flex, Input } from "shared";
import { ErrorAuthentication, LoadingAuthComponent } from "./components";
import "./index.scss";
import { HttpRestApiAdminAuthentication } from "./models/HttRestApiAdminAuthentication";
import { AdminAuthService } from "./service/AdminAuthService";

export default function LoginPage() {
  // Hooks
  const [authRequest, setAuthRequest] =
    useState<HttpRestApiAdminAuthentication>({
      password: "",
      username: "",
    });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // REACT QUERY
  const mutation = useMutation(
    (payload: HttpRestApiAdminAuthentication) =>
      AdminAuthService.login(payload),
    {
      onSuccess: (data) => {
        LocalStorage.addValue({ key: "id", value: data.id.toString() });
        LocalStorage.addValue({ key: "token", value: data.accessToken });
        setIsAuthenticated(true);
      },
      onError: (error) => {
        const e = error as AxiosError<HttpError>;
        setErrorMessage(HttpErrorMessageUIAdapter.parse(e.response?.data.type));
      },
    }
  );

  // Events for Dom
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthRequest({ ...authRequest, [name]: value });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(authRequest);
  };

  if (isAuthenticated) return <Redirect to="/dashboard" />;
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      
      className="LoginPageContainer"
    >
      <Flex margin="-128px 0px 0px 0px" direction="column">
        <Flex
          margin="0px 0px 64px 0px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Logo} alt="logo" />
          <Flex margin="0px 0px 0px 16px" direction="column">
            <h1 className="header-title">OXC</h1>
            <p className="header-desc">Control & Management</p>
          </Flex>
        </Flex>
        <form onSubmit={onSubmit}>
          <Flex className="field" direction="column">
            <label htmlFor="username">Usuario</label>
            <Input
              name={"username"}
              onChange={handleInput}
              placeholder={"Ingrese su usuario"}
              value={authRequest.username}
            />
          </Flex>
          <Flex className="field" direction="column">
            <label htmlFor="password">Contraseña</label>
            <Input
              name={"password"}
              onChange={handleInput}
              placeholder={"Ingrese su contraseña"}
              value={authRequest.password}
              isSecure={true}
            />
          </Flex>
          {mutation.isLoading && <LoadingAuthComponent />}
          {mutation.isError && <ErrorAuthentication message={errorMessage} />}
          {!mutation.isLoading && (
            <Button
              className="submit-btn"
              padding="16px"
              width="100%"
              background={"#435fff"}
              text={"Ingresar"}
            />
          )}
        </form>
      </Flex>
    </Flex>
  );
}
