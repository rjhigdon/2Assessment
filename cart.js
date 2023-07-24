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
/*

let priceArr = [] //declares an array to which all the values of cart.price can get pushed for reducing

function totalMaker (callback){
    const total = priceArr.reduce(function(acc, curr){
    return acc + curr
    return total  // this is really where the code falls apart, constructing the callback and figuring out how to get the values to return in the proper way. I tried tweaking this numerous ways from the moving and removing of 'return total'. all different ways of typing out the .reduce portion, and the const totalMaker part... and I cannot figure out the combo of things to get the return. where im slightly typoing or if it's rotten from the ground up is beyond me at this point
})
}



function arrMaker(arr){ //i believe this part is correct. I know it returns what i need it to by console.logging priceArr, but maybe i have it structured in a way that doesnt allow totalMaker to access it properly.. idk
    for(i = 0; i < arr.length; i++){
        priceArr.push(arr[i].price)
        return priceArr
    }
}

arrMaker(cart)//I believe this is supposed to be where i initially pass a value to the arrMaker fucntion but maybe this is supposed to have the totalMaker function here and it passes the inof diffrently than I am thinking it dies... once again, idk
totalMaker(arrMaker) 
console.log(totalMaker())

*/

// My ability to write callback funtions is still too shaky to be able to get this right. I am getting lost in trying to keep track of which function should be calling back the other one. I know that the latter potrion pushing the values of car.price to priceArr works by console logging priceArr's value but i can't figure out how to get the proper functions to callback the right one and and how to then get them to perform the .reducce function

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
/*
const calcFinalPrice = (price, coupon, tax) =>{ 
    let finalPrice = price * (1 + tax) - coupon
    return finalPrice
}
    
calcFinalPrice(10000, 1000, 0.05)
console.log(finalPrice) //apparently I am rather silly and cannot for the life of me figure out how to console.log this in order to check my results.... which leads me to believe i did this wrong

*/
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
I would ask them a phone # (number) to contact them about their order, email to offer promotions and deals (string), name for their order to be properly assigned (string), address for it to be properly delivered (string)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer{
    constructor( name, phone, email, address){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
}
    }

let customer1 = new Customer('RJ Higdon', 1234567890, 'rjsemail@Service.com', '4321 Private Ave')
console.log(customer1)

//did it by making a class customer for practice and for easily adding more customers which is likely the restaraunt will need to do
