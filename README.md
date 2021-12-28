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
//if the array has multiple conditions
import { filterMultipleConArray } from 'easy-array-use';

const newArray=filterMultipleConArray([1,2,3,4,5,6,7],[{condition:'greater',value:4},{condition:'smaller',value:6}]);

```

Remove duplicate

```
//if the array has multiple conditions
import { removeDuplicate } from 'easy-array-use';

const newArray=removeDuplicate([1,2,3,4,5,6,7,1,3,6])

```
