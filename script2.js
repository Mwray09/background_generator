function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not valid");


function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encouterd a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You ran into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction"
    }
    return whatHappens
}


function winBattle(points) {
    return points;
}

let experiencePoints = winBattle(true) ? 10 : 1;



function evolve(level){
    return level
}

let nextEvo = evolve(true) ? "evolution started" : "not enough exp";






function chooseStarter(pokemon){
    var choice;
    switch(pokemon){
        case "left":
            choice = "would you like the grass type pokemon Bulbasaur?";
            break;
            case "middle":
                choice = "would you like the fire type pokemon charmander?";
                break;
                case "right":
                    choice = "would you like the water type pokemon squirtle?"
                    break;
                    default:
                        choice = "Please choose your starter pokemon!"
    }
    return choice

}

const productA = {
    shirts: ["blue", "green"],
    availableSizes: [28, 30, 32, 36]

}

const productB = {
    shirts: ["blue", "green"],
    availableSizes: [30, 30, 32, 36]

}



