function PongGame(){
  this.state = {};
  this.state.gridSize = 160;
  this.state.paddleSize = [4, 16];
  this.state.puckSize = [2, 4];
  this.state.paddleSpeed = 2;
  this.state.baseBallVelocity = 2;
  this.state.gameDuration = 21;

  this.numActions = 3;
  this.state.game = 0;
  
  this.init = function(){
    this.reset();
  }

  this.render = function(ctx, width, height){
    ctx.fillStyle = '#904710';
    ctx.fillRect(0,0, width, height);

    // draw score
    ctx.fillStyle = '#9a5c36';
    ctx.font = "21px Arial";
    ctx.textAlign = "cent