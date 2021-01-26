import {divisionCD, multAB, summEF, summE1F1, divisine2f2, a1, a2, getValue} from "./tasks_from_list2";

//1
test ('multiplicationAB should be correct', () => {

    //data:
    const a = +3;
    const b = +9;

    //action
    const result1 = multAB(a,b)

    //expected result:
    expect(result1).toBe(27);
})
//2
test ('divisionCD should be correct', () => {

    //data:
    const c = +7;
    const d = +9;

    //actions:
    const result1 = divisionCD(c,d);

    //expected result
    expect(result1).toBe(0.7777777777777778);
    expect(result1.toFixed(2)).toBe("0.78")
})
//3
test ('summEF should be correct', ()=> {
    //data:
    const e = +3;
    const f = +5;

    //action:
    const resultEF = summEF(e,f);

    //expected result
    expect(resultEF).toBe(8)
})
//4
test ('summE1F1 should be correct', () => {
    //data:
    const e1 = '3';
    const f1 = +5;

    //action:
    const resultE1F1 = summE1F1(e1,f1);

    //expected result:
    expect(resultE1F1).toBe("35");
})
//5
test('divisione2f2 should be correct', () => {
    //data:
    const e2 = 3;
    const f2 = 0;

    //action
    const resulte2f2 = divisine2f2(e2,f2);

    //expected result:
    expect(resulte2f2).toBe(Infinity)
})
//6
test('summe3f3 should be correct', () => {
    //data:
    const e3 = 3;
    const f3 = 'Hello';

    //action:
    const resulte3f3 = a1(e3,f3);

    //expected result:
    expect(resulte3f3).toBe('3Hello');
})
//7
test('multiplicatione4f4 should be correct', () => {

    //data:
    const e4 = 3;
    const f4 = 'Hello';

    //action:
    const resulte4f4 = a2(e4,f4);

    //expected result:
    expect(resulte4f4).toBe(NaN);
})
//8
test('the return value should be correct', () => {

    //data:
    const bv = 'hello'

    //action:
    const resultA = getValue(bv);

    //expected result:
    expect(resultA).toBe('hello');
})