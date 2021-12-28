import { NotArrayException } from "../error/errors.js";
const checkArrayElemetsType = (array) => {
  const filterArr = array.filter((el) => Boolean(el) || el === 0);
  const isArrayObject = filterArr.every((el) => typeof el === "object");
  const isArrayisNotObject = filterArr.every((el) => typeof el !== "object");
  return isArrayObject || isArrayisNotObject;
};

const checkArrayIsEmpty = (array) => {
  if (!Array.isArray(array)) {
    throw new NotArrayException("argument is not an array");
  }
};

export { checkArrayElemetsType, checkArrayIsEmpty };
