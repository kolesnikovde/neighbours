# neighbours

Utils for traversing Moore and von Neumann neighbourhoods.

### Installation

    $ npm i neighbours

### Usage

```js
var neighbours = require('neighbours');

neighbours.vonNeumann({ x: 1, y: 1, range: 2 }, function(x, y, r) {
  console.log(x, y, r);
});
// 0 1 1
// 1 0 1
// 2 1 1
// 1 2 1
// -1 1 2
// 1 -1 2
// 3 1 2
// 1 3 2
// 0 0 2
// 2 0 2
// 2 2 2
// 0 2 2
```

### API

```js
neighbours.vonNeumann({ x, y, range }, fn)
neighbours.moore({ x, y, range }, fn)
```

### License

MIT
