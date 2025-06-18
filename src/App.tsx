import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import routes from "tempo-routes";

// Lazy load pages for better performance
const CheckInPage = lazy(() => import("./pages/CheckInPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const TestingGuide = lazy(() => import("./components/TestingGuide"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const ColorDemoPage = lazy(() => import("./pages/ColorDemoPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/testing" element={<TestingGuide />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/colors" element={<ColorDemoPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
