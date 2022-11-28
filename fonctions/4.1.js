let length=Number(prompt("Donnez une longueur au rectangle"));
let width=Number(prompt("Donnez une largeur au rectangle"));

let surfaceCalc = (length, width) => {
    return length * width;
}

console.log(surfaceCalc(length, width));