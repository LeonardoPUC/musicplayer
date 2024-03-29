const musics = [
  { id: 1, name: 'Senhor do Tempo', archive: 'SenhorDoTempo.mp3', owner: 'Charlie Brown Jr.' },
  { id: 2, name: 'Um Minuto Para O Fim Do Mundo', archive: 'UmMinutoParaOFimDoMundo.mp3', owner: 'CPM22' },
  { id: 3, name: 'Olhos Certos', archive: 'OlhosCertos.mp3', owner: 'Detonautas' },
];

class Music {
  static getAll() {
    return musics;
  }

  static getById(id) {
    return musics.find((music) => music.id === id);
  }

  static create(music) {
    musics.push(music);
  }
  

  static update(id, music) {
    const index = musics.findIndex((m) => m.id === id);
    if (index !== -1) {
      musics[index] = music;
    }
  }

  static delete(id) {
    const index = musics.findIndex((m) => m.id === id);
    if (index !== -1) {
      musics.splice(index, 1);
    }
  }
}
  
  module.exports = Music;