// enum TaskState {
//     Created = 100,
//     Active,
//     InActive,
//     Proccessing,
//     Finish
// }
//
// interface TaskInterface {
//     id: number;
//     name: string;
//     state?: TaskState;
// }
//
// class TaskService {
//     public static username: string = 'john';
//     tasks: TaskInterface[];
//
//     constructor(tasks: TaskInterface[]) {
//         this.tasks = tasks;
//     }
//
//     static getItems() {
//         return TaskService.username;
//     }
// }
//
//
// let extask = {id: 3, name: 'ahha', state: TaskState.Finish};
//
// let tasks: TaskInterface[] = [
//     {id: 1, name: "coding"},
//     {id: 2, name: 'es6'},
//     extask
// ];
//
// let task2 = new TaskService(tasks);
//
// console.log(TaskService.username);
//
//
