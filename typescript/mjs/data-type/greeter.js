function greeter(person) {
    if (person === void 0) { person = 'abc'; }
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
