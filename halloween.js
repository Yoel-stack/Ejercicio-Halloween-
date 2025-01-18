/*
 * Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco
 * o Trato" y un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 * - En caso contrario retornará un error.
 */

let niños = [
{
    nombre: 'Pepe',
    edad: 13,
    altura: 1.50,
},
{
    nombre: "Jorgito",
    edad: 17,
    altura: 1.30,
},
{
    nombre: "Oliver",
    edad: 15,
    altura: 1.48,
}
];

function trucoTrato() {

    let truco = ["Fantasmita 👻 ", "Squeleton 💀", "Bruja 🎃"];
    let trato = ["Choco 🍫", "Tortiita 🍰 ", "Dulce 🍬"];

    let randomName = niños[Math.floor(Math.random(niños.nombre) * 3)];
    // console.log(randomName.nombre);
    let randomTruco = truco[Math.floor(Math.random(truco) * 3)]
    // console.log(randomTruco);
    let randomTrato = trato[Math.floor(Math.random(trato) * 3)]
    // console.log(randomTrato);


    console.log(randomName.nombre + ` muy bien elige truco o trato !!`)

    for(let i = 0; i < truco.length; i++){

        for(let a = 0; a < trato.length; a++){
            // console.log(truco + trato)
            let truTra = prompt(`Elige una opcion sin miedo xdd` +`\n 1-Truco`+`\n 2-Trato`)

            if (truTra == 1){
                console.log(`Elegiste TRUCO mala eleccion obtendras un susto por rata! ${ randomTruco}`)
            } else if(truTra == 2){
                console.log(`Elegiste TRATO obtendras un regalo! ${ randomTrato}`)
            } return;
        }
    } 
}
trucoTrato();

