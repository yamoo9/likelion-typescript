// ------------------------------------------------------------------------------
// 📌 인터페이스 → 클래스 구현 (Interface Implements)
// ⭐️ URL : https://bit.ly/3OaI9Ef
// ------------------------------------------------------------------------------
// - 인터페이스의 요구사항을 클래스가 구현(implements)하도록 구성할 수 있습니다.
// ------------------------------------------------------------------------------

// Cap 클래스는 Colorful 인터페이스를 구현해야 합니다.
// Print 클래스는 Colorful, Printable 인터페이스를 모두 구현해야 합니다.

{
  // 웹 표준(Web Standards) 제정 기관은?
  // W3C 기술 표준 제정

  // 사양: 이렇게 구현해야 한다.
  interface Colorful {
    color: string;
  }

  interface Printable {
    isPortable: boolean;
    print(): void;
  }

  // 브라우저 벤더(제조사) 구현
  class Cap implements Colorful {
    constructor(public color: string) {}
  }

  class Printer implements Colorful, Printable {
    constructor(public color: string, public isPortable: boolean) {}

    public print(): void {}
  }
}
