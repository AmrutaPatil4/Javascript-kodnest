// function add() {
//     console.log('Inside add Function');
// }

// add();
// add('Hello');
// add(10,20);


function add() {
    console.log(arguments[0], arguments[1],arguments[2]);

}

add(); //undefined undefined undefined
add(10); //10 undefined undefined
add(10,20); //10 20 undefined
add(10,20,30);




// function mul() {
//     if (arguments.length === 2) {
//         console.log(`Multiplication of ${arguments[0]} and ${arguments[1]} is: `,  arguments[0] * arguments[1]);
//     } else if (arguments.length === 3) {
//         console.log(`Multiplication of ${arguments[0]}, ${arguments[1]} and ${arguments[2]} is: `, arguments[0] * arguments[1] * arguments[2]);
//     } else if (arguments.length === 4) {
//         console.log(arguments[0] * arguments[1] * arguments[2] * arguments[3]);
//     } else {
//         console.log('Multiplication not possible');
//     }
// }

// mul(2, 4);
// mul(1);
// mul(3,5,7);
// mul(2,4,6,8);
// mul(1,3,4,5,5);

// function multi() {
//     let res = 1;
//     for (let i = 0; i <arguments.length; i++) {
//         res = res * arguments[i];
//     }
//     console.log("Multiplication result: ", res);
// }

// multi();
// multi(0);
// multi(3);
// multi(3,5);
// multi(7,5,8);