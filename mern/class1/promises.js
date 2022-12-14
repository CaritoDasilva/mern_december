const isBreadAvailable = true;

const makeDinner = new Promise((resolve, reject) => {
    if(isBreadAvailable) {
        resolve('Hay pancito para la cena');
    } else {
        const error = new Error('Lo siento no había pancito');
        reject(error)
    };
});

const goToBuyBread = () => {
    makeDinner
        .then(response => {
            console.log(response)
            console.log('pasanding x acá1');   
        })
        .catch(err => console.log(err))
        .finally(() => console.log('terminé por hoy'));
    console.log('pasanding x acá2');
};

goToBuyBread();

// Pasar la promesa a ASYNC Y AWAIT