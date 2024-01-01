function main () {
    // //read the input field
    const input = document.getElementById('input_field').value;
    // // convert to a string
    String(input);
    CheckInput(input)

}

function GenderIT(input) {

    // const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter", "Nutzer", "Studenten", "Mitarbeiter", "Programmierer"];
    // const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person", "Nutzende", "Studierende", "Mitarbeitende", "Fachkräfte mit Kompetenzen in der Software-Programmierung" ];
    const nongendered = ["Nutzer", "Studenten", "Programmierer", "Verbraucher", "Anwender", "Bediener", "Fachmänner", "Benutzername", "Benutzer", "Administrator", "Kundendienst", "Benutzerfehler", "Administratoren", "Verwalter", "Drittanbieter", "Drittanbietern", "Chef", "Fachmann", "Abonnent", "benutzerfreundlich", "Systembetreuer", "Spezialisten"];
    const gendered = ["Nutzende", "Studierende", "Fachkräfte mit Kompetenzen in der Software-Programmierung", "Verbrauchende", "anwendende Person", "bedienende Person", "Fachkräfte", "Login", "nutzende Person", "Admin" , "Support", "Anwendungsfehler", "Administrierende", "verwaltende Person", "Drittanbietende", "Drittanbietende", "Leitungsperson", "Fachkraft", "Bezugsperson", "bedienungsfreundlich", "Systembetreuung", "spezialisierte Person" ];


    //convert string into array
    const stringArray = input.split(" ");
    stringArray.forEach(e=>{ //für jedes einzelne Element e in meinem Array

        x = 0

        while ( x < nongendered.length){  //tue dies, solange x nicht kleiner ist als die Länge
           if (e == nongendered[x]) { //Wenn e
                const indexStringArray = stringArray.indexOf(e);
                stringArray[indexStringArray] = gendered[x];
                
                };
            x++
        };
    
    });
        
    //convert array back to string
    const finalString = stringArray.join(" ");
    console.log(finalString);
    document.getElementById('output_field').value = finalString;

};

function containsBadCharacters(input) {
    const badCharacters = ["<",">", "script"];
    for (var i = 0; i < badCharacters.length; i++) { 
        if (input.includes(badCharacters[i])) {
            return true;
        }
    }
    return false;
};

function CheckInput(input) {

    if (containsBadCharacters(input)) {
        // console.log("Die Eingabe enthält unerwünschte Wörter. Bitte überprüfen Sie Ihren Text.");
        window.alert("You used forbidden characters!")
    } else {
        console.log("Die Eingabe ist in Ordnung.");
        GenderIT(input)
    }

};

function CopyButton() {
    alert("Helloo!")

}