// --------------------------------------------------------------------------
// 📌 디스크리미네이트 유니언 (Discriminated Unions)
// ⭐️ URL : https://bit.ly/3tKdUe9
// --------------------------------------------------------------------------
// - 여러 타입이 유사한 속성으로 구성된 경우, 이를 식별하기 위한 리터럴 속성을 만들 수 있습니다.
// - 리터럴 속성을 사용해 타입 범위를 좁힐 수 있습니다.
// --------------------------------------------------------------------------

{
  enum FarmAnimalKind {
    ROOSTER = 'ROOSTER',
    COW = 'COW',
    SHEEP = 'SHEEP',
    PIG = 'PIG',
  }

  type AnimalSound = keyof typeof FarmAnimalKind;

  interface Rooster {
    kind: FarmAnimalKind.ROOSTER;
    name: string;
    age: number;
    crowing: string;
  }

  interface Cow {
    kind: FarmAnimalKind.COW;
    name: string;
    age: number;
    cry: string;
  }

  interface Sheep {
    kind: FarmAnimalKind.SHEEP;
    name: string;
    age: number;
    sound: string;
  }

  interface Pig {
    kind: FarmAnimalKind.PIG;
    name: string;
    age: number;
    crying: string;
  }

  type FarmAnimal = Rooster | Cow | Sheep | Pig;

  // 수탉, 소, 양, 돼지는 모두 유사한 속성으로 구성된 인터페이스를 가집니다.
  // 소유한 속성이 유사하므로 각 동물의 타입을 구분할 방법이 필요합니다.
  // kind 리터럴 속성을 추가해 각 동물을 식별할 수 있도록 구성합니다.

  function getFarmAnimalSound(animal: FarmAnimal): string {
    switch (animal.kind) {
      case FarmAnimalKind.PIG:
        return animal.crying;
      case FarmAnimalKind.SHEEP:
        return animal.sound;
      case FarmAnimalKind.ROOSTER:
        return animal.crowing;
      case FarmAnimalKind.COW:
        return animal.cry;
      default:
        return '🚨 동물 농장에 속한 동물이 아닙니다.';
    }
  }

  const lucas: Sheep = {
    kind: FarmAnimalKind.SHEEP,
    name: '루카스',
    age: 3,
    sound: '메~ 메~ 🐏',
  };

  getFarmAnimalSound(lucas);
  getFarmAnimalSound({
    kind: FarmAnimalKind.COW,
    cry: '음~ 머',
    name: '카우',
    age: 2,
  });
}
