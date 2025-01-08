// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------

import 'dotenv/config';
import express from 'express';
import type { Express, Request } from 'express';
import type { RequestUser, User } from './types/user';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { readUsers, writeUsers } from './lib/users';

/* CONFIG. ------------------------------------------------------------------ */

// for Windows Users
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

// app.use(greetingMessage);
app.use(express.static(resolve(__dirname, '../public')));
app.use(express.json());

/* Routing ------------------------------------------------------------------ */
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// --------------------------------------------------------------------------

// GET
// app.get('/', entryHandler);

// POST
// app.post('/', (request, response) => {
//   // 클라이언트 요청 URL
//   console.log(request.url);

//   // 서버 -> 클라이언트 응답
//   response.status(201 /* Created */).send({
//     message: 'POST 요청이 홈페이지로부터 주어졌습니다.',
//   });
// });

/* Users API ---------------------------------------------------------------- */

// CREATE ----------------------------------------------------------------------

// `POST /api/users`
app.post(
  '/api/users',
  async (request: Request<{}, {}, RequestUser>, response) => {
    // 클라이언트 요청 정보
    // console.log(request.body);

    // 서버 프로그래밍
    // 1. 데이터 파일 읽기
    const users = await readUsers();

    // 새롭게 생성될 사용자(User) 객체
    const newId = users.length + 1;
    // const newId = crypto.randomUUID();

    const newUser: User = {
      id: newId,
      ...request.body,
    };

    // 2. 데이터 파일 쓰기
    try {
      // 클라이언트에 응답
      // 성공한 경우
      await writeUsers(newUser);
      response.status(201).json(newUser);
    } catch (error: unknown) {
      // 실패한 경우
      response.status(401).json({
        message: '이런... 사용자 정보 생성에 실패했습니다.. 😭',
      });
    }
  }
);

// READ ------------------------------------------------------------------------

// `GET /api/users`
app.get('/api/users', async (request, response) => {
  try {
    const users = await readUsers();
    // throw new Error('oops');

    response.status(200).json(users);
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다! 😥',
    });
  }
});

// `GET /api/users/:id`

// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`

// `PATCH /api/users/:id`

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id`

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
