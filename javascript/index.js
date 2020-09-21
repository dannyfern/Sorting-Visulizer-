var divsArray = [],
    divsHeight = [],
    runButton2 = document.getElementById("insSort")
    runButton1 = document.getElementById("selSort"),
    runButton = document.getElementById("start"),
    runButton = document.getElementById("bubble-sort"),
    runSelectionSort = document.getElementById("selection-sort"),
    runQuickSort = document.getElementById("quick-sort"),
    runInsertionSort = document.getElementById("insertion-sort"),
    generateArrayButton = document.getElementById("array-gen"),
    algoContainer = document.getElementById("algo-container"),
    arraySize = 50,
    divWidthAsPercentage = 100 / arraySize,
    time = 0;



function createArray() {
  // clear the container of any divs currently in it;
  algoContainer.innerHTML="";
  // Enter for loop that creates all the divs for the array, and there corresponding sizes:
  for (let i = 0, randSize; i < arraySize; i++) {
    // rand number between 20 and 100;
    randSize = Math.floor(Math.random() * 100 * 0.8) + 20;
    divsHeight[i] = randSize;
    divsArray[i] = document.createElement("div");
    divsArray[i].classList.add('divBar');
    algoContainer.appendChild(divsArray[i]);
    divsArray[i].style = "width:" + divWidthAsPercentage + "%; height:" + divsHeight[i] + "%;";
  }
}
var time = 0; 
var count = 0;


function transformDiv(div, divHeight) {
  count++
  window.setTimeout(() => {
    console.log(div)
    console.log(count)
    div.style= "width:" + divWidthAsPercentage + "%; height:" + divHeight + "%;";
  }, time+=25)
  

}

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

function selectionSort() {
  for (let i = 0; i < arraySize; i++) {
    let min = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (divsHeight[j] < divsHeight[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = divsHeight[i];
      divsHeight[i] = divsHeight[min];
      divsHeight[min] = temp;
      transformDiv(divsArray[i], divsHeight[i]);
      transformDiv(divsArray[min], divsHeight[min]);
    }
  }
}

function insertionSort() {
  for (let i = 1; i < arraySize; i++) {
    let j = i - 1
    let temp = divsHeight[i]
    while (temp < divsHeight[j] && j >= 0) {
      divsHeight[j + 1] = divsHeight[j]
      transformDiv(divsArray[j + 1], divsHeight[j + 1]);
      j--
    }
    divsHeight[j + 1] = temp 
    transformDiv(divsArray[j + 1], divsHeight[j + 1]);
  }
}


generateArrayButton.addEventListener("click", createArray);
runButton.addEventListener("click", bubbleSort);
runButton1.addEventListener("click", selectionSort);
runButton2.addEventListener("click", insertionSort);

generateArrayButton.addEventListener("click", createArray);
runButton.addEventListener("click", bubbleSort);
runSelectionSort.addEventListener("click", selectionSort);
runQuickSort.addEventListener("click", quickSortCaller);
runInsertionSort.addEventListener("click", insertionSort);
