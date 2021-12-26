import { filterFunc, filterMultiFunc } from "./filter/filter.js";

const filterSingleConArray = function (
  array,
  options = { value, condition: "greater", flatNumber: 0 },
  key = null
) {
  const { flatNumber, condition, value } = options;
  if (array?.length > 0 && typeof array[0] === "object" && key) {
    return array.filter((el) => filterFunc(condition, value, el[key]));
  }
  if (
    flatNumber &&
    (typeof flatNumber === "number" || flatNumber === "Infinity")
  )
    return array
      .flat(typeof flatNumber === "number" ? Math.abs(flatNumber) : flatNumber)
      .filter((el) => filterFunc(condition, value, el));
  else return array.filter((el) => filterFunc(condition, value, el));
};

const filterMultipleConArray = function (
  array,
  options = [{ value, condition: "greater", key: null }],
  arrayCondition = "AND"
) {
  return array.filter((el) => filterMultiFunc(el, options, arrayCondition));
};

export { filterSingleConArray, filterMultipleConArray };
