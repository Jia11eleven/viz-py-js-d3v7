//example of a prototype  --- unequivalent matching of OOP in python

var Citizen = function(name, country){
    this.name = name;
    this.country = country;
};

Citizen.prototype = {
    printDetails: function(){
        console.log('Citizen ' + this.name
            + ' from ' + this.country
        );
    }
};

var c = new Citizen('Groucho M', 'Freedonia');

c.printDetails()

var groucho = new Citizen('Groucho M.', 'Freedonia');
var harpo = new Citizen('Harpo M.', 'Freedonia');
groucho.printDetails.call(harpo)