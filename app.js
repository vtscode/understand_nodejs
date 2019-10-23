// function logging(fn){
//     fn();
// }

const logging = fn => {
    fn()
}

const greetMe = () => {
    // console.log(`Hai Riventus`);
}

// greetMe();
logging(greetMe);

// function constructor
function Person(firstname,lastname){
    this.fName = firstname
    this.lName = lastname
}

// inheritance for js
Person.prototype.greet = function() {
    // console.log(`Halo ${this.fName} ${this.lName}`)
}
let hehe = new Person('Riventus','aritonang')
// console.log(hehe.greet());
// console.log(hehe.__proto__);


// pass by value
function change(b){
    b=2;
}
let a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d){
    d.prop1 = function(){};
    d.prop2={};
}
let c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

