function sumTwoNumber(a: number, b: number): number {
    return a + b;
}

console.log(sumTwoNumber(5, 2));

function concatTwoStrings(a: string, b: string): string {
    return "" + a + b;
}

let a = concatTwoStrings("Helllo", "World");
console.log(a);
console.log(typeof a);

const squareWholeArray = (array: number[]) => {
    return array.map((arr) => arr * arr);
};

let b = squareWholeArray([1, 4, 2, 3, 4, 2, 8]);
console.log(b);

const smallestNumber = (array: number[]) => {
    return Math.min(...array);
};

let c = smallestNumber([1, 4, 2, 3, 4, 2, 8]);
console.log(c);

const greetUser = (name: string): string => {
    return `Hello, ${name}`;
};

console.log(greetUser("Ayush"));

const greetUserWithDefaultName = (name: string = "Guest"): string => {
    return `Hello, ${name}`;
};
console.log(greetUserWithDefaultName());
console.log(greetUserWithDefaultName("Ritika"));

const ThrowError = (message: string): void => {
    console.log(new Error(message));
};

ThrowError("Something Went Wrong")
