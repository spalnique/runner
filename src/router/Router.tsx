import { Navigate, Route, Routes } from "react-router";

import { AthletesPage, CoachesPage, CompetitionsPage, HomePage } from "@pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
      <Route path="/athletes" element={<AthletesPage />} />
      <Route path="/coaches" element={<CoachesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
