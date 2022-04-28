import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Characters from "./Characters";
import Character from "./Character";
import NotFound from "./NotFound";
import Layout from "../components/Layout";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
