// --------------------------------------------------------------------------
// 📌 클래스 제네릭 (Generic Classes)
// ⭐️ URL : https://bit.ly/3EsmB2A
// --------------------------------------------------------------------------
// - 클래스에도 제네릭을 설정할 수 있습니다.
// --------------------------------------------------------------------------

{
  interface RequiredId {
    id: string;
  }

  interface Music extends RequiredId {
    title: string;
    artist: string;
  }

  interface Movie extends RequiredId {
    title: string;
    director: string;
    releaseDate: number;
  }

  class MoviePlaylist {
    #movieList: Movie[] = [];
  }

  class MusicPlaylist {
    #musicList: Music[] = [];
  }

  // Playlist 클래스를 정의하고 제네릭을 설정합니다.
  // Playlist 클래스에 add(), remove() 메서드를 추가합니다.
  class Playlist<T extends RequiredId> {
    constructor(private list: T[] = []) {}

    add(newItem: T) {
      this.list.push(newItem);
    }

    remove(removeItemId: string) {
      this.list = this.list.filter((item) => item.id !== removeItemId);
    }
  }

  const myMusicPlaylist = new Playlist<Music>();
  myMusicPlaylist.add({ id: 'music-1', title: 'Rush Hour', artist: 'Crush' });

  const movie1: Movie = {
    id: 'movie-1',
    title: '자백',
    director: '윤종석',
    releaseDate: 2022,
  };

  const movie2: Movie = {
    id: 'movie-2',
    title: '시간을 꿈꾸는 소녀',
    director: '박혁지',
    releaseDate: 2023,
  };

  const myMoviePlaylist = new Playlist<Movie>([movie1]);

  myMoviePlaylist.add(movie2);

  myMoviePlaylist.remove(movie2.id);
}
