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
        ctx.rect(position[0] * gridElSize + gridElSize/4, position[1] * gridElSize + gridElSize/4, gridElSize/2, gridElSize/2);
        ctx.closePath();
        ctx.fill();
      }
    }
  }

  this.reset = function(){
    this.state.enemyPosition = [0, 0];
    this.state.playerPosition = [0, this.state.gridSize-1];
    this.state.enemyDirection = 0;
    this.state.enemyTock = 0;
    this.state.gameOver = false;
    this.state.cookies = new Array(this.state.gridSize*this.state.gridSize);
    this.state.cookieCount = 0;
    this.state.score = 0;
  }

  this.inputSize = 4;

  this.getFeatureVector = function(){
    var vector = [];

    // // player (zero centered - normalized)
    vector[0] = (this.state.playerPosition[0] - this.state.gridSize/2)/this.state.gridSize/2;
    vector[1] = (this.s