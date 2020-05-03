function Cat(name, color){
	this.name = name;
	this.color = color;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}

module.exports = Cat;