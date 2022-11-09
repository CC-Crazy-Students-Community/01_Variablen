"use strict";

/***** Variablen 01 *****/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// console.log("Hallo");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *****/
//let firstName;                                              // Deklaration (Definition)
//firstName = "Max";                                          // Wertzuweisung
//console.log(firstName);                                     // Ausgabe (Max)

//let lastName = "Mustermann";                                // Deklaration und Wertzuweisung
//console.log(lastName);                                      // Ausgabe (Mustermann)


/***** 03 Kombination von Variablen mit + und Leerzeichen in Stringform *****/
//console.log(firstName + " " + lastName);                    // Ausgabe (Max Mustermann)


/***** 04 Deklaration + Wertzuweisung II *****/
let firstName, lastName;                                    // Deklaration (Definition) mehrerer Variablen gleichzeitig
firstName = prompt("Wie ist dein Vorname?: ");              // Wertzuweisung per Usereingabe
lastName = prompt("Wie ist dein Nachname?: ");              // Wertzuweisung
console.log("Danke, " + firstName + " " + lastName);        // Ausgabe (Max Mustermann)
