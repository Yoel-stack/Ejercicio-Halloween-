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
    altura: 150,
},
{
    nombre: "Jorgito",
    edad: 17,
    altura: 130,
},
{
    nombre: "Oliver",
    edad: 15,
    altura: 140,
},
{
  nombre: "Antonnio",
  edad: 15,
  altura: 148,
},
{
  nombre: "Ale",
  edad: 15,
  altura: 145,
},
{
  nombre: "Emma",
  edad: 15,
  altura: 152,
},
{
nombre: "Machinni",
edad: 8,
altura: 80,
},
{
nombre: "Joe",
edad: 14,
altura: 119,
}
];


function trucoTrato() {
  let truco = ["👻", "💀", "🎃"];
  let trato = ["🍫", "🍰", "🍬"];

  let randomName = niños[Math.floor(Math.random(niños.nombre) * 8)];
  // console.log(randomName.nombre);
  let randomTruco = truco[Math.floor(Math.random(truco) * 3)];
  // console.log(randomTruco);
  let randomTrato = trato[Math.floor(Math.random(trato) * 3)];
  // console.log(randomTrato);

  for (let b = 0; b < niños.length; b++) {
    console.log(randomName.nombre + ` muy bien elige truco o trato !!`)

    //PODRIAMOS PONER UN ALERT SOBRE LA SIGUIENTE PREGUNTA
    let truTra = prompt(
        `Elige una opcion sin miedo xdd` + `\n 1-Truco` + `\n 2-Trato`
      );
      if(truTra == 1){
        if (randomName.nombre.length <= 3 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras UN SUSTO por rata! ${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        } else if(randomName.nombre.length == 4 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras DOS SUSTOS por rata doble je! ${randomTruco} ${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        } else if(randomName.nombre.length == 5 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras DOS SUSTOS por rata doble je! ${randomTruco}${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        } else if(randomName.nombre.length == 6 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras TRES SUSTOS por rata triple je! ${randomTruco}${randomTruco}${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        } else if(randomName.nombre.length == 7 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras TRES SUSTOS por rata triple je! ${randomTruco}${randomTruco}${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        } else if(randomName.nombre.length == 8 ){
          console.log(
            `Elegiste TRUCO mala eleccion obtendras CUATRO SUSTOS por rata cuadruple je! ${randomTruco}${randomTruco}${randomTruco}${randomTruco}`
          ); if(randomName.edad % 2 !==0){
            console.log(randomName.nombre + ` Tuviste suerte de que tu edad es IMPAR!`)
          } else {
            console.log(randomName.nombre + ` Ups resulto ser que tu edad es PAR, por lo que te llevas de regalo dos sustos mas ${randomTruco}${randomTruco}`)
          }
        }; 
      } else if (truTra == 2) {
        console.log('TAS ERRAU')
      } return;
    } 
}
trucoTrato();
