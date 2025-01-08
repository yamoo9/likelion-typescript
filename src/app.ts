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

import express from 'express';

const app /*: Application */ = express(); // const app = new Application()

const HOSTNAME = 'localhost';
const PORT = 5000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

app.get('/', (request, response, nextFunction) => {
  // 서버 -> 클라이언트 응답(response)
  response.send('<h1>Hello Express.js & TypeScript</h1>');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
