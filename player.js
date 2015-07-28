var inquirer = require('inquirer');

var game = require('./game.source');
console.log(game.nodes.leftResp.getConnectionStrings());

var nodes = game.nodes

var startingQuestion = [
	{
		type: "list",
		name: game.startingPoint.title,
		message: game.startingPoint.text,
		choices: game.startingPoint.getConnectionStrings()
	}
]
var secondQuestion = [
	{
		type: "list",
		name: game.nodes.leftResp.title,
		message: game.nodes.leftResp.text,
		choices: game.nodes.leftResp.getConnectionStrings()
	}
]

inquirer.prompt(startingQuestion, function(answers)	 {
  //console.log(answers);
  if(answers['direction'] == "right"){
    console.log(game.nodes.rightResp.text);
	}else if(answers['direction'] == "left"){
    var askColorAgain = function() {
      inquirer.prompt(secondQuestion,function(answer){
        if(answer['leftResp'] == 'blue') {
          secondQuestion[0].message = "That is true."
          console.log("That is true.");
        }
        else {
          secondQuestion[0].message = "That is incorrect.";
          askColorAgain();
        }
      });
    }
    askColorAgain();
	}
});

/*

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/
