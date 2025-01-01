var arr1 = [10,11,13,14,15];
var newArr = arr1.filter((ele)=>(ele%2===0));
// var newArr = arr1.filter(function(ele){
//     if(ele%2 === 0) {
//         return ele;
//     }
// })

console.log('Original', arr1);
console.log('Even array', newArr);


//array.map(function(ele){})
array = [1,2,3,4,5,6];
var sqr_arr = array.map((ele)=>ele*ele);
// var sqr_arr = array.map(function(ele){
//     return ele * ele;
// }) 

console.log('orginal array'. array);
console.log('squared array', sqr_arr);


var array = [1,2,3,4];
// var sum = array.reduce((acc, ele) => acc + ele, 0);

var pro = array.reduce((acc, ele) => acc * ele, 0);
console.log('Product of array', pro);
