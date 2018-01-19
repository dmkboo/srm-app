import { SET_SONG } from '../actions/types'
const initialState ={
  list:[
    {
      id: 1,
      url: '../mp3/listo-para-lo-que-venga/01-listo-para-morir.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Listo para morir',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'4:01',
    },
    { id: 2,
      url: '../mp3/listo-para-lo-que-venga/02-ahora-que-sigue.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Ahora que sigue?',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'3:50'
    },
    { id: 3,
      url: '../mp3/listo-para-lo-que-venga/03-pasa-el-tiempo.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Pasa el Tiempo (feat. Melodico)',
      artist: 'Santa RM, Melodico',
      album: 'Listo para lo que venga',
      duration:'4:26'
    },
    { id: 4,
      url: '../mp3/listo-para-lo-que-venga/04-dejame-te-cuento-un-cuento.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Dejame Te Cuento un Cuento',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'4:39'
    },
    { id: 5,
      url: '../mp3/listo-para-lo-que-venga/05-broma-de-mal-gusto.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Broma de Mal Gusto(feat. Mc Davo)',
      artist: 'Santa RM, MC Davo',
      album: 'Listo para lo que venga',duration:'3:30'
    },
    { id: 6,
      url: '../mp3/listo-para-lo-que-venga/06-mi-ultima-cancion-de-amor.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Mi Ultima Canción de Amor',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'3:43'
    },
    { id: 7,
      url: '../mp3/listo-para-lo-que-venga/07-no-voy-a-rendirme.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'No Voy a Rendirme (feat. Emanero & Soma)',
      artist: 'Santa RM, Emanero & Soma',
      album: 'Listo para lo que venga',
      duration:'3:44'
    },
    { id: 8,
      url: '../mp3/listo-para-lo-que-venga/08-hablame-de-mi.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Hablame de Mi',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'3:27'
    },
    { id: 9,
      url: '../mp3/listo-para-lo-que-venga/09-en-el-mismo-sitio.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'En el mismo Sitio (feat. Seven)',
      artist: 'Santa RM, Seven',
      album: 'Listo para lo que venga',
      duration:'4:55'
    },
    { id: 10,
      url: '../mp3/listo-para-lo-que-venga/10-fast-mortem.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Fast Mortem (feat. Iluminatik & Isusko)',
      artist: 'Santa RM, Iluminatik, Isusko',
      album: 'Listo para lo que venga',
      duration:'5:08'
    },
    { id: 11,
      url: '../mp3/listo-para-lo-que-venga/11-termino-medio.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Termino Medio (feat. El Momo & Bascur)',
      artist: 'Santa RM, El Momo, Bascur',
      album: 'Listo para lo que venga',
      duration:'3:49'
    },
    { id: 12,
      url: '../mp3/listo-para-lo-que-venga/12-pk2-capitales.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'PK2 Capitales (feat. Los De La Puerta Norte)',
      artist: 'Santa RM, Los De La Puerta Norte',
      album: 'Listo para lo que venga',
      duration:'5:43'
    },
    { id: 13,
      url: '../mp3/listo-para-lo-que-venga/13-infinitiflow.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'InfinitiFlow (feat. Iluminatik)',
      artist: 'Santa RM, Iluminatik',
      album: 'Listo para lo que venga',
      duration:'5:02'
    },
    { id: 14,
      url: '../mp3/listo-para-lo-que-venga/14-la-de-mis-suenos.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'La de Mis Sueños (feat. Afaz Natural)',
      artist: 'Santa RM, Afaz Natural',
      album: 'Listo para lo que venga',
      duration:'3:12'
    },
    { id: 15,
      url: '../mp3/listo-para-lo-que-venga/15-dano-colateral.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Daño Colateral (feat. Matika)',
      artist: 'Santa RM, MATIKA',
      album: 'Listo para lo que venga',
      duration:'4:13'
    },
    { id: 16,
      url: '../mp3/listo-para-lo-que-venga/16-loca.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Loca (feat. Nampa Básico)',
      artist: 'Santa RM, Nampa Básico',
      album: 'Listo para lo que venga',
      duration:'3:52'
    },
    { id: 17,
      url: '../mp3/listo-para-lo-que-venga/17-inmortal.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Inmortal',
      artist: 'Santa RM',
      album: 'Listo para lo que venga',
      duration:'3:53'
    },
    { id: 18,
      url: '../mp3/listo-para-lo-que-venga/18-los-mas-buscados-remix.mp3',
      cover: '../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg',
      name: 'Los Más Buscados (Remix)[feat. Miausone, Buffon, Cryptic Wisdom, Isusko, Emanero, Aczino, Dbrv, Soru, HOM, Abram, Nampa Basico, T-Killa, Lebron, Danger, Porta, DJ. Akrylik, DJ. Xino] (feat. Matika)', artist: 'Santa RM, Miausone, Buffon, Cryptic Wisdom, Isusko, Emanero, Aczino, Dbrv, Soru, HOM, Abram, Nampa Basico, T-Killa, Lebron, Danger, Porta, DJ. Akrylik, DJ. Xino',
      album: 'Listo para lo que venga',
      duration:'6:14'
    }
  ]
}

export default function setSongs(state = initialState, action){
  switch (action.type){
    case SET_SONG:
      return Object.assign({}, state, {
        list: action.songs
      })
    default:
      return state
  }
}
