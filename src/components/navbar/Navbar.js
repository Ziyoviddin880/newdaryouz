import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "./navbar.scss";

export default function Navbar() {
  const [menus, setMenus] = useState([
    {
      menu: "Mahalliy",
      items: ["Mehridaryo", "Boshqalar"],
    },
    {
      menu: "Markaziy Osiyo",
      items: [
        "Qirg'iziston",
        "Qozog'iston",
        "Turkmaniston",
        "Tojikiston",
        "Afg'oniston",
      ],
    },
    {
      menu: "Dunyo",
      items: [],
    },
    {
      menu: "Pul",
      items: ["Iqtisodiyot", "Moliya", "Kripto", "Biznes"],
    },
    {
      menu: "Madaniyat",
      items: ["Kino", "Kitob", "Musiqa", "Shou-biznes"],
    },
    {
      menu: "LayfStayl",
      items: [
        "Ayollar sahifasi",
        "Texnologiyalar",
        "Avto",
        "Qo'ziqorin",
        "Sayohat",
        "Salomatlik",
        "Ta'lim",
      ],
    },
    {
      menu: "Sport",
      items: [],
    },
    {
      menu: "Kolumnistlar",
      items: [],
    },
    {
      menu: "Multimedia",
      items: [],
    },
  ]);
  const [lang, setLang] = useState(["uz", "rus", "eng"]);
  return (
    <div className="navbar-box">
      <div className="menu">
        <ul>
          {menus.map((item, index) => (
            <li key={index}>
              {item.menu}{" "}
              {item.items.length > 0 ? (
                <span>
                  <FontAwesomeIcon
                    className="select-icon"
                    icon={faAngleRight}
                  />
                  {item.items.map((value, id) => (
                    <div className="categories" key={id}>
                      <div className="category">{value}</div>
                    </div>
                  ))}
                </span>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="settings-items">
        <a className="hover-icon" href="#">
          <FontAwesomeIcon className="icon-moon" icon={faMoon} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="#">
          {lang[0]}
          <span>
            <FontAwesomeIcon className="select-icon" icon={faAngleRight} />
          </span>
        </a>
        <a href="#" className="hover-icon">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}
