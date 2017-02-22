/*
 * Number selection logic
 */
var the_number=null;
function pick_number(){
    var random_number;
    random_number = Math.floor(Math.random() * 100) + 1;
    the_number = random_number;
    return random_number;
}

function make_guess(){
    var the_guess = document.getElementById('guess_input').value;
    if (the_guess == the_number){
        document.getElementById('response_div').innerHTML = "Access Granted";
    }
    else if (the_guess < the_number){
        document.getElementById('response_div').innerHTML = "Too Low";
        document.getElementById('guess_input').value = '';
    }
    else if (the_guess > the_number){
        document.getElementById('response_div').innerHTML = "Too High";
        document.getElementById('guess_input').value = '';
    }
    else{
        document.getElementById('response_div').innerHTML = "Invalid Input";
        document.getElementById('guess_input').value = '';
    }
}

