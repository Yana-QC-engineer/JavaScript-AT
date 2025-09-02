// Logical "AND"
console.log(true && true) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // all values should be TRUE for expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDrivingLicense = ageIsMoreThanEighteen
console.log('This customer is eligible for DL: ' + eligibilityForDrivingLicense)

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDrivingLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDrivingLicense)

// Logical "NOT"
// console.log(!true)
console.log(6 !== 10)