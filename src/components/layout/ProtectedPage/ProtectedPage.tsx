import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { selectToken } from "../../../store/slices/authSlice";

type ProtectedPageProps = { children: JSX.Element };

export default function ProtectedPage({ children }: ProtectedPageProps) {
  let token = useAppSelector(selectToken);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
