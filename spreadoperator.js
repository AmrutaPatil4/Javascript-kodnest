const add = (...args)=>{
    let res = args.reduce((acc,ele)=>acc*ele,1);
    console.log('Result is: ', res);
}
add();
add(10, 20);
add(50,40,55);