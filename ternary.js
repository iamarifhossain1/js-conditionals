/**
 * Ternary --- Three Parts
 */

const age = 12;

if (age >= 18) {
    console.log ('You can vote');
}

 else { 
    console.log ('You cant vote');
 }

age >= 18 ? console.log ('Vote Dao') : console.log ('Vote Dite Parba Nah');


let price = 1000;
const isLeader = true;

if (isLeader === true) {
    const fullDiscount = 500 - 0;
    const payAmount = price - fullDiscount;
    console.log (payAmount);
}

else { 
    price = price + 100;
    console.log (price);
}

if (isLeader === true) {
    if (price >= 1000) {
        price = price / 2;
    }

    else {
        price = 0;
    }
}

else { 
    price = price + 100;
}

console.log (price);

// price = isLeader === true ? price >= 1000 ? price / 2 : 0 : price + 1500;
// console.log (price);



