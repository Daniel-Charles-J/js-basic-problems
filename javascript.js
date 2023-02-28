//convert the array into object with count
let array1 = ["a","b","c", "d", "a","z"];
let obj = {};
array1.forEach((x,i)=>{
    obj[x] = obj[x] === undefined ? 1 :obj[x]+1;
});
//console.log(obj)

//reverse the array
let arr =[];
    let sx = array1.length-1;
    array1.forEach((x)=>{
        arr[sx] = x;
        sx--;
    })
//console.log(arr);

//sorting the given array
array2 = [1,4,3,2,98,22];
sortedArray = [];
let temp;
for(let i=0; i<array2.length-1; i++){

    for(let j=0; j<array2.length-1; j++){

        if(array2[j] < array2[j+1]){
            temp = array2[j];
            array2[j] = array2[j+1];
            array2[j+1] = temp;
        }
    }
}
//console.log(array2)

//filter the negative values
array3 = [-1,-2,-2,-3,1,2,3,4];
let filteredArray = array3.filter((x) => {
    if(x<0){
        return x;
    }
});
//console.log(filteredArray);

//join method will convert the array into string but it won't change the original array
let array4 = ["apple", "orange", "pomogranate", "foods"]
// console.log(array4.join(" and"));
// console.log(array4)

for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
       //console.log(i);
   }, 300);
  }
const run = () =>{
    console.log("helo");
}

  //setInterval(run,1000)


string1 = 'Daniel is the first name of Daniel charles';
//console.log(string1.split("Daniel").length-1);


//Hash maps
//if we use same key, the latest key will replace the old key and value, just like index of array.

let hashMap = new Map();
hashMap.set(1,"apple");
hashMap.set(2,"orange");
hashMap.set(3, true);
hashMap.set(4, 99);

// for(x of hashMap){
//     console.log(x);
// }
// for(x of hashMap.keys()){
//     console.log(x);
// }

// for(x of hashMap.values()){
//     console.log(x);
// }

//To delete the particular key value
//hashMap.delete(4);

//To Clear the whole hash map => hashMap.Clear()
//console.log(hashMap);

let map = new Map();
map.set(1,"apple");
console.log(map);

const addingMap = (key, value) =>{
    map[key] = value;
}
addingMap(2,"orange");
//console.log(map);


//Reverse the integer
let number = 123;
let result = 0;

while(number > 0){
    let x = number % 10;
    result = result * 10 + x;
    number = Math.floor(number/10);
}
//console.log("Reversed number is : " + result)

//sum of the integer
let num = 123;
let sum = 0;
while(num > 0){
    a = num % 10;
    sum = sum + a;
    num = Math.floor(num / 10);
};
//console.log(sum);

//Factorial of the given number
let g = 5;
let fact = 1;
for(i = 1; i<= g ; i++){
    fact = fact * i;
}
//console.log(Math.floor(fact));

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student.key);

  