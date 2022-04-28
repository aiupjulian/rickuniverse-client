import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
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
