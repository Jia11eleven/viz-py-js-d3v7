function Counter(inc) {
    console.log('Counter called with inc:', inc);
    var count = 0;
    var add = function () {
        count += inc;
        console.log('Current count: ' + count);
    };
    return add;
}

var inc2 = Counter(2);
console.log(typeof Counter); // Should log: "function"
console.log(typeof Counter(2)); // Should log: "function"
inc2();
inc2();

//selective expose public methods
function CounterNew(inc){ //if same Counter function, it will auto overwrite due to hoist
    var count=0;
    var api = {};
    api.add = function(){
        count += inc;
        console.log('Current count: '+count);
    }
    api.sub = function(){
        count -= inc;
        console.log('Current count: '+count);
    }
    api.reset = function(){
        count = 0
        console.log('Couunt reset to 0')
    }
    return api;
}

cntr = CounterNew(3);
cntr.add();
cntr.add();
cntr.sub();
cntr.reset();