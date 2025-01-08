
// console.log(a); //error
// const a = 30;
// console.log(a); //30
// console.log(b); //error
// let b = 60;
// console.log(b);//60
// console.log(c);//error
// var c = 40;
// console.log(d);//error


// Hoisting is the process where functions are hoisted at the top of their declarations, so that we can access functions before and after its declarations anywhere in the program. 
add()
sub()
function sub () {
    // console.log(x+y); cannot access x before initialization
    let x = 40;
    var y = 50;
    console.log(x+y);
}
function add() {
    // console.log(a+b);  NaN
    var a = 50;
    var b = 60;
    console.log(a+b);
}