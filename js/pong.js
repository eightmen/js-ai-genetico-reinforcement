function PongGame(){
  this.state = {};
  this.state.gridSize = 160;
  this.state.paddleSize = [4, 16];
  this.state.puckSize = [2, 4];
  this.state.paddleSpeed = 2;
  this.state.baseBallVelocity = 2;
  this.state.gameDuration = 21;

  this.