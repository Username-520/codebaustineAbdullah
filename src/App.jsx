import React from "react";
import "./App.css";
import Hero from "./assets/ui/hero";
import ServicesWealsooffer from "./assets/ui/ServicesWealsooffer";
import Navbar from "./assets/ui/Navbar";
import Whoweare from "./assets/ui/Whoweare";
import Whatwedo from "./assets/ui/Whatwedo";
import Tabs from "./assets/ui/Tabs";
// import Test from "./test";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whoweare/>
      <ServicesWealsooffer />
      <Whatwedo />
      <dl className="h-20"></dl>
      <Tabs />
      {/* <Test/> */}
          </>
  );
}

export default App;
