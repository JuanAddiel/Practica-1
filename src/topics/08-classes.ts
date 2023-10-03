

export class Person{
    public name:string;
    private address:string;
    constructor(name:string,address:string){
        this.name=name;
        this.address=address;
    }
}

// export class Hero extends Person{
//     public vida:number;
//     constructor(name:string,address:string, vida:number){
//         //Super es el padre.
//         super(name,address);
//         this.vida=vida;
//     }
// }

export class Hero {
    public vida:number;
    // public person:Person;
    constructor(public name:string,public address:string, vida:number, public person:Person){

        this.vida=vida;
        // this.person = new Person(name,address);
       
    }
}

const person = new Person("Tony Start","New York");
const ironMan = new Hero("Juan","Santa Rosa",15,person);
console.log(ironMan) 