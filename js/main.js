
(function(){

  // main script for GA playground
  var canv = document.querySelector('canvas');
  canv.width = 160;
  canv.height = 160;

  canv.style.width = '320px';
  canv.style.height = '320px';

  var GAMECOUNT = 0;
  var TIMEOUTGAMES = 0;
  const SCALEFACTOR = true;
  const RANDOMINDIVIDUALS = false;
  const MUTATIONDECAY = true;
  
  var MR = 0.1;
  var MPR = 0.1;

  var ctx = canv.getContext('2d');

  // config
  var numHiddenNeurons = 64;
  var populationSize = 600;
  var eliteCount = Math.round(populationSize*0.20);

  var workerCount = 8;
  var fitnessRepeat = 1;

  var prevTime = window.performance.now();

  // one elite sticky, one random
  var eliteRandomReduction = 1;
  if(RANDOMINDIVIDUALS){
    eliteRandomReduction = 2;
  }
  var replicateCount = Math.round(populationSize/eliteCount) - eliteRandomReduction;

  // pressure is eliteCount/populationSize;
  var genCount = 100;
  var maxSteps = 14000;

  // main loop
  var game = new PongGame();
  game.init();

  var population = [];

  var experimentStats = {'populationMean': [], 'eliteMean': []};
  var exprimentFileName = "experiment-" + currentDateString()+".csv";

  exprimentFileName = 'experiment.csv';