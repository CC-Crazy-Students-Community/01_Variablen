"use strict";

/***** Variablen 01 *****/

/** 
 * 
 *  Block-Kommentar
 * 
*/
// einfaches Kommentar

// console.log("Hallo");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *****/
// let firstName;                                              // Deklaration (Definition)
// firstName = "Max";                                          // Wertzuweisung
// console.log( firstName );                                   // Ausgabe (Max)

// let lastName = "Mustermann";                                // Deklaration und Wertzuweisung
// console.log( lastName );                                    // Ausgabe (Mustermann)


/***** 02-a Kombination von Variablen mit + und Leerzeichen in Stringform *****/
// console.log( firstName + " " + lastName );                  // Ausgabe (Max Mustermann)


/***** 03 Deklaration + Wertzuweisung II *****/
// let firstName, lastName;                                    // Deklaration (Definition) mehrerer Variablen gleichzeitig
// firstName = prompt( "Wie ist dein Vorname?: " );            // Wertzuweisung per Usereingabe
// lastName = prompt( "Wie ist dein Nachname?: " );            // Wertzuweisung
// console.log( "Danke, " + firstName + " " + lastName );      // Ausgabe (Max Mustermann)


/* Javascript ist eine untypisierte Sprache  |  untyped */
// let test;                                                   // Deklaration (Definition)
// test = "Hi";                                                // überschreibe Deklaration mit String
// test = 2;                                                   // überschreibe Deklaration mit Integerwert
// test = true;                                                // überschreibe Deklaration mit Boolschem Wert

// console.log( test );                                        // Ausgabe (true)
// console.log( "Datentyp: " + typeof test );                  // Ausgabe des Datentyps (Datentyp: boolean)

/***** 03-a Konstanten *****/

/* Falsche Deklaration einer Konstante  |  Kann nicht verändert werden, da es Konstant sein muss */
// const test = "Hi";                                          // Deklaration Konstante
// test = "Hallo";                                             // überschreibe Konstante (ergibt Fehler)
// console.log( test );                                        // Ausgabe (Uncaught TypeError: Assignment to constant variable.)

/* Falsche Deklaration einer Konstante  |  Kann nicht nachträglich geändert werden, muss also sofort zugewiesen werden */
// const test;                                                 // Deklaration Konstante
// test = "Hi";                                                // Wertzuweisung Konstante (ergibt Fehler)
// console.log( test );                                        // Ausgabe (Uncaught SyntaxError: Missing initializer in const declaration)

/* Richtige Deklaration einer Konstante */
const test = "Hi";                                          // Deklaration Konstante
console.log( test );                                        // Ausgabe (Hi)