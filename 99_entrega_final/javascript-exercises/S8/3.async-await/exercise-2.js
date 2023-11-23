/* Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
 */

async function getCharacters() {
    try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await response.json();
    console.log(characters);
    } catch (error) {
    console.error('Hubo un error al obtener los personajes:', error);
    }
}

getCharacters();

