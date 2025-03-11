import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match");
      return;
    }

    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        alert("Signup Successful!");
      } else {
        setError("Signup failed. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-[#b5b25c] text-center">Sign Up</h1>
        <p className="text-muted-foreground text-center mt-2">
          Create your account to access your files
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}

        <form onSubmit={handleSignup} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b5b25c]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b5b25c]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b5b25c]"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b5b25c] text-white py-2.5 rounded-lg text-lg font-semibold hover:bg-[#a0a04b] transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-4">
          Already have an account? <a href="#" className="text-[#b5b25c]">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;