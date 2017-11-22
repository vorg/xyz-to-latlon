var assert = require('assert')
var latLonToXyz = require('latlon-to-xyz')
var xyzToLatLon = require('./')

var EPSILON = 0.001
var almostEqual = function (a, b) {
  return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON
}

var coords = [
  [51.507222, -0.1275],
  [40.7127, -74.0059],
  [37.566667, 126.966667],
  [-33.865, 151.209444]
]

coords.forEach((c) => {
  var c2 = xyzToLatLon(latLonToXyz(c[0], c[1]))
  console.log('comparing', c, c2)
  assert(almostEqual(c, c2), `${c} != ${c2}`)
})
