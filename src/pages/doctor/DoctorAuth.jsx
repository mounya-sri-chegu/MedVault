import { useState } from "react";
import DOCTOR_IMAGE_URL from "../../assets/doctor.jpg";

export default function DoctorAuth() {
  const [isLogin, setIsLogin] = useState(true);

  // Floating label input style
  const inputWrapper = "relative w-full";
  const inputStyle =
    "w-full px-4 py-3 peer border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md " +
    "focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none transition font-medium";
  const labelStyle =
    "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all " +
    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 " +
    "peer-valid:top-2 peer-valid:text-xs peer-valid:text-blue-600";

  const primaryButtonStyle =
    "w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 to-teal-600 text-white font-semibold " +
    "shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-200 p-6 font-inter">
      <div className="flex flex-col lg:flex-row bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full border border-white/30">
        {/* Left Section */}
        <div className="lg:w-1/2 relative min-h-[520px]">
          <img
            src={DOCTOR_IMAGE_URL}
            alt="Doctor"
            className="absolute inset-0 w-full h-full object-cover p-17"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-700/60 mix-blend-multiply"></div>

          {/* Text overlay */}
          <div className="absolute bottom-12 left-10 text-white space-y-3">
            <h1 className="text-4xl font-bold tracking-wide drop-shadow-lg">
              MediBook Professionals
            </h1>
            <p className="text-lg max-w-xs leading-relaxed opacity-90">
              Empowering healthcare professionals with seamless digital tools.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-10 text-center font-poppins">
            {isLogin ? "Welcome Back" : "Create Your Professional Account"}
          </h2>

          <form className="flex flex-col gap-6">
            {!isLogin ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Basic Fields */}
                  {["Full Name", "Medical License #", "Clinic Name"].map(
                    (placeholder, index) => (
                      <div className={inputWrapper} key={index}>
                        <input className={inputStyle} required />
                        <label className={labelStyle}>{placeholder}</label>
                      </div>
                    )
                  )}

                  {/* Gender */}
                  <div className={inputWrapper}>
                    <select className={`${inputStyle} bg-white`} required>
                      <option value="" disabled selected></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <label className={labelStyle}>Gender</label>
                  </div>

                  {/* Years of Experience */}
                  <div className={inputWrapper}>
                    <input
                      className={inputStyle}
                      type="number"
                      min="0"
                      required
                    />
                    <label className={labelStyle}>Years of Experience</label>
                  </div>

                  {/* Department */}
                  <div className={inputWrapper}>
                    <select className={`${inputStyle} bg-white`} required>
                      <option value="" disabled selected></option>
                      <option>Emergency</option>
                      <option>Outpatient (OPD)</option>
                      <option>Radiology</option>
                      <option>Pathology</option>
                      <option>Pediatrics</option>
                      <option>General Medicine</option>
                      <option>Surgery</option>
                      <option>Orthopedics</option>
                    </select>
                    <label className={labelStyle}>Hospital Department</label>
                  </div>

                  {/* Specialization – Dropdown */}
                  <div className={inputWrapper}>
                    <select className={`${inputStyle} bg-white`} required>
                      <option value="" disabled selected></option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Dermatology</option>
                      <option>Psychiatry</option>
                      <option>Orthopedics</option>
                      <option>General Physician</option>
                      <option>ENT Specialist</option>
                      <option>Gastroenterology</option>
                      <option>Urology</option>
                      <option>Nephrology</option>
                      <option>Gynecology</option>
                      <option>Oncology</option>
                    </select>
                    <label className={labelStyle}>Specialization</label>
                  </div>

                  {/* Contact & Email */}
                  {["Contact Phone", "Email Address"].map(
                    (placeholder, index) => (
                      <div className={inputWrapper} key={index}>
                        <input
                          className={inputStyle}
                          type={index === 1 ? "email" : "tel"}
                          required
                        />
                        <label className={labelStyle}>{placeholder}</label>
                      </div>
                    )
                  )}

                  {/* Consultation Type */}
                  <div className={inputWrapper}>
                    <select className={`${inputStyle} bg-white`} required>
                      <option value="" disabled selected></option>
                      <option>In-Person Only</option>
                      <option>Online Only</option>
                      <option>Both In-Person & Online</option>
                    </select>
                    <label className={labelStyle}>Consultation Type</label>
                  </div>
                </div>

                {/* Document Upload */}
                <div className="flex flex-col">
                  <label className="text-gray-700 text-sm font-medium mb-2">
                    Upload Medical License Document (PDF / JPG)
                  </label>
                  <input
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg
                file:border-0 file:text-sm file:font-semibold file:bg-blue-100 
                file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
                    type="file"
                    required
                  />
                </div>

                {/* Passwords */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Password", "Confirm Password"].map((ph, i) => (
                    <div className={inputWrapper} key={i}>
                      <input className={inputStyle} type="password" required />
                      <label className={labelStyle}>{ph}</label>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <div className={inputWrapper}>
                  <input className={inputStyle} type="email" required />
                  <label className={labelStyle}>Email Address</label>
                </div>

                <div className={inputWrapper}>
                  <input className={inputStyle} type="password" required />
                  <label className={labelStyle}>Password</label>
                </div>

                <a className="text-sm text-blue-600 hover:underline self-end font-medium -mt-2 cursor-pointer">
                  Forgot Password?
                </a>

                <LoginFiller />
              </div>
            )}

            <button className={primaryButtonStyle}>
              {isLogin ? "Login Securely" : "Submit for Verification"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-700">
            {isLogin ? "New to MediBook?" : "Already registered?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-700 font-bold hover:underline"
            >
              {isLogin ? "Register Now" : "Login Here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
function LoginFiller() {
  return (
    <div className="flex flex-col gap-4 flex-grow">
      <div className="h-2"></div>
      <p className="text-sm text-gray-500 text-center leading-relaxed">
        Manage appointments, patient records, prescriptions, and more — securely
        and instantly.
      </p>

      <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 21a9 9 0 110-18h.01"
          />
        </svg>
        <p className="text-blue-700 text-sm font-medium">
          Your data is encrypted and protected at all levels.
        </p>
      </div>

      <div className="h-[120px] md:h-[160px]"></div>
    </div>
  );
}
