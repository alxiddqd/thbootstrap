
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var quiz = [
  ['Skolko budet 2 + 2', '4'],
  ['Skolko budet 100 + 100', '200'],
  ['Skolko budet 150 + 150', '300']
];

function execute( quiz ){
  var correct = 0;
  var wrong = 0;
  var correctHTML = '<h1>Correct answers:</h1><ol>';
  var wrongHTML = '<h1>Wrong answers:</h1><ol>';
  var html = ' ';
  
  for (var i = 0; i < quiz.length; i += 1){
    var input = prompt(quiz[i][0]);
    
     if (input === quiz[i][1] && input === '300') {
      correctHTML += '<li>Otsosi u traktorista!</li>'
      correct += 1;
     } else if (input === quiz[i][1]){
      correctHTML += '<li>' + quiz[i][0] + ' is correct! Its ' + quiz[i][1] + '</li>';
      correct += 1;
    } else {
      wrongHTML += '<li> Wrong answer!</li>';
      wrong += 1;
    }
  }
  correctHTML += '</ol>';
  wrongHTML += '</ol>';
  html += '<p>You got ' + correct + ' answers correct!</p>';
  html += '<p>And ' + wrong + ' wrong answers</p>';
  html += correctHTML;
  html += wrongHTML;
  return html;
}

print(execute(quiz));