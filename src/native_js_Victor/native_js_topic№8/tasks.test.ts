import {getSum, getTriangleType, summ} from "./tasks";

test('summa function summ should be correct', () =>{
    const a = 3
    const b = 5
    const result = summ(a,b)
    expect(result).toBe(8)
} )
test("get Triangle Type", ()=> {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")
})

test("get Sum ", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})


