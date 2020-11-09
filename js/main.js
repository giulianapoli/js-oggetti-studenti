// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  'name': 'Giulia',
  'surname': 'Napoli',
  'age': '24'
};

for (var key in studente) {
document.getElementById('myObject').innerHTML +=
 "L'oggetto contiene alla chiave "+key+" il valore "+studente[key]+". ";
};

// Creare un array di oggetti di studenti.

var studenti =
[
  {
      'name': 'Harry',
      'surname': 'Potter',
  },
  {
      'name': 'Hermione',
      'surname': 'Granger'
  },
  {
      'name': 'Ronald',
      'surname': 'Weasley'
  }
];
// console.log(studenti[0]);

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var inputUser0 = prompt("Inserisci un nome");
var inputUser1 = prompt("Inserisci un cognome");

var userChoices = {
  'name': inputUser0,
  'surname': inputUser1
};
// console.log(userChoices);

studenti.push(userChoices);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

for (var i = 0; i < studenti.length; i++) {
  var currentStudent = studenti[i];

  document.getElementById("myObject1").innerHTML += currentStudent["name"]+" "+currentStudent["surname"]+" ";
};
