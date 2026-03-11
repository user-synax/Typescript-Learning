let UID: number | string = "1U2U3";

console.log(UID);

UID = 109203;

console.log(UID);

const GetUID = (UID: number | string): number | string => {
    return UID;
};

const gamerA = GetUID(1334232);
console.log(gamerA);
const gamerB = GetUID("8U9U5U47U");
console.log(gamerB);
