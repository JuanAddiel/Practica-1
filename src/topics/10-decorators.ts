function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T){
    return class extends constructor{
        newProperty = "Hola";
        hello = "override";
    }
}

@classDecorator
export class SuperCLass{
    public myProperty:string = 'ABC123';
    print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperCLass);
const myClass = new SuperCLass();
console.log(myClass);