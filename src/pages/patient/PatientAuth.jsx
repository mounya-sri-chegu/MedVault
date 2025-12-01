import { useState } from "react";
import patientImageUrl from "../../assets/patient.jpg"; // Assuming this path is correct

// ---------------------------
// Floating Input Component
// ---------------------------
function FloatingInput({ label, type, required = false }) {
  return (
    <div className="relative w-full">
      <input
        // The ':valid' pseudo-class is essential for the label's "floating" effect
        type={type}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md
          peer focus:border-purple-600 focus:ring-2 focus:ring-purple-300 outline-none transition font-medium"
      />
      <label
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-600
          peer-valid:top-2 peer-valid:text-xs peer-valid:text-purple-600" // peer-valid moves the label up when input is filled
      >
        {label}
      </label>
    </div>
  );
}

// ---------------------------
// Login Helper (Additional info and Forgot Password link)
// ---------------------------
function LoginHelper() {
  return (
    // This div's height is stabilized on the register form using a placeholder div
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex items-center justify-center p-3 rounded-xl bg-purple-50 border border-purple-200 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-600 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-purple-700 text-xs font-medium">
          View prescriptions, reports & visit summaries instantly.
        </p>
      </div>
      <a
        href="#"
        className="text-sm text-purple-600 hover:text-purple-800 hover:underline self-end font-medium -mt-2"
      >
        Forgot Password?
      </a>
    </div>
  );
}

// ---------------------------
// MAIN COMPONENT
// ---------------------------
export default function PatientAuth() {
  const [isLogin, setIsLogin] = useState(true);

  const primaryButton =
    "w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold " +
    "rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition";

  // --- Adjusted Logic for Height Consistency ---
  const submitButtonClasses = isLogin
    ? primaryButton // Login: No extra margin needed
    : `mt-[-28px] ${primaryButton}`; // Register: Use negative margin to pull the button up

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-6 font-inter">
      <div className="flex flex-col lg:flex-row bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full border border-white/30">
        {/* -------------------------- LEFT IMAGE (Stable Height) -------------------------- */}
        <div className="lg:w-1/2 relative min-h-[280px] lg:min-h-full">
          <img
            src={patientImageUrl}
            alt="Patient"
            className="absolute inset-0 w-full h-full object-cover p-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/70 to-pink-500/60 mix-blend-multiply"></div>

          <div className="absolute bottom-10 left-8 text-white max-w-xs">
            <h3 className="text-3xl font-bold drop-shadow-lg leading-snug">
              {isLogin ? "Welcome Back" : "Begin Your Care Journey"}
            </h3>
            <p className="text-sm opacity-90 mt-2 leading-relaxed">
              {isLogin
                ? "Access your medical history, medications, and appointments anytime."
                : "Register now and stay connected with your healthcare provider easily."}
            </p>
          </div>
        </div>

        {/* -------------------------- RIGHT FORM (Fixed Height) -------------------------- */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center min-h-[600px]">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-10 text-center font-poppins">
            {isLogin ? "Patient Login" : "Create Patient Account"}
          </h2>

          <form className="flex flex-col gap-5">
            {/* ------------------ REGISTER FIELDS (4 input fields) ------------------ */}
            {!isLogin && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput label="Full Name" type="text" required />
                  <FloatingInput label="Age" type="number" required />

                  <FloatingInput label="Phone Number" type="tel" required />
                  <FloatingInput label="Email Address" type="email" required />
                </div>
              </>
            )}

            {/* ------------------ COMMON FIELDS ------------------ */}
            <FloatingInput label="Password" type="password" required />
            <FloatingInput label="Confirm Password" type="password" required />

            {/* ------------------ LOGIN HELPER / REGISTER FILLER ------------------ */}
            {isLogin ? (
              <LoginHelper />
            ) : (
              // Filler div to maintain identical content layout flow
              <div className="h-[72px] invisible"></div>
            )}

            {/* ------------------ SUBMIT BUTTON ------------------ */}
            {/* Conditional class applied here */}
            <button type="submit" className={submitButtonClasses}>
              {isLogin ? "Login Securely" : "Register Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-700">
            {isLogin ? "New to our portal?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-purple-600 hover:text-purple-800 hover:underline transition"
            >
              {isLogin ? "Register Now" : "Login Here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
