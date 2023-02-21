// Andres => [A, n, d, r, e, s] => string => string[]
// [A, n, d, r, e, s => Andres => string[] => string

function parseStr(input: string | string[] ): (string | string[]) {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Andres');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Andres =>', rtaArray);

const rtaStr = parseStr(['A', 'n', 'd', 'r', 'e', 's']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['A', 'n', 'd', 'r', 'e', 's'] =>", rtaStr);
