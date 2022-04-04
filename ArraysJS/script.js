//Oque são vetores ou arrays

//Como declarar um array

//---------------------------------------------

//   let array = [
//       "String",
//       1,
//       true
//    ]  
//    console.log(array);

//Pode guardar vários tipos de dados

//----------------------------------------------------

/*
let array = [
    "string",
    1,
    true,
    array2 = [
        "string2",
        2,
        false,
        array3 = [
            "string3",
            3,
            true
        ]
    ],
    array4 = [
        "string4",
        false,
        10
    ]
];

console.log(array3);
*/




//----------------------------------------------------------------------------------------
//let array = ['string', 1, true, ['array1'], ['array3'], ['array3'], ['array4']];
//----------------------------------------------------------------------------------------





//console.log(array[3]);

//forEach(Retorna os Índices)

//---------------------------------------------------------------

//array.forEach(function(item, index){console.log(item, index)});



//Push(Imprime um novo item no final do Console)

//---------------------------------------------------------------


//array.push('Novo item');
//console.log(array);

//Pop(Remove um item do final do array)

//---------------------------------------------------------------

//array.pop();
//console.log(array);


//Shift(Remove um item do começo do array)

//---------------------------------------------------------------

//array.shift();
//console.log(array);


//Unshift(Adiciona um item no começo no array);

//---------------------------------------------------------------

//array.unshift("New string");
//console.log(array);


//IndexOf(Retorna o índice de um valor);

//---------------------------------------------------------------

//console.log(array.indexOf(true));


//Splice(Remove ou substitui um item pelo índice);

//---------------------------------------------------------------

//array.splice(0, 3)
//console.log(array);


//Slice(Retorna uma parte de um array existente);

//---------------------------------------------------------------

//let novoArray = array.slice(0, 3)
//console.log(novoArray);

//---------------------------------------------------------------------



//OBJETOS EM JS(Desestruturação)

/*
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objetoInterno: {objectInterno: "objetoInterno"}, }

console.log(object.boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, number, boolean, objetoInterno } = object;
console.log( string, number, boolean, objetoInterno );
*/

let array = [
    "string",
    52,
    true
]