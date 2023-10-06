import React from "react";
import Footer from "./components/footer/Footer";
import Infoes from "./components/infoes/Infoes";
import MainPhoto from "./components/mainPhoto/MainPhoto";

export default function App() {
  return (
    <div>
      <div className="container">
        {/* <Navbar />
         */}
        <div className="main">
          <div className="left-side">
            <MainPhoto />
            <Infoes />
          </div>
          <div className="right-side"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
