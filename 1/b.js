const fs = require("fs");

const input = fs.readFileSync('input.txt', {encoding: 'utf-8'});
const array = input.split('\n');
const sum = [];
let elfCount = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] !== ''){
        if(sum[elfCount] === undefined) {
            sum[elfCount] = 0;
        }
        sum[elfCount] += +array[i];
    } else {
        elfCount++
    }
}

const sorted = sum.sort((a,b) => a - b).reverse();
const three = sorted.slice(0,3).reduce((a,c) => a + c, 0);

console.log(three);