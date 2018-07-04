function printRange(){
    if (arguments.length == 3){
        for (var i = arguments[0]; i<arguments[1]; i += arguments[2]){
            console.log(i);
        }
    } else if (arguments.length == 2){
        for (var i = arguments[0]; i< arguments[1]; i++){
            console.log(i);
        } 
    } else {
        for (var i = 0; i<arguments[0]; i++){
            console.log(i);
        }
    }    
}
printRange(5);
printRange(2,5);
printRange(-4,12,3);
