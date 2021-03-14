const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const students = [
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


let costomMap = (array, func) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = func(array[i])
    }
    return newArray
}

let addScores = (student) => {
    return {...student, scores: student.scores + 10}
}






