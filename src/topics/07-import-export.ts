//Importaciones y exportaciones
import {Product, taxCalculation} from './06-function-destructuring';
const shoopingCart:Product[]=[
    {
        description:'Nokia A1',
        price:150.0
    },
    {
        description:'iPad Air',
        price:350.5
    }
];


const [total,tax] = taxCalculation({
    tax:0.15,
    products:shoopingCart
});

console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`);