var Task = /** @class */ (function () {
    function Task(id, name, state) {
        this.id = id;
        this.name = name;
        this._state = state;
    }
    Object.defineProperty(Task.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
var task1 = new Task(1, 'task1', 'process');
console.log(task1.state);
task1.state = 'finished';
console.log(task1.state);
