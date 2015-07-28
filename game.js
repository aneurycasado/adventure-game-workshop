var Node = require('./node');

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;
  this.numberOfNodes = 0;
};

Game.prototype.addNode = function(title,text){
  this.numberOfNodes++;
  for(node in this.nodes){
    if(node=== title){
      throw new Error();
    }
  }
  this.nodes[title] = new Node(title,text);
  if(this.numberOfNodes == 1){
    this.startingPoint = this.nodes[title];
  }
  return this.nodes[title];
}

Game.prototype.getNode = function(title,text){
  return this.nodes[title];
}

Game.prototype.connect = function(node1T,node2T,condition){
  var node1 = this.nodes[node1T];
  var node2 = this.nodes[node2T];
  if(node1 == undefined || node2 == undefined){
    throw new Error();
  }
  node1.connect(node2,condition);
}


module.exports = Game;
