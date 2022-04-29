import { Outlet, Link, useNavigate } from "react-router-dom";
import { Keys, removeLocalStorageItem } from "../../../utils/localStorage";
import Button from "../../common/Button";
import styles from "./PageLayout.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { logout } from "../../../store/slices/authSlice";

export default function PageLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleLogoutClick() {
    removeLocalStorageItem(Keys.TOKEN);
    dispatch(logout());
    navigate("/");
  }

  return (
    <div>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          Rickuniverse
        </Link>
        <Button onClick={handleLogoutClick} className={styles.logoutButton}>
          Logout
        </Button>
      </header>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
