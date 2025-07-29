/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let childrenAge = 8;
let isStudent = false;
let SeniorCitizen = 54;

if (childrenAge < 10) {
    console.log ('Ticket is Free !');

    if (isStudent === true) {
        // 50% Discount
        const discountPrice = ticketPrice * 50 / 100;
        const afterDiscount =  discountPrice;
        console.log (afterDiscount);
    }

    else if (SeniorCitizen >= 60) {
        // 15% Discount
        const discountPrice = ticketPrice * 15 / 100;
        const afterDiscount = discountPrice;
        console.log (afterDiscount);
    }
}

else {
    console.log (ticketPrice);
}