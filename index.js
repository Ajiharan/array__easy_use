import {
  checkArrayElemetsType,
  checkIsArray,
  checkObjectWithoutNullOrArray,
  filterArray,
  generateObject,
  spliceArray,
} from "./extra/extra.js";
import { addUniqueObj, filterFunc, filterMultiFunc } from "./filter/filter.js";

class EasyArrayUse {
  /**
   * @param  {} array
   */
  constructor(array) {
    this._array = array;
  }

  set setArray(arr) {
    this._array = arr;
  }

  get getArray() {
    return this._array;
  }

  filterSingleConArray(
    options = { value, condition: "greater", flatNumber: 0 },
    key = null,
    isMutable = false
  ) {
    const array = isMutable ? this._array : this._array.slice();
    checkIsArray(array);
    if (!checkArrayElemetsType(array))
      return new Error("array elements cannot be in different types");
    const { flatNumber, condition, value } = options;
    if (
      array?.length > 0 &&
      array.every((el) => typeof el === "object") &&
      key
    ) {
      return array
        .filter((el) => Boolean(el) || Object.keys(el).length > 0)
        .filter((el) => filterFunc(condition, value, el[key]));
    }
    if (
      flatNumber &&
      (typeof flatNumber === "number" || flatNumber === "Infinity")
    )
      return array
        .flat(
          typeof flatNumber === "number" ? Math.abs(flatNumber) : flatNumber
        )
        .filter((el) => Boolean(el) || el === 0)
        .filter((el) => filterFunc(condition, value, el));
    else return array.filter((el) => filterFunc(condition, value, el));
  }

  filterMultipleConArray(
    options = [{ value, condition: "greater", key: null }],
    arrayCondition = "AND",
    isMutable = false
  ) {
    const array = isMutable ? this._array : this._array.slice();

    checkIsArray(array);
    if (!checkArrayElemetsType(array))
      return new Error("array elements cannot be in different types");
    return array.filter((el) => filterMultiFunc(el, options, arrayCondition));
  }

  removeDuplicate() {
    const array = this.getArray.slice();
    checkIsArray(array);
    const filterArray = [...new Set(array)];
    if (array.every((el) => typeof el !== "object")) return filterArray;

    const newArray = addUniqueObj(filterArray);
    return [...newArray, ...filterArray.filter((r) => typeof r !== "object")];
  }

  findAndRemove(delElement, isMutable = false) {
    const array = isMutable ? this._array : this._array.slice();
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
  }

  findAndRemoveAll(delElement) {
    const array = this._array.slice();
    const newArray = this.findAndRemove(array, delElement, false);
    if (array.length === newArray.length) {
      return newArray;
    }
    return findAndRemoveAll(newArray, delElement, false);
  }

  reduceAndConcat(filterObject = null) {
    const array = this._array.slice();
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
  }

  countArrayValue(objectCount = false) {
    const array = this._array.slice();
    return array.reduce((acc, c) => {
      if (objectCount && checkObjectWithoutNullOrArray(c)) {
        c = JSON.stringify(c);
      }
      acc[c] ? ++acc[c] : (acc[c] = 1);

      return acc;
    }, {});
  }

  reduceCountArrayValue(
    objectCount = false,
    options = { condition: "TrippleEqual", value: 2, flatNumber: 0 }
  ) {
    const array = this._array.slice();
    checkIsArray(array);
    this.setArray = Object.entries(this.countArrayValue(objectCount)).map(
      (entry) => ({
        key: entry[1],
        value: entry[0],
      })
    );
    return this.filterSingleConArray(options, "key").map((r) => {
      if (r.value === null) return r.value;
      try {
        return JSON.parse(r.value);
      } catch {
        return r.value;
      }
    });
  }
}

export default EasyArrayUse;
export * from "./oldIndex.js";
