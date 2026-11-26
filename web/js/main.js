// ===== Helpers (from Activity 04) =====
const MAX_SUPPLY = 1000000;

function isIntInRange(value, min, max) {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= min && value <= max;
}

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

// ===== Activity 05: Calculate Daily Rations =====
function analyzeShelters(counts, dailyRequirement) {
  // 1. Validate the daily requirement
  if (!Number.isSafeInteger(dailyRequirement) || dailyRequirement < 1) {
    return { ok: false, message: "Rejected: daily requirement must be a positive safe integer." };
  }
  if (!Array.isArray(counts)) {
    return { ok: false, message: "Rejected: counts must be an array." };
  }
  // 5. Check EVERY stock first, so no partial report is ever made
  for (let i = 0; i < counts.length; i++) {
    if (!isIntInRange(counts[i], 0, MAX_SUPPLY)) {
      return { ok: false, message: "Rejected: invalid stock at position " + i + " (counting from 0)." };
    }
  }
  // 2-4. Calculate coverage, total, and low-coverage count
  const coverage = [];
  let total = 0;
  let lowCount = 0;
  for (const count of counts) {
    const days = Math.floor(count / dailyRequirement);
    coverage.push(days);
    total += count;
    if (days < 2) {
      lowCount++;
    }
  }
  return { ok: true, coverage: coverage, total: total, shelterCount: counts.length, lowCount: lowCount };
}

// Checks: one loop, different data (Node only)
if (typeof document === "undefined") {
  const datasets = [
    { label: "A", counts: [12, 9, 0], daily: 3 },
    { label: "B", counts: [6, 3, 15, 1], daily: 3 },
    { label: "Empty", counts: [], daily: 3 },
    { label: "Daily 0", counts: [12, 9, 0], daily: 0 },
    { label: "Negative", counts: [3, -1, 6], daily: 3 }
  ];
  for (const d of datasets) {
    const r = analyzeShelters(d.counts, d.daily);
    if (r.ok) {
      console.log(d.label, "=> coverage", JSON.stringify(r.coverage), "| total", r.total, "| shelters", r.shelterCount, "| below 2 days", r.lowCount);
    } else {
      console.log(d.label, "=>", r.message);
    }
  }
}

