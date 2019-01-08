var cities = ['Karachi','Lahore','Multan'];
console.log(cities.pop());
console.log(cities.push('Islamabad','Faisalabad','Hyderabad'));

console.log(cities);

cities.shift();
console.log(cities);
cities.unshift("Peshawar");
console.log(cities);
// See the difference between push and unshift, pop and shift.

cities.splice(1,2,"Rawalpindi", "Quetta");
console.log(cities);
cities.splice(2,1);
console.log(cities);

//Slice Function - Copy elements
cities.slice(2,1);
console.log(cities);

var student = ['Ovais', 'abc@google.com', false, 5.10];
//console.log(student);

