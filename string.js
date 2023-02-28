let string = "I am the king of the jungle but the jungle was not mine, but i will rule, king";
console.log(string.split("king").length-1);
let x = string.split(" ");
console.log(x.slice(1,4));

//Reverse the string
var name = "Daniel";
reversed = "";
console.log(name.length);
for(let i = name.length-1; i>=0; i--){
    reversed = reversed + name[i];
}
console.log(reversed);