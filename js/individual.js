
function Individual(){
  this.state = {};

  this.init = function(inputSize, numHidden, numActions){
    // set up w0 weight matrix
    this.state.w0 = [];
    for(var r = 0; r < numHidden; r++){
      this.state.w0[r] = [];
      for(var c = 0; c < inputSize; c++){
        this.state.w0[r][c] = gaussianRand();
      }
    }

    // set up w1 weight matrix
    this.state.w1 = [];
    for(var r = 0; r < numActions; r++){
      this.state.w1[r] = [];