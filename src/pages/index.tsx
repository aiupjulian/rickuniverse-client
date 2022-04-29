import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import PageLayout from "../components/layout/PageLayout";
import ProtectedPage from "../components/layout/ProtectedPage/ProtectedPage";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Login />} />
        <Route path="character">
          <Route
            index
            element={
              <ProtectedPage>
                <CharacterList />
              </ProtectedPage>
            }
          />
          <Route
            path=":characterId"
            element={
              <ProtectedPage>
                <CharacterDetail />
              </ProtectedPage>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
