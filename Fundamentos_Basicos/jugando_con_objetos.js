var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[1].age);
console.log(users[0].name);
//---------------------------------
for (let i in users) {
    console.log(users[i].name +"--->"+ users[i].age);
}

//---------------------------------
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name +"--->"+ users[i].age);
    
}
//---------------------------------------
for (let i in users) {
   if (users[i].age>18) {
       console.log(users[i].name);
   }
}
