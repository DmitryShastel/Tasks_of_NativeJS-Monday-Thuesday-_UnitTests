//1
export let summ = (a: number,b: number) =>{
    return a + b
}

//2
export let getTriangleType = (a: number,b: number,c: number)=>  {
   if(a+b>c && b+c>a && c+a>b) {
       if(a == b && b == c && c ==a){
           return "10"
       }else if (a === b || b === c || c === a) {
           return "01"
       }else {
           return "11"
       }
   } else  {
        return "00"
    }
}

//3
export function getSum(number: number) {
    return number.toString().split('').reduce((acc, el  ) => acc + Number(el),0)


}

