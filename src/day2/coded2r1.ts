import { dataD2 } from './data';

let depth = 0;
let horizontal = 0;

dataD2.forEach((element) => {
  const values = element.split(' ');
  const direction = values[0];
  const distance = +values[1];

  console.log(direction, distance);

  switch (direction) {
    case 'forward':
      horizontal = horizontal + distance;
      break;
    case 'up':
        depth = depth - distance;
        if(depth < 0) {depth = 0};
      break;
    case 'down':
        depth = depth + distance;
      break;
  }
});

console.log(depth, horizontal, depth*horizontal);