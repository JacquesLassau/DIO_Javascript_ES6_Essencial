/* ################# CURRYING ################# */

function soma(a, b){
    return a + b;
}

soma(100, 3);
soma(100, 1);
soma(100, 7);

// Aplicação //

function soma(a){
    return function(b){
        return a + b;
    }
}

const armazenadaSomaA = soma(100);

armazenadaSomaA(3);
armazenadaSomaA(1);
armazenadaSomaA(7);


/* ################# HOISTING ################# */

// Aplicação em variável //

function fn(){
    console.log(texto);
    var texto = 'Exemplo';
    console.log(texto);
}

fn();

/* 

O que acontece na verdade com aplicação de Hoisting
quando o javascript é compilado

 function fn(){
    var texto;
    console.log(texto);
    texto = 'Exemplo';
    console.log(texto);
}  

fn();
*/

// Aplicação em função //

function fn(){
    console.log('Hoisting de função');
    
    function log(value){
        console.log(value);
    }    
}

fn();

/* 

O que acontece na verdade com aplicação de Hoisting
quando o javascript é compilado

 function fn(){
    function log(value){
        console.log(value);
    }

    console.log('Hoisting de função');    
}  

fn();
*/

/* ################# IMUTABILIDADE ################# */

// EXEMPLO 1 //

const user = {
    name: 'Jacques',
    lastName: 'Cheron'
};

function getUserWithFullName(user){
    return{
        // ECMA Script 2018 - Spread Operator
        ...user, 

        //fullName: `${user.name} ${user.lastName}`
        fullName: user.name + ' ' + user.lastName        
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

// EXEMPLO 2 //

const students = [
    {
        name: 'Jacques Cheron',
        grade: 8
    },
    {
        name: 'Luiz Eduardo',
        grade: 5
    },
    {
        name: 'Wanderley Marques',
        grade: 10
    },
    {
        name: 'Iza Nakamura',
        grade: 3
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de Alunos:');
console.log(students);

/* ################# VARIAVEIS ################# */

// EXEMPLO 1

var test = 'Example';

(() => {
    console.log(`Valor dentro da função: "${test}"`);

    if(true){
        var test = 'Example';
        console.log(`Valor dentro do IF: "${test}"`);
    }

    console.log(`Valor após a execução do IF: "${test}"`);
})();

/*
Valor dentro da função: "undefined"
Valor dentro do IF: "Example"
Valor após a execução do IF:: "Example"
*/

// EXEMPLO 2

(() => {
    let testLet = 'Valor da função';
    console.log(`Valor dentro da função: "${testLet}"`);

    if(true){
        let testLet = 'Valor do IF';
        console.log(`Valor dentro do IF: "${testLet}"`);
    }

    console.log(`Valor após a execução do IF: "${testLet}"`);
})();

/*
Valor dentro da função: "Valor da função"
Valor dentro do IF: "Valor do IF"
Valor após a execução do IF:: "Valor da função"
*/

// EXEMPLO 3

const nome = 'Jacques';

// NÃO podemos alterar o valor do tipo primitivo (Error)
nome = 'Guilherme';

const user = {
    nome: 'Jacques'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.nome = 'Júlia';

// NÃO podemos fazer o objeto apontar para outro lugar (Error)
user = {
    nome: 'Outro'
};

// Array de constantes
const pessoas = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar itens
pessoas.push('João');

// Podemos remover itens
pessoas.shift();

// Podemos alterar diretamente
pessoas[1] = 'James';

console.log('\nArray após as alterações: ', pessoas);