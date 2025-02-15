import { Navigate, Route, Routes } from "react-router";

import { Competitions, Homepage } from "@pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/competition" element={<Competitions />} />
      <Route
        path="/athlete"
        element={<main className="flex-grow">Athletes page</main>}
      />
      <Route
        path="/coach"
        element={<main className="flex-grow">Coaches page</main>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
