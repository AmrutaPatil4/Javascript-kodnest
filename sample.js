function addition(...args) {
    if(args.length === 2) {
        console.log(args[0] + args[1]); 
    }
    else if(args.length === 3) {
        console.log(args[0] + args[1] + args[2]);
    }
    else if(args.length === 1) {
        console.log(args[0]);
    }
    else {
        console.log('Invalid Input');
    }
}