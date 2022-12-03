const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" });
const rows = input.split('\n');

const results = [
    [3, 6, 0],
    [0, 3, 6],
    [6, 0, 3]
]

const mapToNumber = (v) => {
    if(v === 'A' || v === 'X') return 0
    if(v === 'B' || v === 'Y') return 1
    if(v === 'C' || v === 'Z') return 2
}

const mapped = rows.map((row) => {
    const [a,b] = row.split(' ');
    
    v1 = mapToNumber(a)
    v2 = mapToNumber(b)

    return results[v1][v2] + (v2 + 1)    
});

const reduced = mapped.reduce((a,c) => a + c, 0);
console.log(reduced);   
