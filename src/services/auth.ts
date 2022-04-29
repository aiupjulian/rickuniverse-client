import { UNAUTHORIZED, BAD_REQUEST } from "http-status";
import { ApiError, GENERIC_ERROR_MESSAGE } from "./helpers";

type LoginData = { token: string };

export async function login(
  username: string,
  password: string
): Promise<LoginData> {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data: LoginData & ApiError = await response.json();
  if (response.ok) {
    if (data.token) {
      return data;
    } else {
      return Promise.reject(new Error(GENERIC_ERROR_MESSAGE));
    }
  } else {
    if (response.status === BAD_REQUEST) {
      return Promise.reject(new Error("Please enter username and password."));
    }
    if (response.status === UNAUTHORIZED) {
      return Promise.reject(new Error("Invalid username or password."));
    }
    return Promise.reject(new Error(GENERIC_ERROR_MESSAGE));
  }
}
