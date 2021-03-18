const students2 = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

/*export type Students2Type = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}*/

//calculator
// actions: "sum", "mul", "div", "sub"

export const calculator = (a, b, action) => {
    switch (action) {
        case "sum": return a + b;
        case "mul": return a * b;
        case "div": return a / b;
        case "sub": return a - b;
        default: return "Unknown"
    }
}

export let sum = (a, b) => {
    return a + b
}