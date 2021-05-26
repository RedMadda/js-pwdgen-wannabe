
var nome = prompt("Buongiorno! Inserisci il tuo nome.");
var cognome = prompt("Bene! Ora inserisci il tuo cognome.");
var colore =  prompt("Bene! Ora, inserisci il tuo colore preferito");
var passWord = nome + cognome + colore;
document.getElementById("password").innerHTML = "La tua password &egrave;:&nbsp;" + "<br/>" + passWord.toLowerCase();