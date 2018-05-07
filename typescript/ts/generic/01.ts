function showInfo<T>(x: T): T {
    return x;
}

console.log(showInfo<number>(123));

class StudyGeneric {
    static printArr<T>(params: Array<T>): void {
        console.log(params);
    };
}

StudyGeneric.printArr<number>([1, 2, 3]);
StudyGeneric.printArr<any>([1, 2, 3, false, 'sdfdsf']);


