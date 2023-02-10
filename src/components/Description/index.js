import React from "react";

function Description({ c1, c2 }) {
  return (
    <>
      {c1 && (
        <p className="py-3">
          {" "}
          Challenge: Parent text should be updated when Child button below is
          clicked.
          <br />
          Feel free to use any string to update the parent's current string.
        </p>
      )}
      {c2 && (
        <p className="py-3">
          {" "}
          Challenge: User should be able to type in any characters on input and{" "}
          <br />
          those character should show in the browser.
        </p>
      )}
    </>
  );
}

export default Description;
