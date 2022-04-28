import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Characters from "./Characters";
import Character from "./Character";
import NotFound from "./NotFound";
import Layout from "../components/Layout";
import ProtectedPage from "../components/ProtectedPage/ProtectedPage";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="/characters"
          element={
            <ProtectedPage>
              <Characters />
            </ProtectedPage>
          }
        />
        <Route
          path="/character"
          element={
            <ProtectedPage>
              <Character />
            </ProtectedPage>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
