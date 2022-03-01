
let userScelta = prompt('Scegli tra pari o dispari:');
console.log(userScelta);
let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5:'));
console.log(userNumber);


let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);


let somma = userNumber + randomNumber;
console.log(somma);

if (somma % 2 == 0 && userScelta == 'pari'){
    console.log('win')
} else if (somma % 2 == 1 && userScelta == 'dispari') {
    console.log('win');
} else {
    console.log('loose');
}



// if (userScelta == pari){
   
// } else {
//     console.log(loose)
// }

// if (userScelta == dispari){
//     console.log(win)
// } else {
//     console.log(loose)
// }
