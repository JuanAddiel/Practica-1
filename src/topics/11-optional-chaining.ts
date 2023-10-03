export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1: Passenger={
    name:"Juan",
    children:["Rohan","Rahul"]
}

const passenger2: Passenger={
    name:"Addiel"
}


const printChildren =(passenger:Passenger)=>{
    //passenger.children?Si Exsite dame el.length
    //Utilizamos el operador or por si es undifined
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1);