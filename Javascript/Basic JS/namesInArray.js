var person = ["James", "Jill", "Jane", "Jack"];

for (var i = 0; i < person.length; i++){
    console.log(i + " --> " + person[i]);
}

function printName(names,seperator){
    for (var i = 0; i < names.length; i++){
        console.log(i + " " + seperator + " " + names[i]);
    }
}

function reversedName(names,seperator,reversed){
    if (reversed){
        for (var i = 0; i < names.length; i++){
            console.log(i + " " + seperator + " " + names[names.length - 1 - i]);
        }
    }
}

printName(person,"**");
reversedName(person,"^_^",false)
