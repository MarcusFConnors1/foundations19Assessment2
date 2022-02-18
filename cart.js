///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.map(function(ele){
    return ele.price
}).reduce(function(x, y){
    return x + y
})
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = function(cartTotal, couponValue, tax){
    let taxTotal = (cartTotal * (1 + tax))
    let total = (taxTotal - couponValue)
    return console.log(total)
}
calcFinalPrice(20, 10, .01)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    ***I'm just a tad confused here, are we making a customer for a restaurant or market? You don't really bring a cart to a restaurant so I'm just going to assume it's a customer that is heading to a restaurant w/out a cart :P
    moneyToSpend - Number: Got to make sure that the customer has options that fit their budget
    wantsDrink - Boolean: Seeing if customer would like a drink
    allergies - Boolean: Pretty self explanatory, want to make sure our customer doesn't die
    vegetarian - Boolean: As much as we joke about vegetarians telling everyone they're vegetarian, should still make sure if the customer is vegetarian or not

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    moneyToSpend: 30,
    wantsDrink: true,
    alergies: false,
    vegetarian: false
}
console.log(customer)