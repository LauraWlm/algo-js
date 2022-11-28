let length=Number(prompt("Donnez une longueur au rectangle"));
let width=Number(prompt("Donnez une largeur au rectangle"));

let surfaceCalc = (length, width) => {
    return length * width;
}

console.log(surfaceCalc(length, width));

/*c'est une fonction calcSurfacequi prend la longueur et la largeur d'un rectangle et renvoie sa surface. Le programme  demande la longueur et la largeur d'un rectangle à l'utilisateur puis affiche la surface de ce rectangle. */s