export default function PatientLogin() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Patient Login</h2>

      <form className="flex flex-col gap-4">
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />
        <button className="btn-primary">Login</button>
      </form>
    </div>
  );
}
