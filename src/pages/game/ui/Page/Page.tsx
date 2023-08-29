import { Stage } from '@pixi/react';
import FieldBackground from '../../../../shared/ui/FieldBackground/FieldBackground';
import FruitCounter from '../../../../features/FruitCounter/ui/FruitCounter/FruitCounter';
import { FallingFruit } from '../../../../features/FallingFruit';
import { EFruitNames } from '../../../../shared/types/EFruitNames';

// создаем пул фруктов
const initialFruit: { name: EFruitNames; x: number; y: number }[] = [];
for (let i = 0; i < 10; i++) {
  initialFruit.push({
    name: (Object.keys(EFruitNames) as EFruitNames[])[i % 3],
    x: Math.random(),
    y: Math.random(),
  });
}

function Page() {
  return (
    <Stage>
      <FieldBackground x={0} y={0} />
      {initialFruit.map((fruit, i) => (
        <FallingFruit key={i} fruitName={fruit.name} />
      ))}
      <FruitCounter />
    </Stage>
  );
}

export default Page;
