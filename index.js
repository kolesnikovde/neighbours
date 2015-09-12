'use strict';

exports.vonNeumann = function(options, fn) {
  if (!fn) fn = options, options = {};

  var x = options.x || 0,
      y = options.y || 0,
      r = options.range || 1;

  for (var i = 1; i <= r; ++i) {
    for (var j = i; j > 0; --j) {
      var k = i - j;

      if (fn(x - j, y - k) === false ||
          fn(x + k, y - j) === false ||
          fn(x + j, y + k) === false ||
          fn(x - k, y + j) === false) return;
    }
  }
}

