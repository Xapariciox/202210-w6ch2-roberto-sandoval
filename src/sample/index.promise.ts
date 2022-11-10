import fs from 'fs/promises';
const info = 'Estudio Node';
const file = 'dist/data.txt';
const file2 = 'dist/data2.txt';

fs.readFile(file)
    .then((data) => {
        console.log(data.toLocaleString());
        return data.toLocaleString() + info;
    })
    .then((data) => {
        fs.writeFile(file2, data);
    })
    .then(() => {
        return fs.readFile(file2);
    })
    .then((data) => console.log(data));

const data = file;
console.log(data.toLocaleString());

// fs.writeFileSync(file2, finalInfo);
// const data2 = fs.readFileSync(file2);
// console.log(data2.toLocaleString());
