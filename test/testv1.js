import {
  filterMultipleConArray,
  filterSingleConArray,
  findAndRemove,
  removeDuplicate,
  findAndRemoveAll,
} from "../index.js";

// const myArray = [1, 2, 3, 4, "john", 1, { name: "john" }, { name: "john" }];

// console.log(findAndRemoveAll(myArray, { name: "john" }));
const myArray = [1, 2, 3, 4, "john", 1, 4, 1];

console.log(removeDuplicate(findAndRemoveAll(myArray, 1)));
