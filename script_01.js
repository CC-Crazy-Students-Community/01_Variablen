"use strict";

/*****************************************************/
/*********             VARIABLEN             *********/
/*****************************************************/

/** 
 * 
 *  Block-Kommentar
 * 
*/
// einfaches Kommentar

    console.log("Hallo");
    console.log(firstName);                                      // Fehler, weil Variable noch nicht deklariert ist

/*****************************************************/
/*********   Deklaration + Wertzuweisung I   *********/
/*****************************************************/
    let firstName1;                                            // Deklaration (Definition)
    firstName1 = "Max";                                        // Wertzuweisung
    console.log( firstName1 );                                 // Ausgabe (Max)

    let lastName1 = "Mustermann";                              // Deklaration und Wertzuweisung
    console.log( lastName1 );                                  // Ausgabe (Mustermann)

/*****************************************************/
/***********   Kombination von Variablen   ***********/
/***********   und Strings mit + vereint   ***********/
/*****************************************************/
    console.log( firstName1 + " " + lastName1 );                // Ausgabe (Max Mustermann)


/******************************************************/
/*********   Deklaration + Wertzuweisung II   *********/
/******************************************************/
    let firstName2, lastName2;                                  // Deklaration (Definition) mehrerer Variablen gleichzeitig
    firstName2 = prompt( "Wie ist dein Vorname?: " );           // Wertzuweisung per Usereingabe
    lastName2 = prompt( "Wie ist dein Nachname?: " );           // Wertzuweisung
    console.log( "Danke, " + firstName2 + " " + lastName2 );    // Ausgabe (Max Mustermann)

/* Javascript ist eine untypisierte Sprache  |  untyped */
    let test;                                                   // Deklaration (Definition)
    test = "Hi";                                                // überschreibe Deklaration mit String
    test = 2;                                                   // überschreibe Deklaration mit Integerwert
    test = true;                                                // überschreibe Deklaration mit Boolschem Wert

    console.log( test );                                        // Ausgabe (true)
    console.log( "Datentyp: " + typeof test );                  // Ausgabe des Datentyps (Datentyp: boolean)

/******************************************************/
/*********             Konstanten             *********/
/******************************************************/
/* Falsche Deklaration einer Konstante  |  Kann nicht verändert werden, da es Konstant sein muss */
    const test1 = "Hi";                                         // Deklaration Konstante
    test1 = "Hallo";                                            // überschreibe Konstante (ergibt Fehler)
    console.log( test1 );                                       // Ausgabe (Uncaught TypeError: Assignment to constant variable.)

/* Falsche Deklaration einer Konstante  |  Kann nicht nachträglich geändert werden, muss also sofort zugewiesen werden */
    const test2;                                                // Deklaration Konstante
    test2 = "Hi";                                               // Wertzuweisung Konstante (ergibt Fehler)
    console.log( test2 );                                       // Ausgabe (Uncaught SyntaxError: Missing initializer in const declaration)

/* Richtige Deklaration einer Konstante */
    const test3 = "Hi";                                          // Deklaration Konstante
    console.log( test3 );                                        // Ausgabe (Hi)