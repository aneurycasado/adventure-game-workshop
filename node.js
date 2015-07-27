var Connection = require('./connection');

var Node = function(title, text) {
  this.title = title;
  this.text = text;
  this.connections = [];
  this.routes = {};

};

Node.prototype.connect = function(node,text){
  this.connections.push(node)
  for(route in this.routes){
    if(text == route){
      console.log(text);
      throw new Error();
    }
  }
  this.routes[text] = node;
}

Node.prototype.route = function(text){
  return this.routes[text];
}

Node.prototype.getConnectionStrings = function(){
  var connections = [];
  for(route in this.routes){
    connections.push(route);
  }
  return connections;
}

Node.prototype.hasConnectionCondition = function(text){
  for(route in this.routes){
    if(text == route){
      return true;
    }
  }
  return false;
}

module.exports = Node;
