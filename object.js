//Find the type, if type === object then print keys, values
const check = (obj) =>{
    if(isObject(obj)){
        console.log(Object.values(obj))
    }
}
const isObject = (obj) =>{
    var type = typeof(obj);
    type === "function" || type === "object" && !!obj;
    return type;
}

//check({name : "Daniel", RollNum : 2016301017, D_completed : true})

// To delete the particular data
var student = {
    name : "Daniel", RollNum : 2016301017, D_completed : true
}
delete student.D_completed;
console.log(student);

//Find the length of the object

const length = (obj) =>{
    let count = 0;
    let prop;
    for (prop in obj){

        if(obj.hasOwnProperty(prop)){
            count++;
        }
    }
    console.log(count);


}
length({name : "Daniel", RollNum : 2016301017, D_completed : true})

//convert the object in to array
function key_value_pairs(obj) 
   {
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    console.log(pairs);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

  function _keys(obj) 
  {
    if (Object.keys) return Object.keys(obj);
  }

console.log(key_value_pairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


