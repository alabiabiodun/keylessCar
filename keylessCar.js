
// 1. Keyless car using function declaration with prompt()
function checkDriverAge(){
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
// Call the above function using: checkDriverAge();


// 2. Keyless car using function expression with prompt()
var checkDriverAge = function(){
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
// Call the above function using: checkDriverAge();



// 3. Keyless car using function declaration with console.log()
function checkDriverAge(age){
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}
// Call the above function using: e.g. checkDriverAge(98)