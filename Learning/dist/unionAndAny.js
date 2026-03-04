"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "10M"; // Subs can be number or string
// Custom Unions
let apiRequest = "Pending";
apiRequest = "Success";
let airlineSeat = "middle";
airlineSeat = "window";
const orders = ["10", "20", "12", "42", "28"];
let currentOrder;
for (let order in orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
// Any 
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);
//# sourceMappingURL=unionAndAny.js.map