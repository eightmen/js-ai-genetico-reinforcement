(function(){

  importScripts('lib/numeric.js', 'utils.js', 'pong.js', 'individual.js');

  // env
  var env = new PongGame();
  env.init();

  var GAMECOUNT = 0;
  var TIMEOUTGAMES = 0;

  self.onmessage = function (msg) {

    GAMECOUNT = 0;
    TIMEOUTGA