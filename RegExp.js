function validateCreditCard(cardNumber) {
    // Remove non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');
    
    // Define regex patterns for different card types
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,  // Starts with 4, length 13 or 16
        MasterCard: /^5[1-5][0-9]{14}$/,    // Starts with 51-55, length 16
        AmericanExpress: /^3[47][0-9]{13}$/, // Starts with 34 or 37, length 15
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/, // Starts with 6011 or 65, length 16
        
    };

    // Check the card type and validate
    for (let card in cardPatterns) {
        if (cardPatterns[card].test(cardNumber)) {
            return `Valid ${card} card number`;
        }
    }

    return "Invalid card number";
}

// Example usage
console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5500000000000004")); // MasterCard
console.log(validateCreditCard("340000000000009")); // American Express
console.log(validateCreditCard("6011000000000004")); // Discover




