import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store/hooks";
import styles from "./Login.module.css";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Card from "../../components/common/Card";
import ErrorMessage from "../../components/common/ErrorMessage";
import { login } from "../../services/auth";
import { login as loginAction } from "../../store/slices/authSlice";
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
  const token = useAppSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);

  if (token) {
    return <Navigate to="/character" replace />;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const usernameError = !username;
    const passwordError = !password;
    if (usernameError || passwordError) {
      setFieldsErrors({
        username: usernameError,
        password: passwordError,
      });
      setIsLoading(false);
      return;
    }
    setFieldsErrors({ username: false, password: false });
    setLoginError("");
    try {
      const { token } = await login(username, password);
      dispatch(loginAction(token));
      setLocalStorageItem(Keys.TOKEN, token);
      setIsLoading(false);
      navigate("/character");
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
      }
      setIsLoading(false);
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
          <Button loading={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
