const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" });
const rows = input.split('\n');


const mapToNumber = (a, b) => {
    if(a === 'A' && b === 'X') return 3
    if(a === 'A' && b === 'Y') return 1
    if(a === 'A' && b === 'Z') return 2
    if(a === 'B' && b === 'X') return 1
    if(a === 'B' && b === 'Y') return 2
    if(a === 'B' && b === 'Z') return 3
    if(a === 'C' && b === 'X') return 2
    if(a === 'C' && b === 'Y') return 3
    if(a === 'C' && b === 'Z') return 1
}

const mapped = rows.map((row) => {
    const [a,b] = row.split(' ');
    let result = 0;

    if(b === 'Y') result = 3;
    if(b === 'Z') result = 6; 
    
    return result + mapToNumber(a,b);
});

const reduced = mapped.reduce((a,c) => a + c, 0);
console.log(reduced);   
