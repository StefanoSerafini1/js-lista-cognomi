//Chiedere all'utente il cognome inserirlo in un array con altri cognomi
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


//richiesta cognome e controllo con ciclo while se inserito qualcosa
var cognome = prompt('Qual è il tuo cognome?');
console.log(cognome);

while (cognome.length <=0){
  cognome = prompt('Qual è il tuo cognome?');
}
//array lista dei cognomi
var lista = ['Rossi', 'Bianchi', 'Duzioni', 'Balsano', 'Serafini'];
console.log(lista);

lista.push(cognome); //inserire cognome in coda al array
lista.sort();//funzione sort per ordinare in ordine alfabetico

console.log(lista);
//ciclo for per stampa della lista
for (var i = 0; i < lista.length; i++) {
  document.getElementById('listacognomi').innerHTML +=('<li>' + lista[i] + '</li>');
}

var index=lista.indexOf(cognome);
document.getElementById('indexcognome').innerHTML =cognome + ' ' + index;
console.log(lista.indexOf(cognome) + ' posizione del cognome inserito nella lista');
