console.log("I am connected!");

function rpsGame(yourChoice) {

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log('My Choice: ',humanChoice);

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice: ',botChoice);

    let results = decideWinner(humanChoice, botChoice); 
    console.log(results);

    message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
    
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];
    console.log('Your Score: ', yourScore);
    return [yourScore, computerScore];
    
}


function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return "{'message': 'You Lost', 'color': 'red'}";
    } else if(yourScore === 0.5) {
        return "{'message': 'You Tied', 'color': 'yellow'}";
    } else if(yourScore === 1) {
        return "{'message': 'You Win', 'color': 'green'}";
    } else {
        return "Function not working!";
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    // remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    // create div
    let humanDiv, botDiv, messageDiv;
    humanDiv = document.createElement('div');
    botDiv = document.createElement('div');
    messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "' style='box-shadow: 0px 10px 50px rgb(0, 0, 0);'>";

    let fColor = finalMessage["color"];
    let fMessage = finalMessage["message"];
    // messageDiv.innerHTML = "<h2 style='   color: " + fColor + "; font-size: 60px; padding: 30px;   '>" + fMessage + "</h2>"
    console.log(fColor);
    console.log(fMessage);

    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(226, 28, 28, 0.712);'>";
    

    document.getElementById('container-body-div').appendChild(humanDiv);
    document.getElementById('container-body-div').appendChild(messageDiv);
    document.getElementById('container-body-div').appendChild(botDiv);

}
