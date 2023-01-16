const palla = {
    "colore": ['red', 'blue'],
    tipo: 'pallina da golf',
    'chiave': 3
};

console.log('palla', palla, typeof palla);

console.log('Chiave palla:', palla.chiave, typeof palla.chiave);
console.log('Chiave palla:', palla['chiave'], typeof palla['chiave']);

console.log('Tipo di palla:', palla.tipo, typeof palla.tipo);
console.log('Tipo di palla:', palla['tipo'], typeof palla['tipo']);

console.log('Colore palla:', palla.colore, typeof palla.colore);
console.log('Colore palla:', palla['colore'], typeof palla['colore']);

console.log(palla.colore[1]);
console.log(palla['colore'][1]);

// palla.['chiave'] = 5;       // Questa riga qui, modifica il valore della chiave "chiave"
palla.chiave = 5;       // Questa riga qui, modifica il valore della chiave "chiave"
palla.chiave += 4;       // Questa riga qui, modifica il valore della chiave "chiave"
// palla.peso = 7;      // Questa riga qui, invece, crea una nuova chiave chiamata "peso" e la inizializza al valore 7
palla['peso'] = 7;      // Questa riga qui, invece, crea una nuova chiave chiamata "peso" e la inizializza al valore 7

console.log('palla', palla);


const key = 'colore';

console.log(palla.key);     // undefined
console.log(palla[key]);    // ['red', 'blue']









const person = {

    firstName: 'Alberto',
    lastName: 'Giardina',
    age: 28

};
const personTwo = {

    firstName: 'Roberto',
    lastName: 'Larivera',
    age: 24

};
const personThree = {

    firstName: 'Leonid',
    lastName: 'Vilcu',
    age: 26

};


//for..in
for (let chiave in person) {

    console.log('CHIAVE', chiave, typeof chiave);
    // console.log('VALORE', person.chiave, typeof person.chiave); // undefined, undefined
    console.log('VALORE', person[chiave], typeof person[chiave]); // Qui mi stamperà tutti i valori delle mie chiavi

}

for (let gatto in personTwo) {

    console.log('CHIAVE', gatto, typeof gatto);
    console.log('VALORE', personTwo[gatto], typeof personTwo[gatto]); // Qui mi stamperà tutti i valori delle mie chiavi

}

const people = [];

people.push(person);
people.push(personTwo);
people.push(personThree);

console.log(people);

// STAMPA TUTTE LE PROPRIETà DI TUTTI GLI OGGETTI CONTENUTI IN PEOPLE
for (let i = 0; i < people.length; i++) {

    console.log('PERSONA ' + i);

    for (let key in people[i]){
        console.log('-', key, people[i][key]);
    }

    console.log('----------------------------------');

}


const classes = [
    {
        className: 'Classe 84',
        students: ['Aricò', 'Atlassi', 'Altro']
    },
    {
        className: 'Classe 85',
        students: ['Abc', 'Bcd', 'Cde']
    },
    {
        className: 'Classe 202',
        students: []
    }
];

console.log(classes[0], classes[0].className, classes[0].students.length);








const mainDom = document.querySelector('main');

console.log('mainDom', mainDom, typeof mainDom);
console.log(mainDom.innerHTML);







//     //       0  1  2  3  4
// const arr = [1, 2, 3, 4, 5];

// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);    // arr[0], arr[1], arr[2]...
// }








