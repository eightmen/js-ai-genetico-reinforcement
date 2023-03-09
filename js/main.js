
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

  // test save
  // saveFile("test.csv", 'blah');

  console.log("Total number of weights: " + (game.inputSize * numHiddenNeurons + numHiddenNeurons * game.numActions));

  for(var x = 0; x < populationSize; x++){
    var individual = new Individual();
    individual.init(game.inputSize, numHiddenNeurons, game.numActions);
    population[x] = individual;
  }

  // Initialize workers
  var individualCountPerWorker =  Math.round(populationSize/workerCount);

  var workers = [];
  for(var i = 0; i < workerCount; i++){
    var worker = new Worker("js/worker.js");
    workers.push(worker);

    worker.addEventListener('message', handleWorkerMessage);

  }

  // keeping track of individualScores
  var individualScores = [];
  var individualScoresSubArrays = [];
  var threadReadyCount = 0;


  function handleWorkerMessage(msg){
    var data = msg.data;
    // console.log("Received message from worker:" + data.workerIndex);

    // add scores to subarrays
    individualScoresSubArrays[data.workerIndex] = data.individualScores;
    threadReadyCount++;
    GAMECOUNT += data.GAMECOUNT;
    TIMEOUTGAMES += data.TIMEOUTGAMES;

    if(threadReadyCount == workerCount){
      postIterateGeneration();
    }

  }

  var gen = 0;

  

  function preIterateGeneration(){

    // PHASE I: evaluate each individual

    // Single threaded
    // for(var x = 0; x < population.length; x++){
    //   individualScores[x] = envFitness(population[x], mazeGame, fitnessRepeat);
    // }

    // kick off individual
    var totalPopulationSent = 0;

    // reset global state for MT
    individualScoresSubArrays = [];