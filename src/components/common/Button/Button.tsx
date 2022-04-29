import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  loading?: boolean;
};

export default function Button({
  children,
  onClick,
  className,
  loading,
}: ButtonProps) {
  return (
    <button
      className={`${styles.container}${className ? ` ${className}` : ""}${
        loading ? ` ${styles.loading}` : ""
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
}
