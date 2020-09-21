function insertionSort() {
  for (let i = 1; i < divsHeight.length; i++) {
    let key = divsHeight[i];
    let j = i - 1;
    while ((key < divsHeight[j]) && (j >= 0)) {
      divsHeight[j + 1] = divsHeight[j];
      transformDiv(divsArray[j+1], divsHeight[j+1]);
      j--;
    }
    divsHeight[j + 1] = key;
    transformDiv(divsArray[j+1], divsHeight[j+1]);
  }
  
}
