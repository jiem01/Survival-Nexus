import test from "node:test";
import assert from "node:assert/strict";
import { daysOfSupplies } from "../web/js/domain.js";

test("normal input rounds down", () => {
  assert.equal(daysOfSupplies(18, 5), 3);
});

test("exact division", () => {
  assert.equal(daysOfSupplies(10, 5), 2);
});

test("zero units gives zero days", () => {
  assert.equal(daysOfSupplies(0, 5), 0);
});

test("maximum supported units", () => {
  assert.equal(daysOfSupplies(1000000, 1), 1000000);
  assert.equal(daysOfSupplies(1000000, 1000000), 1);
});

test("invalid daily use throws RangeError", () => {
  for (const bad of [0, -1, 1.5, "2", NaN, Infinity, 1000001]) {
    assert.throws(() => daysOfSupplies(10, bad), RangeError);
  }
});

test("invalid units throw RangeError", () => {
  for (const bad of [-1, 1.5, "5", NaN, Infinity, 1000001]) {
    assert.throws(() => daysOfSupplies(bad, 5), RangeError);
  }
});