import React from "react";
import "./Whoweare.css";

const Whoweare = () => {
  return (
    <>
      <section className="customize-div-one container-wrapper">
        <div className="image-container-one">
          <img src="public/images/Whoweare(1).png" alt="whoweare" />
        </div>
        <div className="customize-text-one">
          <h2 className="w-8 text-7xl whoweare-text-one">WhoWe Are</h2>
          <p>
            Code Baustein is a pioneering software house based in Germany,
            specializing in creating innovative websites, developing blockchain
            solutions, and building decentralized applications. Our mission is
            to empower businesses with technology that drives growth and
            security.
          </p>
        </div>
      </section>
      <section className="customize-div-one container-wrapper">
        <div className="customize-text-one">
          <h2 className=" whoweare-text-one text-7xl">Mission Statement</h2>
          <p>
          We are committed to delivering top-notch services that blend creativity, technical expertise, and reliability.
          </p>
        </div>
          <img src="public/images/Whoweare(1).png" alt="whoweare" />
      </section>
  </>
  );
};

export default Whoweare;
