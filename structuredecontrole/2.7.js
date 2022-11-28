let n = Number(prompt("Donne moi un chiffre"));
let sum = 0;

for (let i=0; i<n; i++){
    
    let x = Number(prompt("Donne moi un autre chiffre"));

    sum+=x;
}

alert(sum);