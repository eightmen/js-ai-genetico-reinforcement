
# Genetic reinforcement algorithms in JavaScript
This repository, now maintained by eightmen, is an experimental sandbox for Genetic Algorithms in JavaScript for reinforcement learning environments.

# Pong
One of the implementations is a training module for a clone of the Pong game for Atari 2600

<img src='anims/pong.gif'  width="250px" />

## How to use

Set the genCount in the js/main.js to specify the amount of generations you want the agent (referred to as individual in the code) to train for.

Once the training completes (count == genCount), you can watch the agent play against the heuristic CPU agent as follows:

```javascript
// Modify the second argument to control the game speed.
window.individualPlay(window.bestIndividual, 5) 
```

Enjoy exploring the world of AI in JavaScript!