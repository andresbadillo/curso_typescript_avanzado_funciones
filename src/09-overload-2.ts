// Andres => [A, n, d, r, e, s] => string => string[]
// [A, n, d, r, e, s => Andres => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): (string | string[]) {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if(typeof input === 'string') {
    return input.split(''); // string[]
  } else if(typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Andres');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Andres =>', rtaArray);

const rtaStr = parseStr(['A', 'n', 'd', 'r', 'e', 's']);
rtaStr.toUpperCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['A', 'n', 'd', 'r', 'e', 's'] =>", rtaStr);

const rtaBool = parseStr(38);
console.log('rtaBool', rtaBool);
