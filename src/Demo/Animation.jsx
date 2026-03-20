import React from 'react';

function Animation(props) {
    return (
        <div className="p-10 flex flex-col items-center gap-6">
      <div className="animate-bounce bg-blue-400 text-white px-6 py-3 rounded">
        Bounce
      </div>

      <div className="animate-pulse bg-blue-400 text-white px-6 py-3 rounded">
        Pulse
      </div>

      <div className="animate-spin bg-blue-400 text-white px-6 py-3 rounded">
        Spin
      </div>
    </div>
    );
}

export default Animation;