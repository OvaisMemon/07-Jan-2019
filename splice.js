// splice() can add or remove elements at any position in the array.

var cities = ["KHI","LHR","ISB","MUX"];


// This will add "RWP" at index no. 2 and remove the first element after index no. 2
//cities.splice(2,1,"RWP");

// This will add "RWP" and "HYD" at index no. 2 and 3 but does not remove any element.
//cities.splice(2,0,"RWP","HYD");

// This will not add anything at index no. 2, since nothing is specified to add. Also does not remove any element.
//cities.splice(2,0);


// This will not add anything at index no. 2, since nothing is specified to add. But will remove first element after index no 2.
cities.splice(2,1);


console.log(cities);