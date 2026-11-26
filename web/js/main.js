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

// ===== Activity 04: Gate Protocols =====
const MAX_SUPPLY = 1000000;

function isIntInRange(value, min, max) {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= min && value <= max;
}

function approveSupply(stock, requested, isInfected) {
  if (!isIntInRange(stock, 0, MAX_SUPPLY)) {
    return { approved: false, stock: stock, message: "Rejected: stock must be an integer from 0 to 1,000,000." };
  }
  if (!isIntInRange(requested, 1, MAX_SUPPLY)) {
    return { approved: false, stock: stock, message: "Rejected: request must be an integer from 1 to 1,000,000." };
  }
  if (typeof isInfected !== "boolean") {
    return { approved: false, stock: stock, message: "Rejected: infection status must be true or false." };
  }
  if (isInfected === true) {
    return { approved: false, stock: stock, message: "Rejected: infected source cannot transfer supplies." };
  }
  if (requested > stock) {
    return { approved: false, stock: stock, message: "Rejected: request exceeds stock." };
  }
  const newStock = stock - requested;
  return { approved: true, stock: newStock, message: "Approved: " + requested + " released. Stock left: " + newStock + "." };
}

function calculateRationDays(stock, survivors, dailyAllowance) {
  if (!isIntInRange(stock, 0, MAX_SUPPLY)) {
    return { ok: false, days: null, message: "Invalid: stock must be an integer from 0 to 1,000,000." };
  }
  if (!Number.isSafeInteger(survivors) || survivors < 1) {
    return { ok: false, days: null, message: "Invalid: survivors must be a positive safe integer." };
  }
  if (!Number.isSafeInteger(dailyAllowance) || dailyAllowance < 1) {
    return { ok: false, days: null, message: "Invalid: daily allowance must be a positive safe integer." };
  }
  const dailyDemand = survivors * dailyAllowance;
  if (!Number.isSafeInteger(dailyDemand)) {
    return { ok: false, days: null, message: "Invalid: daily demand is too large." };
  }
  const days = Math.floor(stock / dailyDemand);
  return { ok: true, days: days, message: "Supplies last " + days + " full day(s)." };
}

// Checks (run only in Node, not the browser)
if (typeof document === "undefined") {
  const cases = [
    [5, 2, false], [5, 5, false], [5, 6, false], [5, 0, false],
    [5, -1, false], [5, 1.5, false], [5, 1, true],
    [5, "2", false], [5, NaN, false], [5, Infinity, false]
  ];
  for (const [s, q, inf] of cases) {
    const r = approveSupply(s, q, inf);
    console.log("stock", s, "request", String(q), "infected", inf, "=>", r.approved, "| stock now", r.stock, "|", r.message);
  }
  console.log(calculateRationDays(100, 5, 2).message);
  console.log(calculateRationDays(0, 5, 2).message);
  console.log(calculateRationDays(100, 0, 2).message);
  console.log(calculateRationDays(100, 5, "2").message);
}