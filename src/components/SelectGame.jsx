import React, { useState } from "react";

export default function SelectGame({ menus }) {
  // console.log(menus);
  const [selected, setSelected] = useState("");

  const randomSelect = () => {
    const randomIndex = Math.floor(Math.random() * menus.length);
    const randomElement = menus[randomIndex];
    setSelected(randomElement);
    // console.log(randomElement); // 랜덤으로 선택된 요소 출력
  };
  return (
    <>
      <button onClick={randomSelect} className="todaySelect">
        오늘은 여기다 !!
      </button>
      <h1 className="storeName">{selected === "" ? "어디 갈까?" : selected}</h1>
    </>
  );
}
