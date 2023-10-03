
/*
    ===== Código de TypeScript =====
*/

//F2 y podemos cambiar el nombre ciudad en todos los lados del archivo.
interface Address{
    street:string;
    country:string;
    city:string;
}
interface SuperHero{
    name:string;
    age:number;
    address:Address;
    showAddress:() => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};