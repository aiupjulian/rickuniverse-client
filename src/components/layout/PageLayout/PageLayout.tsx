import { Outlet, Link } from "react-router-dom";
import styles from "./PageLayout.module.css";

export default function PageLayout() {
  return (
    <div>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          Rickuniverse
        </Link>
        <nav></nav>
      </header>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
