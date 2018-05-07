class Task {
    id: number;
    name: string;
    private _state: string;

    constructor(id: number, name: string, state: string) {
        this.id = id;
        this.name = name;
        this._state = state;
    }

    public get state(): string {
        return this._state
    }

    public set state(v: string) {
        this._state = v;
    }
}

let task1 = new Task(1, 'task1', 'process');

console.log(task1.state);

task1.state = 'finished';

console.log(task1.state);