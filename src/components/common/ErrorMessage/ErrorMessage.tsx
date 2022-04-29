import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  children: React.ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <div className={styles.container}>{children}</div>;
}
