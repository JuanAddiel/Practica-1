//Esto es un array de string en TS

const skills:string[]= ['Bash', 'Counter', 'Healing'];

interface Characters {
    name:string;
    hp:number;
    skills:string[];
    //Agregando ? al lado de nuestra propiedad, nos permite que nuestra variable sea nula.
    hometown?:string;
}

//Esto es un objeto, en esto objeto no se le puede declarar a name un tipo de datos
const strider:Characters ={
    name: "Juan",
    hp: 100,
    skills: skills,
    hometown: "Puebla"
};

strider.hometown ="Rivendell";
console.table(strider);
export{};