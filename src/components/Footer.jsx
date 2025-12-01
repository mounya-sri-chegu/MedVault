import React from "react";
// Note: This component assumes Tailwind CSS is available in the environment.

export default function Footer() {
  // Define a set of navigation links for a typical healthcare application footer
  const navLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Contact Support", href: "#" },
  ];

  const year = new Date().getFullYear();

  return (
    // Footer uses a deep navy blue background for a professional, weighty feel.
    // Increased top margin for separation from main content.
    <footer className="bg-blue-900 text-white pt-16 pb-8 mt-24 font-inter shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area: Logo/Info and Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-blue-700 pb-10 mb-8">
          {/* Column 1: Company Info/Branding */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-extrabold text-teal-400 tracking-wider mb-3">
              MediBook
            </h3>
            <p className="text-sm text-blue-300">
              Your digital gateway to seamless healthcare management.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Placeholder) */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4 text-teal-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>1-800-MEDI-HELP</li>
              <li>support@medibook.com</li>
              <li>123 Health Ave, CA 90210</li>
            </ul>
          </div>

          {/* Column 4: Professional Access (Admin) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-300">
              Professionals
            </h4>
            <a
              href="/admin/login"
              className="inline-block px-4 py-2 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-500 transition duration-300 text-sm"
              aria-label="Admin Login"
            >
              Admin Login
            </a>
          </div>
        </div>

        {/* Copyright and Bottom Text */}
        <div className="text-center">
          <p className="text-sm text-blue-400">
            &copy; {year} MediBook. All Rights Reserved.
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Secure, HIPAA compliant, and built for modern care.
          </p>
        </div>
      </div>
    </footer>
  );
}
