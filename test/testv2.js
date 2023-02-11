import EasyArrayUse, { reorderArray } from "../index.js";

const sinArr = [1, 2, 3, 4, 5, 6, 7, 8];
const array = new EasyArrayUse(sinArr);

const newArr = array.filterSingleConArray({
  value: 3,
  condition: "greater",
  flatNumber: 0,
});
array.setArray = newArr;
console.log(array.getArray);

const multi = [
  { name: "john", age: 26 },
  { name: "ricky", age: 25 },
  { name: "jude", age: 27 },
  { name: "wick", age: 29 },
  { name: "rita", age: 30 },
];

array.setArray = multi;

const multiArrCond = array.filterMultipleConArray([
  { condition: "greater", value: 25, key: "age" },
  { condition: "smallerEqual", value: 29, key: "age" },
]);

console.log(multiArrCond);

array.setArray = [1, 2, 3, 4, 5, 6, 7, 1, 3, 6];

const newArray = array.removeDuplicate();
console.log(newArray);

array.setArray = [
  1,
  2,
  1,
  { name: "john" },
  { name: "john" },
  { age: "25", name: "john" },
  { name: "john", age: "25", gender: "male" },
  { name: "john", age: "25", gender: "male" },
  { name: "john", age: "25" },
  "hai",
  "hai",
];

const newArray2 = array.removeDuplicate();
console.log(newArray2);

const myArray3 = [1, 2, 3, 4, "john"];
array.setArray = myArray3;
console.log(array.findAndRemove(1));

const myArray4 = [1, 2, 3, 4, "john", 1, 4, 1];
array.setArray = myArray4;
console.log(array.findAndRemoveAll(1));

const myArray5 = [
  { name: "john", age: 12 },
  { name: "harry", age: 25 },
  { name: "jim", age: 26 },
  { name: "rokith", age: 24 },
];
array.setArray = myArray5;
console.log(array.reduceAndConcat({ name: [], age: [] }));

const mynewArray6 = [
  { name: "john", age: 12, year: 1996 },
  { name: "harry", age: 25 },
  { name: "jim", age: 26 },
  { name: "rokith", age: 24 },
];
array.setArray = mynewArray6;
console.log(array.reduceAndConcat());

const mynewArray7 = [
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
];
array.setArray = mynewArray7;
console.log(array.countArrayValue(true));
console.log(array.countArrayValue(false));

const mynewArray8 = [
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
];
array.setArray = mynewArray8;
console.log(
  array.reduceCountArrayValue(true, {
    condition: "TrippleEqual",
    value: 2,
    flatNumber: 0,
  })
);

const order = [
  {
    id: "79832732",
    position: 1,
  },
  {
    id: "79832723",
    position: 2,
  },

  {
    id: "79832778",
    position: 3,
  },
  {
    id: "79832797",
    position: 4,
  },
  {
    id: "79832798",
    position: 6,
  },
  {
    id: "79832799",
    position: 7,
  },
  {
    id: "798327101",
    position: 9,
  },
];

const newOrder = {
  id: "79832766",
  position: 3,
};

console.log(reorderArray(order, "position", newOrder));
