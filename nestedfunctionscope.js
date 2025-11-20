// nested function scope 
// Lexical Scoping: JavaScript uses lexical scoping, meaning the scope of a variable is determined by its position in the source code. 
// A function's access to variables is determined by where it is defined, not where it is called.
let a=10;
function outer(){
    let b= 20;
    function inner(){
        let c =30;
        console.log(a,b,c);
    }
    inner()
}
outer()