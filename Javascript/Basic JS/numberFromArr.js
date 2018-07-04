function numArr(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number"){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
myArr = ["abc", 12, 23.5, "orange"];
numArr(myArr);
console.log(myArr);

function removedArr(arr){
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number"){
            arr.splice(i,1);
        }
    }
    return arr;
}
var toShow = removedArr(myArr);
console.log(toShow);