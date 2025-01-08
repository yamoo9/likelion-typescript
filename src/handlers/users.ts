import type { Request, Response } from 'express';
import type { User, RequestUser } from '../types/user';
import { readUsers, writeUsers } from '../lib/users';

// CREATE ----------------------------------------------------------------------

// `POST /api/users`
export const createUserHander = async (
  request: Request<{}, {}, RequestUser>,
  response: Response
) => {
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
    users.push(newUser);
    await writeUsers(users);
    response.status(201).json(newUser);
  } catch (error: unknown) {
    // 실패한 경우
    response.status(401).json({
      message: '이런... 사용자 정보 생성에 실패했습니다.. 😭',
    });
  }
};

// READ ------------------------------------------------------------------------

// `GET /api/users`
export const readAllUsersHandler = async (
  request: Request,
  response: Response<User[] | { message: string } | void>
) => {
  try {
    const users = await readUsers();
    response.status(200).json(users);
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다! 😥',
    });
  }
};

// `GET /api/users/:id`
export const readUserByIdHandler = async (
  request: Request,
  response: Response
) => {
  // request paramters /:id
  const { id } = request.params;

  try {
    const users = await readUsers();

    // 요청된 ID 값과 일치하는 사용자가 존재하는 지 검토
    const requestedUser = users.find((user) => user.id === Number(id));
    if (requestedUser) {
      // 요청한 사용자 정보가 있을 경우, 응답
      response.status(200).json(requestedUser);
    } else {
      // 요청한 사용자 정보가 없을 경우, 응답
      response.status(404).json({
        message: `요청한 사용자 ID "${id}" 정보가 존재하지 않습니다. 😥`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다! 😥',
    });
  }
};

// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`
export const putUserHandler = async (
  request: Request,
  response: Response
) => {};

// `PATCH /api/users/:id`
export const patchUserHandler = async (
  request: Request,
  response: Response
) => {};

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id
export const deleteUserHandler = async (
  request: Request,
  response: Response
) => {
  // REQUEST
  const { id } = request.params;

  try {
    // READ
    const users = await readUsers();

    // find user
    const user = users.find((user) => user.id === Number(id));

    if (user) {
      // WRITE
      const willUpdateUsers = users.filter((user) => user.id !== Number(id));
      await writeUsers(willUpdateUsers);
      // RESPONSE
      response.status(200).json({});
    } else {
      // RESPONSE
      response.status(404).json({
        message: `요청한 ID ${id} 사용자 정보를 찾을 수 없습니다.`,
      });
    }
  } catch (error: unknown) {
    // RESPONSE
    response.status(500).json({
      message: '알 수 없는 오류가 발생했습니다.',
    });
  }
};
