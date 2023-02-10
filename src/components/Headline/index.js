import React from "react";

function Headline({ value, title }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">{title}</span>
      {value ? (
        <span className="block text-indigo-600 border-2 p-4 my-4 border-cyan-900 border-dotted rounded-lg lg:mr-4">
          {value}
        </span>
      ) : null}
    </h2>
  );
}

export default Headline;
