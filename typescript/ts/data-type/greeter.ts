function greeter(person : string = 'abc') {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
