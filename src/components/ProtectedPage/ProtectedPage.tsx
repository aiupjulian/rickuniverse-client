import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";

type ProtectedPageProps = { children: JSX.Element };

export default function ProtectedPage({ children }: ProtectedPageProps) {
  let token = useAppSelector(selectToken);
  let location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
