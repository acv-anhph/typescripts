function showInfo(x) {
    return x;
}
console.log(showInfo(123));
var StudyGeneric = /** @class */ (function () {
    function StudyGeneric() {
    }
    StudyGeneric.printArr = function (params) {
        console.log(params);
    };
    ;
    return StudyGeneric;
}());
StudyGeneric.printArr([1, 2, 3]);
StudyGeneric.printArr([1, 2, 3, false, 'sdfdsf']);
