import http from 'http';
import * as dotenv from 'dotenv';
const numberA = 5;
const numberB = 6;

dotenv.config();
const port = 3100;
const server = http.createServer((request, response) => {
    request.method;

    request.url = 'google.com';

    response.write(`${numberA} + ${numberB}`);
    response.write(`${numberA} - ${numberB}`);
    response.write(`${numberA} * ${numberB}`);
    response.write(`${numberA} / ${numberB}`);
    response.end();
});

server.listen(port);
