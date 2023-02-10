import React from "react";

function Button() {
  return (
    <div className="inline-flex rounded-md shadow">
      <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
        Change parent value
      </button>
    </div>
  );
}

export default Button;
