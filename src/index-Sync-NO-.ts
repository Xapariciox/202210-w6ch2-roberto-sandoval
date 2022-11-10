import fs from 'fs';

const file = 'dist/data.txt';
const data = fs.readFileSync(file);
console.log(data.toLocaleString());

const info = 'Estudio Node';
const file2 = 'dist/data2.txt';
const finalInfo = data.toLocaleString() + info;
fs.writeFileSync(file2, finalInfo);
const data2 = fs.readFileSync(file2);
console.log(data2.toLocaleString());
