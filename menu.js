///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: "Pepperoni Pizza",
    price: 12.00,
    category: "Entree",
    popularity: 2,
    rating: 9,
    tags: ["Popular", "Best-Selling", "Pepperoni", "Kids"]
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const {price: price} = pizza;
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

const {category: category} = pizza;
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    pizza = {
        name: "Pepperoni Pizza",
        price: 12.00,
        category: "Entree",
        popularity: 2,
        rating: 9,
        tags: ["Popular", "Best-Selling", "Pepperoni", "Kids"]
    },
    spaghetti = {
        name: "Spaghetti",
        price: 15.00,
        category: "Entree",
        popularity: 5,
        rating: 8,
        tags: ["Popular", "Best-Selling", "Gluten", "Entree"]
    },
    iceCream = {
        name: "Ice Cream",
        price: 10.00,
        category: "Dessert",
        popularity: 6,
        rating: 7,
        tags: ["Popular", "Dessert", "Dairy", "Kids"]
    },
    breadsticks = {
        name: "Breadsticks",
        price: 3.00,
        category: "Appetizer",
        popularity: 7,
        rating: 7,
        tags: ["Popular", "Gluten", "Evil", "Kids"]
    }
]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(function(food){
    return food.tags.includes("Evil")
});
console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

// For the life of me I could not figure out how to do this with a filter method
// (I'm sorry I have spent three and a half hours on this dumb question and I'm 
// kinda burned out), but this function DOES work as intended, so I'm gonna take
// that as a win :)
const filterByProperty = function(property, number, type){
    let filteredArray = []
        if(type === "above"){
            for(i = 0; i < foodArr.length; i++){
                if(foodArr[i][property] > number){
                    filteredArray.push(foodArr[i])
                }
            }
        } else if(type === "below"){
            for(x = 0; i < foodArr.length; i++){
                if(foodArr[x][property] < number){
                    filteredArray.push(foodArr[x])
                }
            }
        }
    console.log(filteredArray)
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

filterByProperty('price', 10, "above")
