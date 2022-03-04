function add(n1, n2){
    return n1 +n2;
}

const sub = function(n1,n2){
    return n1 - n2
}
function multiply(n1,n2) {
    return n1 * n2
}

const cb = function(n1,n2, callback){
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function"){
        return "Result from the two numbers: " + n1 + " " + callback.name + " " +  n2 + " = " + callback(n1,n2);
    }
    else if (typeof n1 !== "number") {
        return n1 + ": Param n1 is not a number"
    }
    else if (typeof n2 !== "number"){
        return n2 + ": Param n2 is not a number"
    }
    else if (typeof callback !== "function"){
        return callback + ": Param callback is not a function"
    }
};

let names = ["Lars", "Peter", "Bo", "Jan", "Frederik", "Søren"]
let newNames = names.filter(name => name.length <= 3)

//console.log(names)
// console.log(newNames)

/*console.log("First list: ")
names.forEach(name => console.log(name))
console.log("New list: ")
newNames.forEach(name => console.log(name))*/

//names.map(name => name.toUpperCase()).forEach(name => console.log(name))

console.log(names.map(n => `<li>${n}</li>` + "\n").join(""))



/*
console.log(cb(5,2,multiply))
console.log( add(1,2) )     // What will this print? => 3
console.log( add )          // What will it print and what does add represent? => It wil print the function add as a string
console.log( add(1,2,3) ) ; // What will it print => 3. The compiler only care about the first 2 params.
console.log( add(1) );	  // What will it print => NaN, because we only give 1 param
console.log( cb(3,3,add) ); // What will it print => Prints the cb function using the add function as a param
console.log( cb(4,3,sub) ); // What will it print => Prints the cb function using the sub function as a param
console.log(cb(3,"hh",add));// What will it print => Concats the 2 params
console.log(cb(3,3,add())); // What will it print (and what was the problem) => Runtime error cuz of add with ()

 */




