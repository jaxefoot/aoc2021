import { dataD3 } from './data';

const countOnes = {};

dataD3.forEach((it) => {
  const chars = [...it];
  chars.forEach((char, index) => {
    if (char === '1') {
      countOnes[index] ? (countOnes[index] = countOnes[index] + 1) : (countOnes[index] = 1);
    }
  });
});

let gamma = '';
let epsilon = '';
Object.keys(countOnes).forEach((key) => {
  if (countOnes[key] > dataD3.length / 2) {
    gamma = gamma + '1';
    epsilon = epsilon + '0';
  } else {
    gamma = gamma + '0';
    epsilon = epsilon + '1';
  }
});

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
