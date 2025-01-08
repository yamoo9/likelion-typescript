// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// 이미지, 스타일, 스크립트 파일과 같은 정적 파일을 제공하려면 기본 제공되는 미들웨어 함수를 사용합니다.
// 여러 정적 에셋 디렉토리를 사용하려면 express.static 미들웨어 함수를 여러 번 호출합니다.
//
// --------------------------------------------------------------------------
import 'dotenv/config';
import express from 'express';
import type { Response, Express, Request, NextFunction } from 'express';

const app: Express = express();

// for Windows Users
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Routing ------------------------------------------------------------------ */

app.get(
  '/',
  (request: Request, response: Response, nextFunction: NextFunction) => {
    // 서버 -> 클라이언트 응답(response)
    response.send(/* html */ `
      <!DOCTYPE html>
      <html lang="ko-KR">
        <head>
          <meta charset="UTF-8" />
          <title>간단한 API 서버 구동 (with TypeScript & Express.js)</title>
          <meta name="description" content="TypeScript를 활용해 Express 앱을 구동시킵니다." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <main>
            <h1>
              웰컴 <abbr title="Application Programming Interface" style="cursor: help">API</abbr> 서버
            </h1>
            <nav>
              <ul>
                <li><a href="/api/users">사용자(users)</a></li>
                <li><a href="/api/products">상품(products)</a></li>
              </ul>
            </nav>
          </main>
        </body>
      </html>
    `);
  }
);

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
