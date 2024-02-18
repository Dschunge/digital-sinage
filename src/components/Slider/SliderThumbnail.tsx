import React from "react";

import { ISliderItem } from "../../data/slideritems";

type Props = {
  item: ISliderItem;
};

export default function SliderThumbnail({ item }: Props) {
  const { title, titlesmall, subtitle, description, image } = item;
  return (
    <div className="item">
      <img src={image}></img>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">Description</div>
      </div>
    </div>
  );
}
