import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TwoFactorAuth = () => {
  const [step, setStep] = useState(1); // Step 1: Login, Step 2: Enter 2FA
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        toast.success('2FA code sent!');
        setStep(2); // Move to 2FA code step
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Error during login');
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-2fa', { email, code });
      if (response.data.success) {
        toast.success('Login successful!');
      } else {
        toast.error('Invalid 2FA code');
      }
    } catch (error) {
      toast.error('Error verifying 2FA code');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      {step === 1 && (
        <form onSubmit={handleLogin} className="p-6 bg-gray-200 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyCode} className="p-6 bg-gray-200 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter 2FA Code</h2>
          <input
            type="text"
            placeholder="2FA Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Verify
          </button>
        </form>
      )}
    </div>
  );
};

export default TwoFactorAuth;
