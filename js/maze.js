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
    ctx.rect(this.sta