var divsArray = [],
    divsHeight = [],
    runButton1 = document.getElementById("selSort"),
    runButton = document.getElementById("start"),
    generateArrayButton = document.getElementById("array-gen"),
    algoContainer = document.getElementById("algo-container"),
    arraySize = 50,
    divWidthAsPercentage = 100 / arraySize;



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
function transformDiv(div, divHeight) {
  window.setTimeout(() => {
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



generateArrayButton.addEventListener("click", createArray);
runButton.addEventListener("click", bubbleSort);
runButton1.addEventListener("click", selectionSort);



