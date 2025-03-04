
function inchesToFeet(inches) {
    return inches / 12;
}

let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

// b. Convert feet to meters (1 foot = 0.3048 meters)
function feetToMeters(feet) {
    return feet * 0.3048;
}

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);
console.log(`Rectangular Plot: ${lengthFeet} ft x ${widthFeet} ft = ${lengthMeters.toFixed(2)} m x ${widthMeters.toFixed(2)} m`);

// c. Calculate area of 25 plots in acres (1 acre = 4046.86 m²)
let singlePlotAreaMeters = lengthMeters * widthMeters;
let totalAreaMeters = singlePlotAreaMeters * 25;
let totalAreaAcres = totalAreaMeters / 4046.86;
console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(2)} acres`);
