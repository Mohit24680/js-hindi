//  console.log("2">1);
//  console.log("02">1);

//  console.log(null>0);
//  console.log(null==0);
//  console.log(null>=0); 
// the reason is that equality checks (==)and comparisions (> < >= ) work differently.
// comparisions convert null to a number, treating it as 0. that's why null>=0 is true , while null>0 is false.

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0); 

console.log("2"===2);
/* Double equal: The double equal(‘==’) operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.*/

/* Triple equal: The triple equal(‘===’) operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.*/ 
