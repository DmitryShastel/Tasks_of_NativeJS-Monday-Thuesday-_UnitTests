export const student = {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
    friends: ["Alex", "Nick", "John"]
}


export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends: Array<string>
}

export let sum = (a: number, b: number) => {
    return a + b
}

//calculator
// actions: "sum", "mul", "div", "sub"

export const calculator = (a: number, b: number, action: string) => {
    switch (action) {
        case "sum": return a + b;
        case "mul": return a * b;
        case "div": return a / b;
        case "sub": return a - b;
        default: return "Unknown"
    }
}

export const copyStudent = (st: StudentType): StudentType => {
    return {...st}
};
/*export const deepCopyUser = {...user, friends:[...user.friends]};*/
