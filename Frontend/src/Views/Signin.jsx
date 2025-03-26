import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase";
import logogoogle from "../assets/logogoogle.svg";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Signed In: ", result.user);
      navigate("/dashboard"); // Redirect after sign-in
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-amber-700 text-white py-3 rounded-md hover:bg-amber-800 transition mb-4">
          Sign In
        </button>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 shadow-md py-3 px-5 rounded-lg hover:bg-gray-100 transition"
          >
            <img src={logogoogle} alt="Google Logo" className="h-5 w-5" />
            Continue with Google
          </button>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
