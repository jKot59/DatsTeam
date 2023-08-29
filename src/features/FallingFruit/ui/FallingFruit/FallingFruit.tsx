import { useApp, useTick } from '@pixi/react';
import Apple from '../../../../shared/ui/Apple/Apple';
import Orange from '../../../../shared/ui/Orange/Orange';
import Pear from '../../../../shared/ui/Pear/Pear';
import { fruitCounterStore } from '../../../FruitCounter';
import { useState } from 'react';
import { fruitParameters } from '../../../../shared/consts/fruitParameters';
import { EFruitNames } from '../../../../shared/types/EFruitNames';

function FallingFruit({ fruitName }: { fruitName: EFruitNames }) {
  const app = useApp();
  const [fruitPositionX, setFruitPositionX] = useState(Math.random() * app.screen.width);
  const [fruitPositionY, setFruitPositionY] = useState(Math.random() * -app.screen.height);

  useTick(moveFruitDown);

  function moveFruitDown() {
    setFruitPositionY((currFruitPositionY) => {
      // фрукт упал за экран
      if (fruitPositionY > app.screen.height + fruitParameters.height) {
        resetFruitPosition();
      }
      return currFruitPositionY + 2;
    });
  }

  function onFruitClick() {
    fruitCounterStore.increaseFruitCounter();
    resetFruitPosition();
  }

  function resetFruitPosition() {
    setFruitPositionX(Math.random() * app.screen.width);
    setFruitPositionY(Math.random() * -app.screen.height);
  }

  return (
    <>
      {fruitName === 'orange' ? (
        <Orange x={fruitPositionX} y={fruitPositionY} pointerdown={onFruitClick} />
      ) : fruitName === 'apple' ? (
        <Apple x={fruitPositionX} y={fruitPositionY} pointerdown={onFruitClick} />
      ) : (
        <Pear x={fruitPositionX} y={fruitPositionY} pointerdown={onFruitClick} />
      )}
    </>
  );
}

export default FallingFruit;
