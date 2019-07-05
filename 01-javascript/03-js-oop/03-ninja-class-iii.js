class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}.`)
    }

    showStats(){
        console.log(`My name is ${this.name}, health is ${this.health}, speed is ${this.speed}, and strength is ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    drinkAndSpeak(){
        super.drinkSake();
        console.log("If you're gonna drink all day you gotta start in the morning.")
    }
}