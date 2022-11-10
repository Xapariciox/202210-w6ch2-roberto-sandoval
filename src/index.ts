import fs from 'fs/promises';
(async () => {
    const file = 'dataE.json';
    const data = await fs.readFile(file);
    const pets = JSON.parse(data.toLocaleString());
    console.log(pets);
})();
