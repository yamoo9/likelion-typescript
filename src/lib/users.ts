import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import type User from '../types/user';

// data/users.json 파일 읽기 함수
export async function readUsers(): Promise<User[]> {
  const filePath = resolve(__dirname, '../data/users.json');
  const usersString = await readFile(filePath, { encoding: 'utf-8' });
  return await JSON.parse(usersString);
}

// data/users.json 파일에 쓰기 함수
export function writeUsers() {}
