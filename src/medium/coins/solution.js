function splitter(amount) {
    let coin100 = 0
    let coin25 = 0
    let coin10 = 0
    let coin5 = 0
    let coin1 = 0

    const startingAmount = amount

    while (amount / 100 >= 1) {
        coin100++
        amount -= 100
    }
    while (amount / 25 >= 1) {
        coin25++
        amount -= 25
    }
    while (amount / 10 >= 1) {
        coin10++
        amount -= 10
    }
    while (amount / 5 >= 1) {
        coin5++
        amount -= 5
    }
    while (amount / 1 >= 1) {
        coin1++
        amount -= 1
    }

    let message =''

    if (coin100 > 0) {
        message = message.concat(coin100 + " * 100")
    }
    console.log(message);
    
    if (coin25 > 0) {
        message = message.concat(", ",`${coin25} * 25`)
    }

    if (coin10 > 0) {
        message = message.concat(", ",`${coin10} * 10`)
    }

    if (coin5 > 0) {
        message = message.concat(", ",`${coin5} * 5`)
    }

    if (coin1 > 0) {
        message = message.concat(", ",`${coin1} * 1`)
    }



    console.log(`(${startingAmount}) => ${message}`);
}

// figuring out how to not print (,) when it's the first coin accurance 
// function coma(message) {
//     console.log(); message[message.length-1]
// }

splitter(57)