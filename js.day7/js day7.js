let user={
    name: "hrisheekesh",
    address:{
        city:"delhi",
        country:"India",
    },
    mobile_no:"9821719552",
    favcolor:["black","white","black"],
    demo:function(){
        return "return function"
    }
}
console.log(user.fullname,user.mobile_no,user.address,user.demo());

console.log("my name is"+user.fullname+".my fav colour is"+user.favcolor[0]);

// string literal
console.log(`my name is ${user.fullname}.My fav colour is ${user.favcolor[0]}`);
//object.keys(variable name)
console.log(Object.keys(user));

//object.values(variable name)
console.log(Object.values(user));

//console.log(object.entries(user));

const car={
    brand:"ford",
    model:"mustang",
};
//
//object.freeze(car); //we can't add a new key and value pair and we can't  chnage or update the existing value.

Object.seal(car); //we can't add a new key and value pair but we can change or update the existing value.

car.model="ford mustang gt";
car.color="red";
console.log(car);
//object methods 
//object.keys (variable name)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const car = {
    Brand:"Mercedes",
    model:"S-Class"
};
Object.freeze(car);
Object.seal(car);
car.Brand="BMW";
car.model="M6.Comp";
car.color = "Z-Black";
console.log(car)