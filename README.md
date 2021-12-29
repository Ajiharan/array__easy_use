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

Multiple Condition Array

```
//if the array has duplicate value
import { filterMultipleConArray } from 'easy-array-use';

const newArray=filterMultipleConArray([1,2,3,4,5,6,7],[{condition:'greater',value:4},{condition:'smaller',value:6}]);

```

Remove duplicate

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

Find and delete element from Array

```
//if the array has  duplicate values
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
