"use strict";

const filterFunc = (type = "greater", value, el) => {
  if (type === "greater") return el > value;
  if (type === "greaterEqual") return el >= value;
  if (type === "smaller") return el < value;
  if (type === "smallerEqual") return el <= value;
  if (type === "doubleEqual") return el == value;
  if (type === "TrippleEqual") return el === value;
};

const filterArray = function (arr, options = { value, condition: "greater" }) {
  return arr.filter((el) => filterFunc(options.condition, options.value, el));
};

export { filterArray };
