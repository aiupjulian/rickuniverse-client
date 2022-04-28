import ErrorMessage from "../ErrorMessage";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  errorMessage?: string;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  errorMessage,
}: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={`${styles.input}${
          errorMessage ? ` ${styles.inputError}` : ""
        }`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
