import styles from "./Login.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";

export default function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <div>
      <h1 className={styles.title}>Login to Rickuniverse!</h1>
      <Card>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Username" name="username" />
          <Input label="Password" name="password" type="password" />
          <Button>Login</Button>
        </form>
      </Card>
    </div>
  );
}
