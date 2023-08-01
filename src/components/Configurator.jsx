import React from "react";
import { useCustomization } from "./Customization";

const Configurator = () => {
  const {
    chairColors,
    chairColor,
    setChairColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="section">
        <div className="section__title">Chair color</div>
        <div className="section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
