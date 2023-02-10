import React from "react";
import Description from "../components/Description";
import Headline from "../components/Headline";

function ChallengeTwo() {
  const [] = React.useState("");
  return (
    <div className="bg-gray-50 border-t-2 border-b-2">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <Headline title="Challenge 2: Data Binding" />
        <div className="lg:items-start justify-start flex-col">
          <Description c2 />
          <input
            className="p-3 border-2 rounded-lg"
            type="text"
            placeholder="Enter Text"
          />
          <p className="mt-3 text-lg">Update text here</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengeTwo;
