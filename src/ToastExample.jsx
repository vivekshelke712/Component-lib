import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastExample = () => {
  // Toast display logic
  const showToast = (type) => {
    switch (type) {
      case 'success':
        toast.success('Success Toast: Operation was successful!', {
          position: 'top-center', // Correct position key
        });
        break;
      case 'error':
        toast.error('Error Toast: Something went wrong!', {
          position: 'top-center',
        });
        break;
      case 'info':
        toast.info('Info Toast: Here is some information!', {
          position: 'top-center',
        });
        break;
      case 'warning':
        toast.warning('Warning Toast: Be cautious!', {
          position: 'top-center',
        });
        break;
      default:
        toast('Default Toast: This is a generic toast!', {
          position: 'top-center',
        });
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">React Toastify Example</h1>
      <button
        onClick={() => showToast('success')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast('error')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Show Error Toast
      </button>
      <button
        onClick={() => showToast('info')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Show Info Toast
      </button>
      <button
        onClick={() => showToast('warning')}
        className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
      >
        Show Warning Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastExample;
