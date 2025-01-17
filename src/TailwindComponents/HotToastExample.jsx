import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const HotToastAdvanced = () => {
  // Toast examples
  const showToast = (type) => {
    switch (type) {
      case 'success':
        toast.success('✅ Success! Everything went smoothly.');
        break;
      case 'error':
        toast.error('❌ Error! Something went wrong.');
        break;
      case 'promise':
        toast.promise(
          new Promise((resolve) => setTimeout(resolve, 3000)),
          {
            loading: '⏳ Loading... Please wait.',
            success: '✅ Promise Resolved!',
            error: '❌ Promise Rejected!',
          }
        );
        break;
      case 'multiLine':
        toast('↕️ This is a toast\nwith multiple lines of text!', {
          duration: 4000,
        });
        break;
      case 'emoji':
        toast('👏 Great job! You’ve earned this toast!');
        break;
      case 'darkMode':
        toast('🌚 This toast works in dark mode too!', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        break;
      case 'jsx':
        toast(
          <span>
            🔩 This toast contains <b>JSX content</b>!
          </span>
        );
        break;
      case 'themed':
        toast('🎨 Custom themed toast!', {
          icon: '🎉',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        });
        break;
      case 'customPosition':
        toast('⬆️ Custom positioned toast!', {
          position: 'bottom-left',
        });
        break;
      case 'tailwind':
        toast('️💨 TailwindCSS styled toast!', {
          className: 'bg-blue-500 text-white font-bold p-4 rounded',
        });
        break;
      default:
        toast('🚀 Default Toast');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">React Hot Toast Advanced Example</h1>

      <button
        onClick={() => showToast('success')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        ✅ Success
      </button>
      <button
        onClick={() => showToast('error')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        ❌ Error
      </button>
      <button
        onClick={() => showToast('promise')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        ⏳ Promise
      </button>
      <button
        onClick={() => showToast('multiLine')}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
      >
        ↕️ Multi Line
      </button>
      <button
        onClick={() => showToast('emoji')}
        className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
      >
        👏 Emoji
      </button>
      <button
        onClick={() => showToast('darkMode')}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
      >
        🌚 Dark Mode
      </button>
      <button
        onClick={() => showToast('jsx')}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700"
      >
        🔩 JSX Content
      </button>
      <button
        onClick={() => showToast('themed')}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
      >
        🎨 Themed
      </button>
      <button
        onClick={() => showToast('customPosition')}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
      >
        ⬆️ Custom Position
      </button>
      <button
        onClick={() => showToast('tailwind')}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700"
      >
        ️💨 TailwindCSS
      </button>

      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          style: {
            fontSize: '16px',
            padding: '12px',
          },
        }}
      />
    </div>
  );
};

export default HotToastAdvanced;
        