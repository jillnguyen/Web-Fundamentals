var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

for (var i = 0; i < students.length; i++){
    console.log(students[i].first_name + " " + students[i].last_name)
}

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}

for (var k in users){
    console.log(k);
    for (var j = 0; j < users[k].length; j++){
        var index = j+1;
        var stringLength = users[k][j]["first_name"].length + users[k][j]["last_name"].length;
        console.log(index + " - " + users[k][j]["first_name"] + users[k][j]["last_name"] + " - " + stringLength);
    }
}

