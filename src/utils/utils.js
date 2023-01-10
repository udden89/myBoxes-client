export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex({ r, g, b }) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function findMostFrequentElementInArray(array) {
  return Object.entries(
    array.reduce((previous, current) => {
      previous[current] = previous[current] ? previous[current] + 1 : 1;
      return previous;
    }, {})
  ).reduce(
    (previous, current) => (current[1] >= previous[1] ? current : previous),
    [null, 0]
  )[0];
}
