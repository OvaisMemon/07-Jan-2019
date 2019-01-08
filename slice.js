// slice() can copy the selected elements from one array and puts them into another arrary, leaving the old array unchanged.
// But you can also assign into the old array.

var cities = ["KHI","LHR","ISB","MUX"];

var cities_newArray = cities.slice(2,4);


console.log(cities_newArray);