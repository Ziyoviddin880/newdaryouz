import React, { useState } from "react";
import NewInfo from "../newInfo/NewInfo";

export default function Infoes() {
  const [dataInfo, setDataInfo] = useState([
    {
      photo:
        "https://daryo.uz/static/2023/17.022023/reklama%2010/photo_2023-10-06_10-55-19.jpg",
      title:
        "O‘zbekistonda iPhone 15 va iPhone 15 Pro smartfonlarining rasmiy sotuvi boshlandi",
    },
    {
      photo: "https://daryo.uz/static/Taqdirlov/2qo.jpg",
      title:
        "Shavkat Mirziyoyev Qozon shahrida Tatariston raisi bilan uchrashuv o‘tkazdi",
    },
    {
      photo: "https://daryo.uz/static/zelen22.jpg",
      title:
        "“Hozir Ukraina uchun Rossiyaning qishki hujumlaridan oldin ‘himoya qalqoni’ga ega bo‘lish muhim” — Zelenskiy",
    },
    {
      photo: "https://daryo.uz/static/valday.jpg",
      title:
        "Putin yadroviy sinovlar o‘tkazish yoki o‘tkazmaslik to‘g‘risida hali bir qarorga kelmaganini aytdi",
    },
    {
      photo: "https://daryo.uz/static/2023/10/yozuv_mashinkasi_esse.jpg",
      title:
        "O‘qituvchiga ham, o‘quvchiga ham birday muhim: esse qanday yoziladi?",
    },
  ]);

  return <NewInfo data={dataInfo} />;
}
