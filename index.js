import { filterFunc, filterMultiFunc } from "./filter/filter.js";
import { checkArrayElemetsType, checkArrayIsEmpty } from "./extra/extra.js";

const filterSingleConArray = function (
  array,
  options = { value, condition: "greater", flatNumber: 0 },
  key = null
) {
  checkArrayIsEmpty(array);
  if (!checkArrayElemetsType())
    return new Error("array elements cannot be in different types");
  const { flatNumber, condition, value } = options;
  if (array?.length > 0 && array.every((el) => typeof el === "object") && key) {
    return array
      .filter((el) => Boolean(el) || Object.keys(el).length > 0)
      .filter((el) => filterFunc(condition, value, el[key]));
  }
  if (
    flatNumber &&
    (typeof flatNumber === "number" || flatNumber === "Infinity")
  )
    return array
      .flat(typeof flatNumber === "number" ? Math.abs(flatNumber) : flatNumber)
      .filter((el) => Boolean(el) || el === 0)
      .filter((el) => filterFunc(condition, value, el));
  else return array.filter((el) => filterFunc(condition, value, el));
};

const filterMultipleConArray = function (
  array,
  options = [{ value, condition: "greater", key: null }],
  arrayCondition = "AND"
) {
  checkArrayIsEmpty(array);
  if (!checkArrayElemetsType())
    return new Error("array elements cannot be in different types");
  return array.filter((el) => filterMultiFunc(el, options, arrayCondition));
};

const removeDuplicate = (array) => {
  checkArrayIsEmpty(array);
  if (array.every((el) => typeof el !== "object")) {
    return [...new Set(array)];
  }
};

export { filterSingleConArray, filterMultipleConArray, removeDuplicate };
