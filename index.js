import { filterFunc, filterMultiFunc, addUniqueObj } from "./filter/filter.js";
import {
  checkArrayElemetsType,
  checkIsArray,
  filterArray,
  spliceArray,
} from "./extra/extra.js";

/**
 * filter array with one condition
 * @param value
 * @param condition default:greater
 * @param flatNumber flaten array default:false
 * @returns {array}
 */
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
 * @param value
 * @param condition default:greater
 * @param arrayCondition  AND or OR condition default:AND
 * @returns {array}
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
 * @param array
 * @returns {array}
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
 * @param array
 * @param delElement
 * @param isMutable
 * @returns {array}
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

export {
  filterSingleConArray,
  filterMultipleConArray,
  removeDuplicate,
  findAndRemove,
};
