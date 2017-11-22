function xyzToLatLon (normalizedPosition, out) {
  out = out || [0, 0]
  out[0] = Math.asin(normalizedPosition[1]) / Math.PI * 180
  out[1] = Math.atan2(normalizedPosition[2], normalizedPosition[0]) / Math.PI * 180
  return out
}

var coord = xyzToLatLon([ 0.6224144446694939, 0.7826866171599898, -0.001385057911101041 ])
console.log(coord)
module.exports = xyzToLatLon
