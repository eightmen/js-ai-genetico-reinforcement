(function(){

  importScripts('lib/numeric.js', 'utils.js', 'pong.js', 'individual.js');

  // env
  var env = new PongGame();
  env.init();

  var GAMECOUNT = 0