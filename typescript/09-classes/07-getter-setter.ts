// ------------------------------------------------------------------------------
// 📌 게터 & 세터 (Getter & Setter)
// ⭐️ URL : https://bit.ly/3GbEdRA
// ------------------------------------------------------------------------------
// - 게터, 세터를 사용해 비공개 프로퍼티 조합을 읽거나, 쓸 수 있도록 구성할 수 있습니다.
// ------------------------------------------------------------------------------

// score 프로퍼티를 외부에서 읽을 수 있도록 설정합니다.
// 단, 직접 score 프로퍼티 값을 수정할 수는 없습니다.

// fullName 프로퍼티를 구성합니다.
// - getter를 사용해 `role nickname` 조합 값을 반환하도록 합니다.
// - setter를 사용해 role 또는 nickname 값을 수정할 수 있도록 구현합니다.

// FullName 타입 별칭이 필요한 경우 추가합니다.
type FullName = string | { role: string; nickname: string };

{
  class Player {
    constructor(
      private nickname: string,
      private role: string,
      private _score: number = 0
    ) {
      this.boostScoreUp();
    }

    get fullName() {
      // return this.role + ' ' + this.nickname;
      // return `${this.role} ${this.nickname}`;
      const { role, nickname } = this;
      return `${role} ${nickname}`;
    }

    set fullName(option: FullName) {
      // option이 string인 경우: 'role nickname'
      if (typeof option === 'string') {
        const [role, nickname] = option.split(' '); // ['role', 'nickname']
        this.updateFullName(role, nickname);
      }

      // option이 object인 경우: { role: '...', nickname: '...' }
      else {
        const { role, nickname } = option;
        this.updateFullName(role, nickname);
      }
    }

    private updateFullName(role: string, nickname: string): void {
      this.role = role;
      this.nickname = nickname;
    }

    // READONLY
    get score() {
      return this._score;
    }

    // set score(newScore: number) {
    //   this._score = newScore;
    // }

    private boostScoreUp(): void {
      this._score += 100;
    }

    public scoreUp(point: number): void {
      this._score += point;
    }

    public scoreDown(point: number): void {
      this._score -= point;
    }
  }

  const yamoo9 = new Player('yamoo9', '멘토');

  // READ
  console.log(yamoo9.score);

  // WRITE
  // yamoo9.score = 100;

  console.log(yamoo9.fullName);

  yamoo9.fullName = 'instructor yamoo9';
  console.log(yamoo9.fullName);

  yamoo9.fullName = { role: '에듀케이터', nickname: '야무' };
  console.log(yamoo9.fullName);
}
