import React from "react";

import { ISliderItem } from "../../data/slideritems";

type Props = {
  item: ISliderItem;
};

export default function SliderItem({ item }: Props) {
  const { title, titlesmall, subtitle, description, image } = item;
  return (
    <div className="item">
      <img src={image}></img>
      <div className="content">
        <div className="author">{titlesmall}</div>
        <div className="title">{title}</div>
        <div className="topic">{subtitle}</div>
        <div className="des text-lg">{description}</div>
        {/* <div className="buttons">
          <button>SEE MORE</button>
          <button>SUBSCRIBE</button>
        </div> */}
      </div>
    </div>
  );
}
