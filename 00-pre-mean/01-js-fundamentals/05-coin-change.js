function coinChange(cents){
    var dollar = Math.floor(cents/100);
    cents -= 100*dollar
    var quarter = Math.floor(cents/25);
    cents -= 25*quarter
    var dime = Math.floor(cents/10);
    cents -= 10*dime
    var nickel = Math.floor(cents/5);
    cents -= 5*nickel
    var penny = cents;
    return dollar + " dollars, " + quarter + " quarters, " + dime + " dimes, " + nickel + " nickels, and " + penny + " pennies"
}