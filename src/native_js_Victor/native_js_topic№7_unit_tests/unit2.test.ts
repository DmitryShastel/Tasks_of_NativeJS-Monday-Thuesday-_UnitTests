import {sum} from "./functions_for_students";

test("calculator actions should be work correctly", () => {

    const a = 1;
    const b = 2;

    const resultSum = (a+b);
    const resultMul = (a*b);
    const resultDiv = (a/b);
    const resultSub = (a-b);

    expect(resultSum).toBe(3)
    expect(resultMul).toBe(2)
    expect(resultDiv).toBe(0.5)
    expect(resultSub).toBe(-1)
})

test('sum', () => {
    const a = 1
    const b = 5
    const result = sum(a,b)
    expect(result).toBe(6)
})

