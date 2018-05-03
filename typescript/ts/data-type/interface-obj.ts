interface CourseInterface {
    name: string;
    time: number;
    free?: boolean
}

let obj: CourseInterface;

obj = {
    name: 'ES6',
    time: 20,
    free: false
};

let obj1: CourseInterface = {
    name: 'haha',
    time: 30
};

console.log(obj);
console.log(obj1);