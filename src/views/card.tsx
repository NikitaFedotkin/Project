import React, { useState } from "react";
import css from "app/styles/card.css";

const { CardContainer } = css;

const CardCont = (props: { name: string }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <CardContainer>
        <p>Счётчик нажатий на кнопку</p>
        <p>Количество нажатий: {clickCount}</p>
        <button onClick={handleClick}>Нажми меня</button>
      </CardContainer>
    </>
  );
};

export default CardCont;
