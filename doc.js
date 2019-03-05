var age = 25;
console.log("my age: ", age);
console.log("age has type: ", typeof age);

var name = "Dionis";
console.log("my name: ", name);
console.log("name has type: ", typeof name);

var married = false;
console.log("I am married: ", false);
console.log("married has type: ", typeof false);

var x;
console.log("x value: ", x);
console.log("x has type: ", typeof x);

var y = null;
console.log("y value: ", y);
console.log("y has type: ", typeof y);

var person = {
  name: "Dionis",
  age: "25",
  married: "false",
};
console.log("person value: ", person);
console.log("person has type: ", typeof person);

var myCurrentAge = [25, "Man", true];
console.log("myCurrentAge value: ", myCurrentAge);
console.log("myCurrentAge has type: ", typeof myCurrentAge);

var myAge = 25;

if (myAge >= 25) {
  console.log("I am over 25 years old");
} else if (myAge <= 24) {
  console.log("I am under 25 years old");
}