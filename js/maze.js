function MazeGame(){
  this.state = {};
  this.state.gridSize = 7;

  this.numActions = 5;
  
  this.init = function(){
    this.reset();
  }

  this.render = function(ctx, width, height){
    