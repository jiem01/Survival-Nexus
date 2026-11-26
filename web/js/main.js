const waterUnits = 18;
const waterSurvivors = 6;
const waterPerSurvivorPerDay = 2;

const waterDailyDemand = waterSurvivors * waterPerSurvivorPerDay;
const waterCompleteDays = Math.floor(waterUnits / waterDailyDemand);
const waterLeftover = waterUnits - waterCompleteDays * waterDailyDemand;

console.log("=== WATER ===");
console.log("Starting units:", waterUnits);
console.log("Daily demand:", waterDailyDemand);
console.log("Complete days:", waterCompleteDays);
console.log("Leftover:", waterLeftover);

const foodUnits = 25;
const foodSurvivors = 4;
const foodPerSurvivorPerDay = 2;

const foodDailyDemand = foodSurvivors * foodPerSurvivorPerDay;
const foodCompleteDays = Math.floor(foodUnits / foodDailyDemand);
const foodLeftover = foodUnits - foodCompleteDays * foodDailyDemand;

console.log("=== FOOD ===");
console.log("Starting units:", foodUnits);
console.log("Daily demand:", foodDailyDemand);
console.log("Complete days:", foodCompleteDays);
console.log("Leftover:", foodLeftover);

