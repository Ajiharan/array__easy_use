# what is this?

simplify your array methods

# Installation

`npm i easy-array-use --save`

Then...

```
import { filterArray } from 'easy-array-use';

const newArray=filterArray([1,2,3,4,5,6,7],{condition:'greater',value:4});

//output
[5,6,7]

```

## Options

filterArray supports 2 options like key, flatNumber

- (typeof key)='number'

- _condition_ - _greater | greaterEqual | smaller | smallerEqual | doubleEqual | TrippleEqual_ (default to greater)
