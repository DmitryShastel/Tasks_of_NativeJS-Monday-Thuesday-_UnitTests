import {sum} from "../native_js_topic№7_unit_tests/functions_for_students";
import {summ} from "./tasks";

test('summa function summ should be correct', () =>{
    const a = 3
    const b = 5
    const result = summ(a,b)
    expect(result).toBe(8)
} )

