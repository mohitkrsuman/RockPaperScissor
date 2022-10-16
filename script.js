function rpsGame(yourChoice){
   console.log(yourChoice);
   let humanChoice, botChoice;
   humanChoice = yourChoice.id;
   botChoice = intToChoice(randToRpsInt());
   console.log('computerChoice: ', botChoice);

   results = decideWinner(humanChoice, botChoice);
   console.log(results);
 
   message = finalMessage(results);
   console.log(message);
   
   message = finalMessage(results);
   console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
   return Math.floor(Math.random()*3);
}

function intToChoice(number){
   return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
   var rpsDatabase = {
      'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
      'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
      'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
   }

   var yourScore = rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

   return[yourScore, computerScore];
}

function finalMessage([yourScore, computerChoice]){
   if (yourScore === 0){
      return {'message':'You Lost!' , 'color':'red'};
   }
   else if (yourScore === 0.5){
      return {'message':'Match drawn!' , 'color':'yellow'};
   }
   else {
      return {'message':'You Won!' , 'color':'green'};
   }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    // let first remove all the images 
   var imagesDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissor': document.getElementById('scissor').src
   }
   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 11)'>"

  messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 50px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"
  
  document.getElementById('container-2').appendChild(humanDiv);
  document.getElementById('container-2').appendChild(messageDiv);
  document.getElementById('container-2').appendChild(botDiv);
}