/*
//Estraturas condicionais - Decisões

//----------------------------------------------------


var jogador1 = 0;
var jogador2 = 0;
var placar;

//if(jogador1 != -1){

//}


//IF ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores Inválidos");
   
    //Usando IF
    if(jogador1 > 0 && jogador2 == 0){
        console.log("Jogador1 marcou um ponto");
        placar = jogador1 > jogador2;

    //Usando IF, ELSE    
    } else if(jogador2> 0 && jogador1 == 0 ){
        console.log("Jogador2 marcou um ponto");
        placar = jogador2 > jogador1;

    }

    //Usando ELSE
    else{
        console.log("Ninguém marcou nada");
    }



//ESTRUTURA DE DECISÃO "SWITCH/CASE"



switch (placar) {
    case placar = jogador1 > jogador2:
    console.log("Jogador1 ganhou")
    break;
    case placar = jogador2 > jogador1:
        console.log("Jogador1 ganhou")
        break;
    default:
        console.log("Nobody won");
}
*/


//-----------------------------------------------------------


//LAÇOS DE REPETIÇÃO(São estruturas que repetem-se até que uma condição seja cumprida)

let array = [
    "valor1",
    "valor2",
    "valor3",
    "valor4",
    "valor5"
]

let objetos = {
    propriedade1: "valor1",
    propriedade2: "valor2",
    propriedade3: "valor3"
}

//O "FOR" executa uma instrução até que ela seja falsa;
//for (let indice = 0; indice < array.length; indice++){
  //  console.log(indice);
//}

//O "FOR/IN" executa repetição a partir de uma propriedade;
//Com array..... Especificação de cores:  Azul: Número; Branco: String

//for (let i in array) {
//  console.log(i);
//}

//Com objetos

//for(i in objetos) {
  //  console.log(i)
//}


//"For"/"Of" executa a repeticão a partir de um valor
//Com Array

//for (i of array) {
//    console.log(i);
//}

//Com objetos

//for (i of objetos.propriedade1) {
  //  console.log(i);
//}


//USANDO WHILE

var a = 0;
while(a) {
    a++;
    console.log(a)
}

do {
    a++
    console.log(a);
}while(a < 10)