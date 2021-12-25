# what is this?

simplify your array methods

# Installation

`npm i easy-array-use --save`

Then...

```
import { filterArray } from 'easy-array-use';

const newArray=filterArray([1,2,3,4,5,6,7],{condition:'greater',value:4})


```

## Options

filterArray supports 2 options like key,flatNumber

- _condition_ - _greater | \_greaterEqual | \_smaller | \_smallerEqual | \_doubleEqual | TrippleEqual_ (default to greater)
