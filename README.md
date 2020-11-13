# delete-obj-undefined-keys

A npm package to delete undefided keys

### Installation

``` bash
$ npm i @heyma/delete-obj-undefined-keys
```

### Quick Start

``` jsx
const { deleteUndefinedKeys } = require("@heyma/delete-obj-undefined-keys")

const obj = {
  a1: undefined,
  a2: 2,
  a3: 3,
  a4: undefined
}

const result = deleteUndefinedKeys(obj)

/**
 * result = {
 *   a2: 2,
 *   a3: 3
 * }
 * /
```
