import { data } from './data';

let counter = 0;
data.forEach((it, index, arr) => {
  if (index - 3 >= 0) {
    const currentWindow = arr[index] + arr[index-1] + arr [index-2]
    const windowBefore = arr[index-1] + arr [index-2] + arr[index-3]
    if(currentWindow>windowBefore){

        counter = counter + 1;
    }
  }
});
console.log(counter);
