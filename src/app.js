// Node.js JavaScript Runtime

// CommonJS 진영 모듈 호출 방식
// const http = require('node:http')

// ESM 표준 모듈 호출 방식
import http from 'node:http';

// http://localhost:4000

const HOSTNAME = 'localhost';
const PORT = 4000;

const server = http.createServer((request /* 요청 */, response /* 응답 */) => {
  console.log(request.url);
  console.log(request.query);

  response.end(/* html */ `
        <!doctype html>
        <html lang="ko-KR">
            <head>
                <meta charset="utf-8" />
                <title>TypeScript 에센셜</title>
            </head>
            <body>
                <h1>타입스크립트 에센셜</h1>
            </body>
        </html>
    `);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`서버 구동 http://${HOSTNAME}:${PORT}`);
});
