//Chiedere all'utente il cognome inserirlo in un array con altri cognomi
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


//richiesta cognome e controllo con ciclo while se inserito qualcosa
var cognome = prompt('Qual è il tuo cognome?');
console.log(cognome);

while (cognome.length <=0){
  cognome = prompt('Qual è il tuo cognome?');
}
