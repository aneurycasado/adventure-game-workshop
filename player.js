var inquirer = require('inquirer');

var game = require('./game.source');


var nodes = game.nodes

function getChoices(connections){
	var array = [];
	for(var i = 0; i < connections.length; i++){
		var name = connections[i].title;
		array.push(name);
	}
	return array;
}

var questions = [
	{
		type: "list",
		name: game.startingPoint.title,
		message: game.startingPoint.text,
		choices: game.startingPoint.getConnectionStrings()
	},
	{
		type: "list",
		name: game.nodes.leftResp.title,
		message: game.nodes.leftResp.text,
		choices: game.nodes.leftResp.getConnectionStrings()
	}
]

inquirer.prompt(questions, function(answers)	 {
	if(answers.direction == "rightResp"){
		console.log("Your dead");
		return;
	}else if(answers.direction == "leftResp"){
		if(answers.leftResp == "blue"){
			console.log("1");
		}else if(answers.leftResp == "green"){
			console.log("2");
		}else if(answers.leftResp == "red"){
			console.log("3");
		}
	}
});

/*

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/
