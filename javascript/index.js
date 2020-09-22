var divsArray = [],
    divsHeight = [],
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
  time = 0; 
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
  window.setTimeout(() => {
    div.style= "width:" + divWidthAsPercentage + "%; height:" + divHeight + "%;";
  }, time+=25)
  

}

generateArrayButton.addEventListener("click", createArray);
runButton.addEventListener("click", bubbleSort);
runSelectionSort.addEventListener("click", selectionSort);
runQuickSort.addEventListener("click", quickSortCaller);
runInsertionSort.addEventListener("click", insertionSort);


