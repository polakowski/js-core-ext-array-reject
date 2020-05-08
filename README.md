## Array#reject
This package provides extension of Array class - `reject` method. It works similarily to `Array#filter` but it removes elements from array, for which predicate callback returns truthy value.

### Usage
```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = array.reject(n => n % 2 === 0);

console.log(result);

// [1, 3, 5, 7, 9]
```

## License
This package is licensed under MIT license.
