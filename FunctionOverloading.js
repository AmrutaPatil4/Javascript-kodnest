//Function overloading is the process of declaring functions with same name but different number of parameters.
add(10,20,30,40);
add(10,20);
add(10,20,30);



function add(a,b,c,d) {
    console.log(a+b+c+d);
}
function add(a,b) {
    console.log(a+b);
}
function add(a,b,c) {
    console.log(a+b+c);
}
