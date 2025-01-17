import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastExample = () => {
  // Functions to display different types of toasts
  const showToast = (type) => {
    switch (type) {
      case 'success':
        toast.success('This is a success toast!', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case 'error':
        toast.error('This is an error toast!', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case 'info':
        toast.info('This is an info toast!', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case 'warning':
        toast.warn('This is a warning toast!', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      default:
        toast('This is a default toast!', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold mb-6">React Toast Example</h1>
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
