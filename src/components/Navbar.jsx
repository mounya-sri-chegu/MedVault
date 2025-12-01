import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo/Brand Name */}
          <Link to={"/"}>
            <h1 className="text-3xl font-extrabold text-blue-700 tracking-wider">
              MediBook
            </h1>
          </Link>

          {/* Navigation Links and Buttons */}
          <div className="flex gap-4 items-center">
            {/* Home Link */}

            {/* Doctor Portal Link */}
            <a
              href="/doctor/auth"
              className="text-blue-700 font-semibold border border-blue-700 hover:bg-blue-50 transition duration-150 px-4 py-2 rounded-lg"
            >
              For Doctors
            </a>

            {/* Patient Login Button (Direct Link) */}
            <a
              href="/patient/auth" // Direct link to the patient login page
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 transform hover:scale-[1.02]"
            >
              Login / Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
