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
    ctx.closePath();
    ctx.fill();

    // draw cookies 
    for (var i = 0; i < this.state.cookies.length; i++) {
      if(this.state.cookies[i]){
        var position = [Math.floor(i/this.state.gridSize), i - Math.floor(i/this.state.gridSize) * this.state.gridSize];

        // draw enemy
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.rect(position[0] * gridElSize + gridElSize/4, position[1] * g