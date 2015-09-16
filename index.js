'use strict';

exports.vonNeumann = function(options, fn) {
  if (!fn) fn = options, options = {};

  var x = options.x || 0,
      y = options.y || 0,
      r = options.range || 1;

  for (var i = 1; i <= r; ++i) {
    for (var j = i; j > 0; --j) {
      var k = i - j;

      if (fn(x - j, y - k, i) === false ||
          fn(x + k, y - j, i) === false ||
          fn(x + j, y + k, i) === false ||
          fn(x - k, y + j, i) === false) return;
    }
  }
}

exports.moore = function(options, fn) {
  if (!fn) fn = options, options = {};

  var x = options.x || 0,
      y = options.y || 0,
      r = options.range || 1;

  for (var i = 1; i <= r; ++i) {
    for (var j = -i; j <= i - 1; ++j) {
      if (fn(x + j, y - i, i) === false ||
          fn(x + i, y + j, i) === false ||
          fn(x - j, y + i, i) === false ||
          fn(x - i, y - j, i) === false) return;
    }
  }
}
