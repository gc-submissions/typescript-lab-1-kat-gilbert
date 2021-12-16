
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
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i].price;
    }
    return total / array.length;
}

console.log(calcAverageProductPrice(products));