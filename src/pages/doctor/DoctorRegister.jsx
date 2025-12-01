export default function DoctorRegister() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Doctor Registration</h2>

      <form className="flex flex-col gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />
        <input className="input" placeholder="License Number" />
        <input className="input" placeholder="Specialization" />
        <input className="input" type="file" />

        <button className="btn-primary">Submit for Verification</button>
      </form>
    </div>
  );
}
