import React from "react";

function Result({ result, toCurrency }) {
  return (
    <div className="text-white text-center">
      {result} {toCurrency}
    </div>
  );
}

export default Result;
