//Converts a colors format 
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

//Converts a colors format 
export function rgbToHex({ r, g, b }) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function findMostFrequentElementInArray(array) {
  console.log(array)
  return Object.entries(
    array.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1
      return a
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]
}