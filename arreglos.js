const a = [];
const b = [1, true, "hol", ["A","B","C", [1,2,3]]];

console.log(a);
console.log(b.length);
console.log(b[2]);
console.log(b[2].length);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
    console.log(c);

const d = Array(10).fill(false);
    console.log(d);