/*


    Descrizione:
    1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
    2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
    4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
    5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.


*/

// PUNTO 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    nome: 'Luca',
    cognome: 'Dal Rì',
    eta: 25
};

console.log(student);

// PUNTO 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in student) {

    console.log(key + ':', student[key]);

}

// PUNTO 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
const students = [
    {
        nome: 'Luca',
        cognome: 'Dal Rì',
        eta: 25
    },
    {
        nome: 'Darius',
        cognome: 'Ciuban',
        eta: 28
    },
    {
        nome: 'Stefania',
        cognome: 'Aveta',
        eta: 30
    }
];

console.log(students);

// PUNTO 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
for (let i = 0; i < students.length; i++) {

    // console.log('Studente ' + (i + 1) + ':');
    console.log(students[i].nome, students[i].cognome);

}

// PUNTO 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza,
// un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
const newFirstName = prompt('Inserisci un nome');
const newLastName = prompt('Inserisci un cognome');
const newAge = parseInt(prompt('Inserisci un\'età'));

console.log(newFirstName);
console.log(newLastName);
console.log(newAge);

const newStudent = {
    nome: newFirstName,
    cognome: newLastName,
    eta: newAge,
};

students.push(newStudent);

const newStudentTwo = {};

newStudentTwo.nome = newFirstName;
newStudentTwo.cognome = newLastName;
newStudentTwo.eta = newAge;

students.push(newStudentTwo);

students.push({
    nome: newFirstName,
    cognome: newLastName,
    eta: newAge,
});

console.log(students);