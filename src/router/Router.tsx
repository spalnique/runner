import { Navigate, Route, Routes } from "react-router";

import { Competitions, Homepage } from "@pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/competition" element={<Competitions />} />
      <Route
        path="/athlete"
        element={<div className="flex-grow">Athletes page</div>}
      />
      <Route
        path="/coach"
        element={<div className="flex-grow">Coaches page</div>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
