import React, { useState } from "react";

const test = () => {
 
  const [isopen, setisopen] = useState(false);
  
  const handleclose = () => {
    setisopen(false);
   }
  const handleopen = () => { 
    setisopen(true);
  }
  return (
      <>
      {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg">
            <p>hello world</p>
            <button onClick={handleclose}>close</button>
          </div>
        </div>
      )}
      <div>
        <button onClick={handleopen} className="flex bg-blue-600">open moudal</button>
      </div>
    </>
  );
};

export default test;
