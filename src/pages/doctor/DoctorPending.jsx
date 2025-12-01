export default function DoctorPending() {
  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-yellow-50 border border-yellow-300 rounded-xl">
      <h2 className="text-xl font-bold text-yellow-700">
        Verification Pending
      </h2>
      <p className="mt-2 text-gray-700">
        Your documents have been submitted. Admin will verify your account
        shortly.
      </p>
    </div>
  );
}
