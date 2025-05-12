import React from 'react';
import './App.css';

function App() {
  const handlePlay = async () => {
    try {
      const { ipcRenderer } = window.require('electron');
      const result = await ipcRenderer.invoke('launch-minecraft');
      
      if (!result.success) {
        console.error('Failed to launch:', result.error);
        // TODO: Show error to user
      }
    } catch (error) {
      console.error('Launch error:', error);
      // TODO: Show error to user
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            SynthClient
          </h1>
          <button
            onClick={handlePlay}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
