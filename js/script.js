 
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi
//  il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Bonus: chi vuole può cercare funzioni per trasformare in minuscolo tutta
//  la password generata, nel caso in cui ad esempio  l'utente scriva il proprio
//   nome, cognome e/o colore in stampatello o misto (pIPPO o PIPPO, ecc..

// nome
var nome = prompt("Buongiorno! Inserisci il tuo nome.");
var cognome = prompt("Bene! Ora inserisci il tuo cognome.");
var colore = prompt("Bene! Ora, inserisci il tuo colore preferito");

document.getElementById("password").innerHTML = "La tua password è:&nbsp;" + nome + cognome + colore;