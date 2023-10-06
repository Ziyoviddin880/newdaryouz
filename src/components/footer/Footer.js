import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="container">
        <div className="logo">
          <img src="https://daryo.uz/logo/logo-white.png" alt="White Logo" />
        </div>
        <p>
          “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi
          (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi
          huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan
          13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot
          vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq
          ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik,
          grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz”
          saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining
          muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l
          qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan
          foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz
        </p>
        <div className="social d-flex">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
