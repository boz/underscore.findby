Underscore mixin providing utilities for working with an array of
objects.

usage:

```js
// return object with id=1
var needle = _.findBy([{id:1},{id:2}],'id',1);

// return undefined
var needle = _.findBy([{id:1},{id:2}],'id',500);

// return true
var needle = _.containsBy([{id:1},{id:2}],'id',1);

// return false
var needle = _.containsBy([{id:1},{id:2}],'id',500);
```
