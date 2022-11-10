import http from 'http';
import * as dotenv from 'dotenv';
const numberA = 5;
const numberB = 6;
const sum = numberA + numberB;
const rest = numberA - numberB;
const multiply = numberA * numberB;
const divison = numberA / numberB;

dotenv.config();
const port = 3100;
const server = http.createServer((request, response) => {
    request.method;

    request.url;

    response.write(`${numberA} + ${numberB} = ${sum}`);
    response.write('        ');
    response.write(`${numberA} - ${numberB} = ${rest}`);
    response.write('        ');
    response.write(`${numberA} * ${numberB} = ${multiply}`);
    response.write('        ');
    response.write(`${numberA} / ${numberB} = ${divison}`);
    response.end();
});

server.listen(port);
