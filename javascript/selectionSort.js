function selectionSort() {
  for (let i=0; i < arraySize; i++) {
    let indexOfSmallest = i;
    for (let j= i + 1; j < arraySize; j++) {
      if (divsHeight[j] < divsHeight[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }

    if (indexOfSmallest !== i) {
      let temp = divsHeight[i];
      divsHeight[i] = divsHeight[indexOfSmallest];
      divsHeight[indexOfSmallest] = temp;
      
    }
  }
  console.log(array);
}
let inputArr = [5, 2, 4, 6, 1, 3, 20, 18 , 19, 40 , 20 , 3, 5, 7, 16 , 19, 22, 22, 30, 40,19, 17, 5, 3, 7, 1, 9];
selectionSort(inputArr)