import React from "react";

const Whatwedo = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="grid tablet:grid-cols-2">
          <div className="overflow-hidden text-left w-50 h-100">
            <p className="text-center">
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #000000, #979896)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "80px",
                }}
              >
                What We
                <br /> Do
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-6 w-100 text-start tablet:items-start">
            <p className="text-center font-aeonik-regular text-lg text-[#656565] tablet:text-start">
              Explore our range of services designed to bring your ideas to life
              with precision and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
