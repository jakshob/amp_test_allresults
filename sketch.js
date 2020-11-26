//graphVariables
let total = 0;
let pieChartGenerated = false;

let currentData;

var angles = [];
var resultsCopy = [];

var pickerCount=0;

var sentenceDone = "";
// Start and timers
let startText = "";
let timer = 3;

var isPoetry = true;
var picker = 0;

var results;
var counterArr;

//AMP Variables

counter = 0;

counterImages = 0;

var forestSize = 7;
var moseSize = 7;
var waterSize = 7;
var bakkeSize = 7;
var citySize = 18;
var sampleSize = forestSize + moseSize + waterSize + bakkeSize + citySize;

//timers for pictures
let mask;
let primeMs = 75;
let pauseMs = 120;
let targetMs = 100;
let introMs = 800;

let introTime = introMs;
let primeTime = primeMs + introMs;
let pauseTime = primeTime + pauseMs;
let targetTime = pauseTime + targetMs;

let prevMillis1 = 0;
let currentMillis = 0;

var scrollValue = new uiFloat(120);

var start = true;

var state = 0;

var data = [];

var typeFont;

function preload(){
  typeFont = loadFont('assets/design/type_thin.otf');
}

// runs once when the app i starting.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noScrolling();
  fill(255);
  imageMode(CENTER);

  
  loadSymbols(sampleSize);
  loadLandscapes(citySize, 'assets/city');
  loadLandscapes(forestSize, 'assets/forest');
  loadLandscapes(bakkeSize, 'assets/hills');
  loadLandscapes(moseSize, 'assets/mose');
  loadLandscapes(waterSize, 'assets/water');
  loadDesign();
  pushImages(imageLocations);


}


// runs for each frame
function draw() {
  // sets the background to the scrollbar value
  background(255);


  switch (state) {
    case 1:
      uiAMP();
      break;
    case 2:
      uiFinish();
      break;
    case 3:
      timing();
      break;
    case 4:
      uiFinishLoop();
      break;
    case 5:
      uiStartTwo();
      break;
    default:
      uiStart();
  }
}