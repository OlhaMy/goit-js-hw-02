
 function getShippingCost(country) {
    let prise = 0;
    const normalizedCountry = country.toLowerCase();

    switch(normalizedCountry) {
        case 'china':
            prise = 100;
            break;

        case 'chile':
        prise = 250;
        break;

        case 'australia':
            prise = 170;
            break;

        case 'jamaica':
            prise = 120;
            break;

        default:
            return "Sorry, there is no delivery to your country"
    }
    return `Shipping to ${country} will cost ${prise} credits`;
 }

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));