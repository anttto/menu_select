import React, { useEffect, useMemo, useState } from "react";
import SelectMenu from "../api/selectMenu";
import SelectGame from "./SelectGame";

export default function Menus() {
  const menus = useMemo(() => new SelectMenu(), []); // menus 객체 초기화를 useMemo로 감싸기
  const [lunch, setLunch] = useState([]);
  const [list, setList] = useState(false);

  useEffect(() => {
    const fetchLunch = async () => {
      const lunchData = await menus.lunch();
      setLunch(lunchData);
    };

    fetchLunch();
  }, [menus]);

  const openListAll = () => {
    setList((prev) => !prev);
  };

  return (
    <>
      <SelectGame menus={lunch} />
      {list && (
        <ul className="listWrap">
          {lunch.map((store, idx) => (
            <li key={idx}>{store}</li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={openListAll} className="allStore">
          {list === false ? "식당 전체 보기" : "닫기"}
        </button>
        <span className="mt-1">자료출처: 김성민 빅데이터 코퍼레이션</span>
      </div>
    </>
  );
}
