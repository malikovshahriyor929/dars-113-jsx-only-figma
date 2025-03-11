import React from "react";
import Card from "./card";

const ProductCard = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] max-[320px]:w-[90%] py-10">
      <Card text={"Малярные товары"} />
      <Card text={"Спецодежда"} />
      <Card text={"Для дома и дачи"} />
    </div>
  );
};

export default ProductCard;
