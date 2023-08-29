import { Sprite } from "@pixi/react";
import { IPositions } from "../../types/IPositions";
import appleImage from "./appleImage.png";
import "@pixi/events";
import { fruitParameters } from "../../consts/fruitParameters";

function Apple({
  x,
  y,
  pointerdown,
}: IPositions & { pointerdown: () => void }) {
  return (
    <Sprite
      image={appleImage}
      x={x}
      y={y}
      anchor={{ x: 0.5, y: 0.5 }}
      width={45}
      height={fruitParameters.height}
      interactive={true}
      pointerdown={pointerdown}
    />
  );
}

export default Apple;
