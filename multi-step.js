/**
 * Multi-Level Condition
 */

// const price = 4000;

// if (price >= 5000) {
//     // 10% Discount
//     const discountAmount = price * 10 / 100;
//     const payAmount = price - discountAmount;
//     console.log (payAmount);
// }

// else if(price >= 2500) {
//     // 5% Discount
//     const discountAmount = price * 5 / 100;
//     const payAmount = price - discountAmount;
//     console.log (payAmount);
// }

// else { 
//     console.log (price);
// }

var age  = 55;
var foodPrice = 500;

if (age <= 10) {
    console.log ('Enjoy Free Food !')
}

else if (age >= 50) {
    // 25% discount
    const discount = foodPrice * 25 / 100;
    const payAmount = foodPrice - discount;
    console.log (payAmount);
}

else if (age >= 60) {
    // 50% discount
    const discount = foodPrice * 50 / 100;
    const payAmount = foodPrice - discount;
    console.log (payAmount);
}

else {
    console.log (foodPrice);
}