function bubbleSort() {
    for (let i = 0; i < arraySize; i++) {
      for (let j = i + 1; j < arraySize +1; j++) {
        if (divsHeight[i] > divsHeight[j]) {
          let temp = divsHeight[i];
          divsHeight[i] = divsHeight[j];
          divsHeight[j] = temp;
          transformDiv(divsArray[i], divsHeight[i]);
          transformDiv(divsArray[j], divsHeight[j]);
        }
      }
    }
  }