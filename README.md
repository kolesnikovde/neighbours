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

Conway's Game of Life:
```js
function gen(cells) {
  var width = cells.length,
      height = cells[0] ? cells[0].length : 0,
      board = new Array(width),
      n;

  for (var x = 0; x < width; ++x) {
    board[x] = new Array(height);

    for (var y = 0; y < height; ++y) {
      n = 0;

      neighbours.moore({ x: x, y: y }, function(dx, dy) {
        if (cells[dx] && cells[dx][dy]) n++;
      });

      board[x][y] = n === 2 ? cells[x][y] : n === 3;
    }
  }

  return board;
}
```

### API

```js
neighbours.vonNeumann({ x, y, range }, fn)
neighbours.moore({ x, y, range }, fn)
```

### License

MIT
