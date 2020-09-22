var divsArray = [],
    divsHeight = [],
    BubbleSort = document.getElementById("bubble-sort"),
    SelectionSort = document.getElementById("selection-sort"),
    QuickSort = document.getElementById("quick-sort"),
    InsertionSort = document.getElementById("insertion-sort"),
    runAlgorithm = document.getElementById("run-algorithm"),
    generateArrayButton = document.getElementById("array-gen"),
    algoContainer = document.getElementById("algo-container"),
    explainerContainer = document.getElementById("explainer-container"),
    arraySize = 50,
    divWidthAsPercentage = 100 / arraySize,
    time = 0,
    algorithm;



function createArray() {
  time =0;
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


function explainerDiv(divId) {
  explainerContainer.innerHTML="";
  let divExplainer = document.createElement("div");
  divExplainer.id = divId;
  explainerContainer.appendChild(divExplainer);
  if (divId == "bubble-sort-explainer") {
    divExplainer.innerHTML="this is the message i want for bubble sort";
  } else if (divId == "selection-sort-explainer") {
    divExplainer.innerHTML="this is the message i want for selection sort";
  } else {
    divExplainer.innerHTML="not yet linked";
  }
}
function startAlgorithm() {
  console.log("hello")
  div = explainerContainer.children[0];
  if (div.id == "bubble-sort-explainer") {
    bubbleSort();
  }
}

generateArrayButton.addEventListener("click", createArray);
runAlgorithm.addEventListener("click", startAlgorithm);
BubbleSort.addEventListener("click", () => {explainerDiv("bubble-sort-explainer")});
SelectionSort.addEventListener("click", () => {explainerDiv("selection-sort-explainer")});
QuickSort.addEventListener("click", () => {explainerDiv("quick-sort-explainer")});
InsertionSort.addEventListener("click", () => {explainerDiv("insertion-sort-explainer")});






