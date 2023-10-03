
//No podemos usar el tipo de dato any
export function whatsMyType<T> (argument:T):T{
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINUmber = whatsMyType<number>(50);
console.log(amINUmber);