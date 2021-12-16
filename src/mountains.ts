
export interface Mountain {
    name: string;
    height: number
}

let mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
]

export function findNameOfTallestMountain(array: Mountain[]) {
    let tallestHeight:number = 0;
    let mountainName:string = "";

    for (let tallest of array) {
        if (tallest.height > tallestHeight) {
            tallestHeight = tallest.height;
            mountainName = tallest.name;
        }
    }
    
    return mountainName;
}
console.log(findNameOfTallestMountain(mountains));


