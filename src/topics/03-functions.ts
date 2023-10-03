function addNumbers(a: number, b: number):number{
return a+b;
}

//Funciones de flecha o Arrow function
const addNumbersArrow = (a:number,b:number)=> {
    //Si de alguna forma queremos que esta funcion
    //Devuelva un string utilizamos `${a+b}`
    return a+b;
}

//Recibe nulo con el simbolo de interrogacion
function multiply(firstNumber:number, SecondNumber?:number, base:number=2){
    return firstNumber * base;
}

interface Character{
    name:string;
    hp:number;
    showHp:()=> void;
}
const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const strider:Character={
    name: "Strider",
    hp: 100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healCharacter(strider,10);
strider.showHp();

// const result = addNumbers(1,2);
// const result2:number = addNumbersArrow(1,2);
// const multiplyResult:number = multiply(5);
// console.log({result, result2,multiplyResult});

export{};