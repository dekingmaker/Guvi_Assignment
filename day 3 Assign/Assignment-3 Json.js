var info = [{
    "name": "Krishnamoorthy",
    "age":29,
    "email":"krishnaramiyer@gmail.com",
    "phno":8940075404,
    "city":"Coimbatore"

},
{
    "name": "Krishn Prakash",
    "age":23,
    "email":"krishnaprakash@gmail.com",
    "phno":8940075402,
    "city":"Coimbatore"
},
{
    "name": "Ram",
    "age":24,
    "email":"ramram@gmail.com",
    "phno":9443024007,
    "city":"Trichy"
}];
//FOR_LOOP
for(var i=0;i<info.length;i++){
    var temp=info[i];
    console.log(temp.name);
    console.log(temp.age);
    console.log(temp.email);
    console.log(temp.phno);
    console.log(temp.city);
}
//FOR_EACH LOOP
info.forEach(function(temp) {
    console.log(temp.name);
    console.log(temp.age);
    console.log(temp.email);
    console.log(temp.phno);
    console.log(temp.city);
});
//FOR_IN LOOP
for(var temp in info ){
    console.log(info[temp]);
}
//FOR_OFF LOOP
for(var temp of info){
    console.log(temp.name);
    console.log(temp.age);
    console.log(temp.email);
    console.log(temp.phno);
    console.log(temp.city);
}

