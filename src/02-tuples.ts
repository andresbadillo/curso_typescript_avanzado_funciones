const prices: (number | string)[] = [1, 2, 3, '4'];
prices.push(5);
prices.push('6');


let user: [string, number];
user = ['andres', 15];
// user = ['andres'];
// user = [15];
// user = ['andres', 15, 'hola'];
// user = ['andres', 15, true];
user = ['Sarah', 26];

let user2: [string, number, boolean];
user2 = ['andres', 38, true];

const [username, age] = user2
console.log(username);
console.log(age);
