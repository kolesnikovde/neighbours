var assert = require('assert');
var neighbors = require('./');

describe('neighbors', function() {
  function sample() {
    return [
      'abcd',
      'efgh',
      'ijkl'
    ];
  }

  describe('#vonNeumann', function() {
    it('traverse von Neumann neighbourhood of range R', function() {
      var result = '';
      var cells = sample();

      neighbors.vonNeumann({ x: 1, y: 1 }, function(x, y) {
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

      neighbors.vonNeumann({ x: 5, y: 3, range: range }, function(x, y) {
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

      neighbors.vonNeumann(function(x, y) {
        result.push([cells[y] && cells[y][x], x, y]);
      });

      assert.deepEqual(result, [
        [undefined, -1,  0],
        [undefined,  0, -1],
        ['b',        1,  0],
        ['e',        0,  1]
      ]);
    });

    it('stops on false', function() {
      var result;
      var iterations = 0;
      var cells = sample();

      neighbors.vonNeumann(function(x, y) {
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
