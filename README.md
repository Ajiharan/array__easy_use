# what is this?

simplify your array methods

# Installation

`npm i easy-array-use --save`

Then...

```
import { filterSingleConArray } from 'easy-array-use';

const newArray=filterSingleConArray([1,2,3,4,5,6,7],{condition:'greater',value:4});

//output
[5,6,7]

```

## Options

filterArray supports 2 options like key, flatNumber

- (typeof key)='number'

- _condition_ - _greater | greaterEqual | smaller | smallerEqual | doubleEqual | TrippleEqual_ (default to greater)

**Multiple Condition Array**

```
//if the array has duplicate value
import { filterMultipleConArray } from 'easy-array-use';

const newArray=filterMultipleConArray([1,2,3,4,5,6,7],[{condition:'greater',value:4},{condition:'smaller',value:6}]);

```

**Remove duplicate**

```
//if the array has  duplicate values
import { removeDuplicate } from 'easy-array-use';

const newArray=removeDuplicate([1,2,3,4,5,6,7,1,3,6]);
console.log(newArray)
//output
[
  1, 2, 3, 4,
  5, 6, 7
]

OR

const newArray=removeDuplicate([
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
  ])

  console.log(newArray);

  //output
  [
    { name: 'john' },
    { age: '25', name: 'john' },
    { name: 'john', age: '25', gender: 'male' },
    1,
    2,
    'hai'
  ]

```

**Find and delete element from Array**

```

import { findAndRemove } from 'easy-array-use';

const myArray = [1, 2, 3, 4, "john"];

console.log(findAndRemove(myArray, 1));

//output
[2,3,4,"john"]

```

## options

findAndRemove function supports 2 options parameters like delElement, isMutable

- (typeof isMutable)=boolean, [default : true]
- (typeof delElement)=any ,[not array]

**Find and delete all element from Array**

```
import { findAndRemoveAll } from 'easy-array-use';

const myArray = [1, 2, 3, 4, "john",1,4,1];

console.log(findAndRemoveAll(myArray, 1));

//output
[2,3,4,"john"]

```

**reduce and concat values from Array**

```
import { reduceAndConcat } from 'easy-array-use';

const myArray = [
  { name: "john", age: 12 },
  { name: "harry", age: 25 },
  { name: "jim", age: 26 },
  { name: "rokith", age: 24 },
];

console.log(reduceAndConcat(myArray, { name: [], age: [] }));

//output
{ name: [ 'john', 'harry', 'jim', 'rokith' ], age: [ 12, 25, 26, 24 ] }

const mynewArray = [
  { name: "john", age: 12, year: 1996 },
  { name: "harry", age: 25 },
  { name: "jim", age: 26 },
  { name: "rokith", age: 24 },
];

console.log(reduceAndConcat(mynewArray));


//output
{
  name: [ 'john', 'harry', 'jim', 'rokith' ],
  age: [ 12, 25, 26, 24 ],
  year: [ 1996 ]
}

```

## options

- filterObject [type : object] default : null

**Note**

```diff
- if filterObject is null then function reduce using first element of array
```

**Count array items**

```
import { countArrayValue } from 'easy-array-use';

const myArray =  [
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

console.log(countArrayValue(myArray,true));

//output
{
  '1': 2,
  '2': 1,
  '3': 1,
  '5': 1,
  null: 2,
  '{}': 2,
  '{"name":"harry"}': 2,
  '{"name":"harry","age":25}': 1,
  jim: 2
}

console.log(countArrayValue(myArray,false));

//output
{
  '1': 2,
  '2': 1,
  '3': 1,
  '5': 1,
  null: 2,
  '[object Object]': 5,
  jim: 2
}
```

## options

- objectCount [type : boolean] default : false

**Count and reduce array items**

```
import { reduceCountArrayValue } from 'easy-array-use';

const myArray =  [
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

console.log(reduceCountArrayValue(myArray,true, { condition: "TrippleEqual", value: 2, flatNumber: 0 }));

//output
[ 1, null, {}, { name: 'harry' }, 'jim' ]


```

## options

- objectCount [type : boolean] default : false
- options [type : object] =(condition: "TrippleEqual", value: 2, flatNumber: 0)
