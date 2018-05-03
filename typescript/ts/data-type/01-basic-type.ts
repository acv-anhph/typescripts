//Boolean

let free: boolean = true;

//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//array

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];


//Tuple

let x: [string, number];

x = ['abc', 4];

x[3] = 'world';

console.log(x);

//Enum

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//Any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//void

function warnUser(): void {
    alert("This is my warning message");
}

//Null and Undefined

let u: undefined = undefined;
let n: null = null;

//Never?????????

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

//Type assertions

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let strLength1: number = (someValue as string).length;




