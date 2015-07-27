


var Connection = function(nextNode, condition) {
  this.nextNode = nextNode;
  this.condition = condition;
};

Connection.prototype.test = function(condition){
  if(this.condition === undefined){
    return true;
  }
  if(condition=== this.condition){
    return true;
  }else return false;

};




module.exports = Connection;
