// ------------------------------------------------------------------------------
// 📌 TypeScript 타입 선언 파일 (*.d.ts)
// ⭐️ URL : https://bit.ly/3E4ZeLl
// ------------------------------------------------------------------------------
// - TypeScript는 타입 시스템을 적극적으로 활용하는 프로그래밍 환경을 제공합니다.
// - 내장된 타입 선언 외에도 다양한 라이브러리 포멧에 올바른 타입 선언 파일을 제공됩니다.
// - TypeScript는 선언된 타입 파일을 읽어 사용자에게 올바르게 작성하는 방법을 안내합니다.
// ------------------------------------------------------------------------------

import _ from 'lodash';
import axios, { AxiosResponse } from 'axios';

console.log(_.shuffle([2, 3, 4, 5, 6]));

// axios 라이브러리를 설치한 후, 라이브러리에 선언된 타입 파일(index.d.ts)을 참고합니다.
// TypeScript는 설치된 라이브러리 package.json 파일 types 또는 typing 항목에 연결된 타입 선언 파일을 확인합니다.
// { "typings": "./index.d.ts" }

{
  const API = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts',
  };

  // axios를 사용해 사용자 또는 포스트 데이터를 비동기 요청/응답 받도록 합니다.
  // axios 요청 시, 전달받을 데이터 타입을 정의하는 방법을 살펴봅니다.
  const response = await axios.get<{}, AxiosResponse<User>, {}>(API.users);

  console.log(response.data.username);

  const dummyUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  type User = typeof dummyUser;
}
