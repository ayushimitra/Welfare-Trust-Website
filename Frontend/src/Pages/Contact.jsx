import React, { useState } from "react";

const MemberForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Placeholder for payment gateway integration (e.g., Razorpay/Stripe)
    alert("Redirecting to payment...");
    setTimeout(() => {
      setIsPaid(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Become a Member
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Pay <span className="font-semibold text-amber-700">₹1001</span> yearly and enjoy exclusive merchandise!
        </p>

        {!isPaid ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Shipping Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
            />

            <button
              onClick={handlePayment}
              className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Pay ₹1001 & Become a Member
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-green-600 text-xl font-bold mb-2">🎉 Payment Successful!</h3>
            <p className="text-gray-700">Welcome to the exclusive members' club! 🎁</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberForm;
