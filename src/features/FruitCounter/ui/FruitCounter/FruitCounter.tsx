import { Text } from "@pixi/react";
import fruitCounterStore from "../../model/fruitCounterStore";
import * as PIXI from "pixi.js";
import { observer } from "mobx-react-lite";

function FruitCounter() {
  return (
    <Text
      text={`catched fruits: ${fruitCounterStore.value}`}
      x={0}
      y={0}
      style={
        new PIXI.TextStyle({
          fontSize: 20,
          fontWeight: "400",
          fill: ["#000"], // gradient
        })
      }
    />
  );
}

export default observer(FruitCounter);
