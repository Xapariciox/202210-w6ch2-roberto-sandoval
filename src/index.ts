import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3500;

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;
    if (url.parse(request.url as string, true).pathname !== '/index.js') {
        response.writeHead(404, { 'content-type': 'text-html' });
        response.write('Error404');
        response.end();
    }
    if (!Number(queryObject.num1) || !Number(queryObject.num2)) {
        response.writeHead(500, { 'content-type': 'text-html' });
        response.write('Por favor introduzca solo numeros');
        response.end();
    }

    if (Number(queryObject.num1) && Number(queryObject.num2)) {
        const sum = Number(queryObject.num1) + Number(queryObject.num2);
        const result = `${Number(queryObject.num1)} +
        ${Number(queryObject.num2)} =
        ${sum}`;
        const rest = Number(queryObject.num1) - Number(queryObject.num2);
        const resultRest = `${Number(queryObject.num1)} -
        ${Number(queryObject.num2)} =
        ${rest}`;
        const multiply = Number(queryObject.num1) * Number(queryObject.num2);
        const resultMultiply = `${Number(queryObject.num1)} x
        ${Number(queryObject.num2)} =
        ${multiply}`;
        const division = Number(queryObject.num1) / Number(queryObject.num2);
        const resultDivision = `${Number(queryObject.num1)} /
        ${Number(queryObject.num2)} =
        ${division}`;
        response.writeHead(200, { 'content-type': 'text-html' });
        response.write('<div>calculator</div>');
        response.write(`<p>your sum: ${result}</p>`);
        response.write(`<p>your Rest: ${resultRest}</p>`);
        response.write(`<p>your multiplication: ${resultMultiply}</p>`);
        response.write(`<p>your division: ${resultDivision}</p>`);

        response.end();
    }
});

server.listen(port);
