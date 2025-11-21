//default binding
// When a function is called normally (not as a method, not with call/apply/bind):
function show(){
    console.log(this)
}
show();
// In strict mode: this = undefined
// In non-strict mode: this = window (browser) or global (Node)


//implicit binding
// The object before the dot becomes this.
const user={
    name:"hamdha",
    greet(){
        console.log(this.name);
    }
};
user.greet(); // this = user
// rule -> Whoever owns the function at call time, is this.


//explicit binding (call/apply/bind)
//You force the value of this:
function show(){
    console.log(this);
}
show.call({name:"hamdha"})
// call → call immediately
// apply → same but arguments are array
// bind → returns a new function with fixed this


// constructor binding
function User(name){
    this.name=name;
}
const u =new User ("Hamdha");
// The new keyword creates a new object and sets this to it.
// So inside the constructor:
// this = {} (new object)

// arrow functions don’t have their own this
function normal(){
    console.log(this);
}
normal();
// Normal functions create their own execution context.
// Inside that context:
// → A new this is assigned.
// But arrow functions skip this step.
// Arrow functions do NOT create a “this binding” inside their execution context.
// JavaScript just says:
// “Use the this from the parent scope (outer lexical environment).”
// This is called lexical this.
const obj={
    name:"hamdha",
    test:function(){
        const arrow =()=>{
            console.log(this.name)
        };
        arrow();
    }
};
obj.test();



const user2 = {
  name: "Hamda",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // undefined