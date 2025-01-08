function add() {
    let res = 0;
    for(var i = 0; i<arguments.length; i++) {
        res = res + arguments[i];
    }
    console.log('Addition result is: ', res);
}
add();
add(10, 20);
add(10, 20, 40);