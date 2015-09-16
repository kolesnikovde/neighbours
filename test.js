var assert = require('assert');
var neighbours = require('./');

function sample() {
  return [
    'abcd',
    'efgh',
    'ijkl'
  ];
}

describe('neighbours', function() {
  describe('#vonNeumann', function() {
    it('traverses von Neumann neighbourhood of range R', function() {
      var result = '';
      var cells = sample();

      neighbours.vonNeumann({ x: 1, y: 1 }, function(x, y, r) {
        result += cells[y][x];
      });

      assert.equal(result, 'ebgj');
    });

    it('performs 4 * (R * (R - 1)) iterations', function() {
      var result = '';
      var iterations = 0;
      var range = 3;
      var cells = [
        'ab-d123sa',
        'e4gsdassh',
        'ijklasdfa',
        'saax3dfas',
        'psfxcv-93',
        'm0vn00d-d'
      ];

      neighbours.vonNeumann({ x: 5, y: 3, range: range }, function(x, y, r) {
        iterations++;

        if (cells[y] && cells[y][x]) {
          result += cells[y][x];
        }
      });

      assert.equal(result, '3sfvxaa0ad-ca2sls90dfdx');
      assert.equal(iterations, 4 * (range * (range - 1)));
    });

    it('default R = 1', function() {
      var result = [];
      var cells = sample();

      neighbours.vonNeumann(function(x, y, r) {
        result.push([cells[y] && cells[y][x], x, y, r]);
      });

      assert.deepEqual(result, [
        [undefined, -1,  0, 1],
        [undefined,  0, -1, 1],
        ['b',        1,  0, 1],
        ['e',        0,  1, 1]
      ]);
    });

    it('stops on false', function() {
      var result;
      var iterations = 0;
      var cells = sample();

      neighbours.vonNeumann(function(x, y, r) {
        ++iterations;

        if (cells[y] && cells[y][x]) {
          result = cells[y][x];
          return false;
        }
      });

      assert.equal(result, 'b');
      assert.equal(iterations, 3);
    });
  });
});

describe('neighbours', function() {
  describe('#moore', function() {
    it('traverses Moore neighbourhood of range R', function() {
      var result = '';
      var cells = sample();

      neighbours.moore({ x: 1, y: 1}, function(x, y, r) {
        result += cells[y][x];
      });

      assert.equal(result, 'ackibgje');
    });
  });
});
