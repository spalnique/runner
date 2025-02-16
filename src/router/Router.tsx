import { Navigate, Route, Routes } from "react-router";

import { Competitions, Homepage } from "@pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route
        path="/athletes"
        element={<main className="flex-grow">Athletes page</main>}
      />
      <Route
        path="/coaches"
        element={<main className="flex-grow">Coaches page</main>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
