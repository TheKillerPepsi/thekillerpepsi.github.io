const nongendered = ["Gerätewart", "Abteilungsleiter", "Unbekannter"];
const gendered = ["Geräteaufsicht", "Abteilungsleitung", "unbekannte Person" ];
const prompt = require("prompt-sync")();


console.log("Please input your text");
const input = prompt();
//console.log(input);

//convert string into array
const stringArray = input.split(" ");
// console.log(myArray);
// console.log(nongendered);
// console.log(gendered);

    stringArray.forEach(e=>{ //für jedes einzelne Element e in meinem Array

        // nongendered.indexOf(e)
        // console.log(e);
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
        finalString = stringArray.join(" ");
        console.log(finalString);

        

