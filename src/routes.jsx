import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import AnalysisPage from "./pages/AnalysisPage";
import ReportPage from "./pages/ReportPage";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/upload" element={<UploadPage />} />
    <Route path="/analysis" element={<AnalysisPage />} />
    <Route path="/report" element={<ReportPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
