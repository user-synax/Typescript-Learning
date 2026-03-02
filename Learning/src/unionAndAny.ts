let subs: number | string = "10M"; // Subs can be number or string

// Custom Unions

let apiRequest: "Pending" | "Success" | "Error" = "Pending";
apiRequest = "Success";

let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "window";

const orders = ["10", "20", "12", "42", "28"];
let currentOrder: string | undefined;

for (let order in orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);