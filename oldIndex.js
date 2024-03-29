import {
  checkArrayElemetsType,
  checkIsArray,
  checkObjectWithoutNullOrArray,
  filterArray,
  generateObject,
  spliceArray,
} from "./extra/extra.js";
import { addUniqueObj, filterFunc, filterMultiFunc } from "./filter/filter.js";

const filterSingleConArray = function (
  array,
  options = { value, condition: "greater", flatNumber: 0 },
  key = null
) {
  checkIsArray(array);
  if (!checkArrayElemetsType(array))
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

/**
 * filter array with multiple condition
 * @param {any} value
 * @param {Array} options
 * @param {String} condition default:greater
 * @param {String} arrayCondition  AND or OR condition default:AND
 * @returns {Array}
 */

const filterMultipleConArray = function (
  array,
  options = [{ value, condition: "greater", key: null }],
  arrayCondition = "AND"
) {
  checkIsArray(array);
  if (!checkArrayElemetsType(array))
    return new Error("array elements cannot be in different types");
  return array.filter((el) => filterMultiFunc(el, options, arrayCondition));
};

/**
 * remove duplicate data from an array
 * @param {Array} array
 * @returns {Array}
 */

const removeDuplicate = (array) => {
  checkIsArray(array);
  const filterArray = [...new Set(array)];
  if (array.every((el) => typeof el !== "object")) return filterArray;

  const newArray = addUniqueObj(filterArray);
  return [...newArray, ...filterArray.filter((r) => typeof r !== "object")];
};

/**
 * remove first matches element from an array
 * @param {Array} array
 * @param {Object} delElement
 * @param {Boolean} isMutable
 * @returns {Array}
 */

const findAndRemove = function (array, delElement, isMutable = true) {
  checkIsArray(array);
  const duplicateArray = isMutable ? array : array.slice();
  if (filterArray(array).every((el) => typeof el !== "object")) {
    const index = duplicateArray.findIndex((el) => el === delElement);
    return spliceArray(duplicateArray, index);
  }

  const index = duplicateArray.findIndex((obj) => {
    if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj).reduce(
        (acc, c) => acc && obj[c[0]] === delElement[c[0]],
        true
      );
    } else {
      if (typeof delElement !== "object") {
        return obj === delElement;
      }
      return false;
    }
  });
  return spliceArray(duplicateArray, index);
};

/**
 * remove matches elements from an array
 * @param {Array} array
 * @param {Object} delElement
 * @returns {Array}
 */

const findAndRemoveAll = function (array, delElement) {
  const newArray = findAndRemove(array, delElement, false);
  if (array.length === newArray.length) {
    return newArray;
  }
  return findAndRemoveAll(newArray, delElement, false);
};

/**
 * push every values to the keys
 * @param {Array} array
 * @param {Object} filterObject
 * @returns {Object}
 */

const reduceAndConcat = function (array, filterObject = null) {
  checkIsArray(array);
  if (array.length === 0) return null;
  const obj = !filterObject
    ? generateObject(array, filterObject)
    : filterObject;
  array.forEach((c) => {
    Object.keys(c).forEach((key) => {
      obj[key]?.push(c[key]);
    });
  });
  return obj;
};

/**
 * count values count
 * @param {Array} array
 * @param {boolean} objectCount
 * @returns {Object}
 */

const countArrayValue = function (array, objectCount = false) {
  return array.reduce((acc, c) => {
    if (objectCount && checkObjectWithoutNullOrArray(c)) {
      c = JSON.stringify(c);
    }
    acc[c] ? ++acc[c] : (acc[c] = 1);

    return acc;
  }, {});
};

/**
 * count and reduce values count
 * @param {Array} array
 * @param {boolean} objectCount
 * @param {object} options
 * @returns {Array}
 */

const reduceCountArrayValue = function (
  array,
  objectCount = false,
  options = { condition: "TrippleEqual", value: 2, flatNumber: 0 }
) {
  checkIsArray(array);
  return filterSingleConArray(
    Object.entries(countArrayValue(array, objectCount)).map((entry) => ({
      key: entry[1],
      value: entry[0],
    })),
    options,
    "key"
  ).map((r) => {
    if (r.value === null) return r.value;
    try {
      return JSON.parse(r.value);
    } catch {
      return r.value;
    }
  });
};

/**
 * count and reduce values count
 * @param {Array} iterator
 * @param {string} key
 * @param {object} obj
 * @returns {Array}
 */
const reorderArray = function (iterator, key, obj) {
  let found = false;
  let isBreak = false;
  let temp = null;
  const newArray = [];
  for (let i = 0; i < iterator.length; i++) {
    if (iterator[i].position === obj[key]) {
      found = true;
    }
    if (found) {
      temp = { ...iterator[i] };

      if (!isBreak) {
        temp[key] += 1;
      }

      if (!isBreak && !iterator.slice(i).find((r) => r[key] === temp[key])) {
        isBreak = true;
      }
    }
    newArray.push(temp || iterator[i]);
    temp = null;
  }
  newArray.push(obj);
  newArray.sort((a, b) => a[key] - b[key]);
  return newArray;
};

export {
  filterSingleConArray,
  filterMultipleConArray,
  removeDuplicate,
  findAndRemove,
  findAndRemoveAll,
  reduceAndConcat,
  countArrayValue,
  reduceCountArrayValue,
  reorderArray,
};
