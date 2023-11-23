/* Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log();
 */

const apiUrl = 'https://api.agify.io?name=michael';

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error('La respuesta de la network no está bien');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
