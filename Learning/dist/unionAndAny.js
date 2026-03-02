"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "10M"; // Subs can be number or string
// Custom Unions
let apiRequest = "Pending";
apiRequest = "Success";
let airlineSeat = "middle";
airlineSeat = "window";
const orders = ['10', '20', '12', '42', '28'];
let currentOrders;
for (let order in orders) {
    if (order == '28') {
        currentOrders = order;
        break;
    }
}
console.log(currentOrders);
//# sourceMappingURL=unionAndAny.js.map