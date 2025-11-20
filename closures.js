//A closure in JavaScript is a function that remembers and can access its lexical environment 
//(the scope in which it was declared) even after that lexical environment has closed.

 function outerFunc(a){
    let count =0;
     function innerFunc(){
        count++;
        console.log(count);
    }
    return innerFunc;
}

const fn = outerFunc();
fn();
fn();

const fn2 = outerFunc();
fn2();