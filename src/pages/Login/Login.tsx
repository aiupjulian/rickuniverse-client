import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store/hooks";
import styles from "./Login.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { login } from "../../services/auth";
import { login as loginAction } from "../../store/slices/authSlice";
import ErrorMessage from "../../components/ErrorMessage";
import { Keys, setLocalStorageItem } from "../../utils/localStorage";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsErrors, setFieldsErrors] = useState({
    username: false,
    password: false,
  });
  const [loginError, setLoginError] = useState("");

  let token = useAppSelector(selectToken);

  if (token) {
    return <Navigate to="/characters" replace />;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const usernameError = !username;
    const passwordError = !password;
    if (usernameError || passwordError) {
      setFieldsErrors({
        username: usernameError,
        password: passwordError,
      });
      return;
    }
    setFieldsErrors({ username: false, password: false });
    setLoginError("");
    try {
      const { token } = await login(username, password);
      dispatch(loginAction(token));
      setLocalStorageItem(Keys.TOKEN, token);
      navigate("/character");
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
      }
    }
  }

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h1 className={styles.title}>Login to Rickuniverse!</h1>
      <Card>
        <form className={styles.form} onSubmit={handleSubmit}>
          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          <Input
            label="Username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            errorMessage={
              fieldsErrors?.username ? "Please enter a username" : ""
            }
          />
          <Input
            label="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            errorMessage={
              fieldsErrors?.password ? "Please enter a password" : ""
            }
          />
          <Button>Login</Button>
        </form>
      </Card>
    </div>
  );
}
