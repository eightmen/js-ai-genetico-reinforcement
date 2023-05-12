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
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"; 
    ctx.fillText(this.state.score, this.state.gridSize/2, this.state.gridSize/2);

    // draw puck
    ctx.fillStyle = '#ffd49d';
    ctx.fillRect(this.state.ballPosition[0]-this.state.puckSize[0]/2, this.state.ballPosition[1]-this.state.puckSize[1]/2, this.state.puckSize[0], this.state.puckSize[1]);

    // draw player
    ctx.fillStyle = '#5cbb57';
 