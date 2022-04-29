import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";

export default function NotFound() {
  const token = useAppSelector(selectToken);

  return (
    <>
      <h1>Aw jeez</h1>
      <p>We couldn't find the page you were looking for.</p>
      {token ? (
        <Link to="/character" className={styles.link}>
          Go to character list
        </Link>
      ) : (
        <Link to="/" className={styles.link}>
          Go to Login
        </Link>
      )}
    </>
  );
}
