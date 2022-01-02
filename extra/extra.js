import { NotArrayException } from "../error/errors.js";

const filterArray = function (array) {
  return array.filter((el) => Boolean(el) || el === 0);
};
const checkArrayElemetsType = (array, isFilterArray = true) => {
  let filterArr = array.slice();
  if (isFilterArray) {
    filterArr = filterArray(array);
  }

  const isArrayObject = filterArr.every((el) => typeof el === "object");
  const isArrayisNotObject = filterArr.every((el) => typeof el !== "object");

  return isArrayObject || isArrayisNotObject;
};

const checkIsArray = (array) => {
  if (!Array.isArray(array)) {
    throw new NotArrayException("argument is not an array");
  }
};

const spliceArray = function (duplicateArray, index) {
  if (index === -1) return duplicateArray;
  duplicateArray.splice(index, 1);
  return duplicateArray;
};

const generateObject = function (array) {
  const keys = Object.keys(array[0]);
  const obj = {};
  keys.forEach((key) => {
    obj[key] = [];
  });
  return obj;
};

export {
  checkArrayElemetsType,
  checkIsArray,
  filterArray,
  spliceArray,
  generateObject,
};
