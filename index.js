// Write your solution in this file!

// declare customerName to be bob in global scope
// ✓ returns the customerName

customerName = "bob";
const leastFavoriteCustomer = 'bab';


// upperCaseCustomerName()
// ✓ modifies the customerName variable
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}


// setBestCustomer()
// ✓ setBestCustomer
function setBestCustomer(){
    bestCustomer = "not bob";
}



// overwriteBestCustomer()
// ✓ overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}


// changeLeastFavoriteCustomer()
// ✓ unsuccessfully tries to reassign the least favorite customer
// need to add a const above of the leastFavCust
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bib';
}