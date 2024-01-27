"use strict";
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};
let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);  
}
if (currentState === "green") {
  trafficLight.stateIndex = "orange";
} else if (currentState === "orange") {
  trafficLight.stateIndex = "red";
} else {
 trafficLight.stateIndex = "green";
  cycle++
}
