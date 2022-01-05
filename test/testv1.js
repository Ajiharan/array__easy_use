import {
  filterMultipleConArray,
  filterSingleConArray,
  findAndRemove,
  removeDuplicate,
  findAndRemoveAll,
  reduceAndConcat,
  countArrayValue,
  reduceCountArrayValue,
} from "../index.js";

// const myArray = [1, 2, 3, 4, "john", 1, { name: "john" }, { name: "john" }];

// console.log(findAndRemoveAll(myArray, { name: "john" }));
// const myArray = [1, 2, 3, 4, "john", 1, 4, 1];

// console.log(removeDuplicate(findAndRemoveAll(myArray, 1)));

const mynewArray = [
  { name: "john", age: 12, year: 1996 },
  { name: "harry", age: 25 },
  { name: "jim", age: 26 },
  { name: "rokith", age: 24 },
];

console.log(
  reduceCountArrayValue(
    [
      1,
      2,
      3,
      1,
      5,
      null,
      {},
      {},
      { name: "harry" },
      { name: "harry" },
      { name: "harry", age: 25 },
      "jim",
      "jim",
      null,
    ],
    true,
    { condition: "TrippleEqual", value: 2, flatNumber: 0 }
  )
);
// console.log(reduceAndConcat(mynewArray));
// console.log(JSON.parse(JSON.stringify({ date: new Date() })));
