import { dataD2 } from './data';

let depth = 0;
let horizontal = 0;
let aim = 0;

dataD2.forEach((element) => {
  const values = element.split(' ');
  const direction = values[0];
  const distance = +values[1];

  console.log(direction, distance);

  switch (direction) {
    case 'forward':
      horizontal = horizontal + distance;
      depth = depth + (-aim) * distance;
      if (depth < 0) {
        depth = 0;
      }
      break;
    case 'up':
      aim = aim + distance;

      break;
    case 'down':
      aim = aim - distance;
      break;
  }
});

console.log(depth, horizontal, depth * horizontal);
