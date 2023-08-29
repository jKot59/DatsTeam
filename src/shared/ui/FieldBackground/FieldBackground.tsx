import { Sprite, useApp } from "@pixi/react";
import { IPositions } from "../../types/IPositions";
import BackgroundPicture from "./backgroundPicture.jpg";

function FieldBackground({ x, y }: IPositions) {
  const app = useApp();
  return (
    <Sprite
      image={BackgroundPicture}
      x={x}
      y={y}
      width={app.screen.width}
      height={app.screen.height}
    />
  );
}

export default FieldBackground;
