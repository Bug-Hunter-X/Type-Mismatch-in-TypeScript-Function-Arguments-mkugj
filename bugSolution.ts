function add(a: number, b: number): number {
  return a + b;
}

let result = add(Number("1"), 2); // Correct: Explicit type conversion

let num1:number = 1; //or change the values to numbers directly 
let num2:number = 2;
let result2 = add(num1, num2); // Correct: Values are now numbers