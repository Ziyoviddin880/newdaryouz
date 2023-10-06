import React from "react";
import "./mainPhoto.scss";

export default function MainPhoto() {
  return (
    <div className="main-image">
      <img
        src="https://daryo.uz/static/2023/05/Fozilbek/0e729755-6bd4-4d4e-81b9-9d3c354e9780.jpeg"
        alt=""
      />
      <div className="info">
        <span className="info-title">Mahalliy</span>
        <p className="info-text">
          O‘zbekistonda endi maktab va bog‘cha atrofida tezlik maxsus moslamalar
          yordamida nazorat qilinadi
        </p>
      </div>
    </div>
  );
}
