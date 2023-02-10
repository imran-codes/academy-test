import React from "react";
import Description from "../../components/Description";
import Headline from "../../components/Headline";
import Child from "../Child";

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <Headline value={value} title="Challenge 1: Update Parent State" />
        <div>
          <Description c1 />
          <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
            <Child />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parent;
