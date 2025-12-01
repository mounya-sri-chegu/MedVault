import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Patient
import PatientAuth from "./pages/patient/PatientAuth";

// Doctor
import DoctorAuth from "./pages/doctor/DoctorAuth";
import DoctorPending from "./pages/doctor/DoctorPending";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Patient */}
        <Route path="/patient/auth" element={<PatientAuth />} />

        {/* Doctor */}
        <Route path="/doctor/auth" element={<DoctorAuth />} />
        <Route path="/doctor/pending" element={<DoctorPending />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
