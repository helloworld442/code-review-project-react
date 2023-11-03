import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const BestPage = lazy(() => import("../pages/BestPage"));
const QuestionPage = lazy(() => import("../pages/QuestionPage"));
const WritePage = lazy(() => import("../pages/WritePage"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/best" element={<BestPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail/:postId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
