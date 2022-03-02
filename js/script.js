
/*
let userScelta = prompt('Scegli tra pari o dispari:').toLowerCase();
console.log(userScelta);
let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5:'));
console.log(userNumber);

function numeroCasuale(){
    let ranNum = Math.floor(Math.random() * 5) + 1;
    return ranNum;
}


let randomNumber = numeroCasuale();
console.log(randomNumber);


let somma = userNumber + randomNumber;
console.log(somma);

function pariFunz(numb){
    let pariNumeri = numb % 2 == 0;
    return true;
} 

function dispariFunz(numb){
    let dispariNumeri = numb % 2 == 1;
    return true;
}

if (pariFunz(somma) && userScelta == 'pari'){
    console.log('win')
} else if (dispariFunz(somma) && userScelta == 'dispari') {
    console.log('win');
} else {
    console.log('loose');
}

*/

//PALINDROMO 

let checkInput = document.getElementById('check_word'); 
console.log(checkInput.value);
let userWord = checkInput.value;
console.log(userWord);
let outPutPalindromia = document.querySelector('.palindromia');
console.log(outPutPalindromia);
let outPutReverseWord = document.querySelector('.reverse_word');
console.log(outPutReverseWord)
let verificaBtn = document.getElementById('verifica_button');
console.log(verificaBtn);

function palindromoFunction(word){
    let reverseWord = '';
    outPutReverseWord.innerHTML += reverseWord;
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += word[i];
        console.log(reverseWord);
    }
    if (word == reverseWord){
        return true;
    } else {
        return false;
    }    
}

verificaBtn.addEventListener('click', palindromoFunction);

if (palindromoFunction(userWord)){
    outPutPalindromia.innerHTML += ' Palindroma';
    console.log(outPutPalindromia.innerHTML)
} else {
    outPutPalindromia.innerHTML += ' NON Palindroma';
    console.log(outPutPalindromia.innerHTML)
}

