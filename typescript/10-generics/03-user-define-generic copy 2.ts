// --------------------------------------------------------------------------
// 📌 사용자 정의 제네릭 (User Define Generic)
// ⭐️ URL : https://bit.ly/3tqejSF
// --------------------------------------------------------------------------
// - 사용자가 정의한 함수가 전달 받거나, 반환할 타입을 제네릭을 사용해 정의할 수 있습니다.
// --------------------------------------------------------------------------

{
  // 항등 함수(Identity Function)
  // 집합 X의 임의의 원소 x에 대하여 f(x) = x인 함수
  // 참고: https://mathbang.net/474

  // function identityNumber(item: number): number {
  //   return item;
  // }

  // function identityString(item: string): string {
  //   return item;
  // }

  // function identityCat(item: Cat): Cat {
  //   return item;
  // }

  function identity<Type>(item: Type): Type {
    return item;
  }

  // number 타입
  identity<number>(101);

  // string 타입
  identity<string>('101');

  type Cat = {
    name: string;
    breed: boolean;
  };

  // Cat 타입
  identity<Cat>({
    name: 'hamrit',
    breed: false,
    // another: false
  });
}

{
  // 🧐 개별 타입마다 동일한 로직을 처리하는 함수를 작성하는 것은 비효율적입니다.

  function getNumberRandomItem(list: number[]): number {
    return list[Math.floor(Math.random() * list.length)];
  }

  function getStringRandomItem(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)];
  }

  // 여러 타입을 사용자 설정에 따라 허용하는 getRandomItem 함수를 작성합니다.
  function getRandomItem<Type>(list: Type[]): Type {
    return list[Math.floor(Math.random() * list.length)];
  }

  getRandomItem<string>(['cat', 'dog']);
  getRandomItem<number | string>([2, 3, 191, '223']);
  getRandomItem<number[] | boolean>([[1], false]);
}
