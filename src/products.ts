
export interface Product {
    name: string,
    price: number
}

let products: Product[] = [
    {
        name: "jalapenos",
        price: 1
    },
    {
        name: "sparkling water",
        price: 1.99
    },
    {
        name:  "tomatoes",
        price: 3.50
    }
]

export function calcAverageProductPrice(array: Product[]):number {
    let total:number = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i].price;
    }

    if (total === 0) {
        return total;
    } 
    
    return total / array.length;
}
calcAverageProductPrice(products);