import { Sprite } from "@pixi/react";
import { IPositions } from "../../types/IPositions";
import pearImage from "./pearImage.png";
import "@pixi/events";
import { fruitParameters } from "../../consts/fruitParameters";

function Pear({ x, y, pointerdown }: IPositions & { pointerdown: () => void }) {
  return (
    <Sprite
      image={pearImage}
      x={x}
      y={y}
      anchor={{ x: 0.5, y: 0.5 }}
      width={40}
      height={fruitParameters.height}
      interactive={true}
      pointerdown={pointerdown}
    />
  );
}

export default Pear;
