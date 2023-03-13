function MazeGame(){
  this.state = {};
  this.state.gridSize = 7;

  this.numActions = 5;
  
  this.init = function(){
    this.reset();
  }

  this.render = function(ctx, width, height){
    ctx.clearRect(0, 0, width, height);

    var gridElSize = width / this.state.gridSize;

    // draw player
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.rect(this.state.playerPosition[0] * gridElSize, this.state.playerPosition[1] * gridElSize, gridElSize, gridElSize);
    ctx.closePath();
    ctx.fill();

    // draw enemy
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(this.state.enemyPosition[0] * gridElSize, this.state.enemyPosition[1] * gridElSize, gridElSize, gridElSize);