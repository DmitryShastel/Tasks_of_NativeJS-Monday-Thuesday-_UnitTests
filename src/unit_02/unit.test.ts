import {divisionCD, multAB, summEF} from './tasks_from_list';

//1
test ('multiplication should be correct', () => {

    //data:
    const a = +3;
    const b = +9;

    //action
    const result1 = multAB(a,b)

    //expected result:
    expect(result1).toBe(27);
})
//2
test ('division should be correct', () => {

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
test ('summ should be correct', ()=> {
    //data:
    const e = +3;
    const f = +5;

    //action:
    const result1 = summEF(e,f);

    //expected result
    expect(result1).toBe(8)
})
