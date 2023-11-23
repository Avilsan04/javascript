/* Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
 */

const runTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
  };
  
  const executeWithAsyncAwait = async () => {
    await runTimeOut();
    console.log('Time out!');
  };
  
  executeWithAsyncAwait();
  