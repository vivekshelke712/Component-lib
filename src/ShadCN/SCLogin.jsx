// import { Input } from 'postcss';
import React, { useState } from 'react';
import { Button, Input } from '@shadcn/ui';

function SCLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log('Logged in with:', email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default SCLogin;
