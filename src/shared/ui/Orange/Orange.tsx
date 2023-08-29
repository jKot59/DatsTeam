import { Sprite } from "@pixi/react";
import orangeImage from "./orangeImage.png";
import { IPositions } from "../../types/IPositions";
import "@pixi/events";
import { fruitParameters } from "../../consts/fruitParameters";

function Orange({
  x,
  y,
  pointerdown,
}: IPositions & { pointerdown: () => void }) {
  return (
    <Sprite
      image={orangeImage}
      x={x}
      y={y}
      anchor={{ x: 0.5, y: 0.5 }}
      width={50}
      height={fruitParameters.height}
      interactive={true}
      pointerdown={pointerdown}
    />
  );
}

export default Orange;
