import { Navigate, Route, Routes } from "react-router";

import { Competitions, Homepage } from "@pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
