
function bubbleSort() {
  let swap = false;
  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize -i; j++) {
      if (divsHeight[j] > divsHeight[j + 1]) {
        let temp = divsHeight[j];
        divsHeight[j] = divsHeight[j + 1];
        divsHeight[j + 1] = temp;
        transformDiv(divsArray[j + 1], divsHeight[j + 1]);
        transformDiv(divsArray[j], divsHeight[j]);
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
}

