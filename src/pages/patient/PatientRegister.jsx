export default function PatientRegister() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Patient Registration</h2>

      <form className="flex flex-col gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />
        <input className="input" placeholder="Phone Number" />

        <button className="btn-primary">Register</button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <a href="/patient/login" className="text-blue-600">
          Login
        </a>
      </p>
    </div>
  );
}
