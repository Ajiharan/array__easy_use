"use strict";

const filterFunc = (type = "greater", value, el) => {
  if (type === "greater") return el > value;
  if (type === "greaterEqual") return el >= value;
  if (type === "smaller") return el < value;
  if (type === "smallerEqual") return el <= value;
  if (type === "doubleEqual") return el == value;
  if (type === "TrippleEqual") return el === value;
};

const filterArray = function (
  arr,
  options = { value, condition: "greater", flatNumber: 0 },
  key = null
) {
  const { flatNumber, condition, value } = options;
  if (arr?.length > 0 && typeof arr[0] === "object" && key) {
    return arr.filter((el) => filterFunc(condition, value, el[key]));
  }
  if (
    flatNumber &&
    (typeof flatNumber === "number" || flatNumber === "Infinity")
  )
    return arr
      .flat(typeof flatNumber === "number" ? Math.abs(flatNumber) : flatNumber)
      .filter((el) => filterFunc(condition, value, el));
  else return arr.filter((el) => filterFunc(condition, value, el));
};

export { filterArray };
