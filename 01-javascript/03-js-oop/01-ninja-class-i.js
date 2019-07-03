function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
}

Ninja.prototype.sayName = function(){
    console.log(this.name);
}

Ninja.prototype.showStats = function(){
    console.log("Health: " + this.health + "speed: " + this.speed + "strength: " + this.strength);
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
}