interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}
interface Details{
    author:string;
    year:number;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 120,
    song: 'La Macarena',
    details:{
        author: 'La Macarena',
        year: 1994
    }
}
//Destruturacion utilizamos lo siguiente
const {song} = audioPlayer;
const {song:anotherSong,
       songDuration:duration,
       details:{author}
    } = audioPlayer;

// console.log('Author', author);
// console.log('Song', song);


//De Arreglos
//Si trunks no fue encontrado agregamos const [p1,p2,trunks = 'Not Found']
const [p1,p2,trunks]:string [] = ['Goku','Vegeta','Trunk'];
//Destructuracion de los arreglos seria

//Luego del dbz[0] podemos poner || el operador or para luego mandarle un mensaje si no fue encontrado
console.log(trunks);

export{};