// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------

import 'dotenv/config';
import express from 'express';
import type { Express } from 'express';
import { resolve } from 'node:path';
import entryHandler from './handlers/entry';
import greetingMessage from './middlewares/greetingMessage';

/* CONFIG. ------------------------------------------------------------------ */

// for Windows Users
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

app.use(greetingMessage);
app.use(express.static(resolve(__dirname, '../public')));

/* Routing ------------------------------------------------------------------ */
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// --------------------------------------------------------------------------

app.get('/', entryHandler);

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
