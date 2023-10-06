import React from "react";
import "./newInfo.scss";

export default function NewInfo(props) {
  return (
    <div className="info-box">
      {console.log(props)}
      {props.data.map((item, index) => (
        <a href="#" className="info-box__element">
          <img src={item.photo} alt="" />
          <p className="info-box__element-title">{item.title}</p>
        </a>
      ))}
    </div>
  );
}
