const clients = [{
        id: 1,
        taxNumber: '86620855',
        name: 'HECTOR ACUÑA BOLAÑOS'
    },
    {
        id: 2,
        taxNumber: '7317855K',
        name: 'JESUS RODRIGUEZ ALVAREZ'
    },
    {
        id: 3,
        taxNumber: '73826497',
        name: 'ANDRES NADAL MOLINA'
    },
    {
        id: 4,
        taxNumber: '88587715',
        name: 'SALVADOR ARNEDO MANRIQUEZ'
    },
    {
        id: 5,
        taxNumber: '94020190',
        name: 'VICTOR MANUEL ROJAS LUCAS'
    },
    {
        id: 6,
        taxNumber: '9980423K',
        name: 'MOHAMED FERRE SAMPER'
    }
];

const accounts = [{
        clientId: 6,
        bankId: 1,
        balance: 15000
    },
    {
        clientId: 1,
        bankId: 3,
        balance: 18000
    },
    {
        clientId: 5,
        bankId: 3,
        balance: 135000
    },
    {
        clientId: 2,
        bankId: 2,
        balance: 5600
    },
    {
        clientId: 3,
        bankId: 1,
        balance: 23000
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 15000
    },
    {
        clientId: 3,
        bankId: 3,
        balance: 45900
    },
    {
        clientId: 2,
        bankId: 3,
        balance: 19000
    },
    {
        clientId: 4,
        bankId: 3,
        balance: 51000
    },
    {
        clientId: 5,
        bankId: 1,
        balance: 89000
    },
    {
        clientId: 1,
        bankId: 2,
        balance: 1600
    },
    {
        clientId: 5,
        bankId: 3,
        balance: 37500
    },
    {
        clientId: 6,
        bankId: 1,
        balance: 19200
    },
    {
        clientId: 2,
        bankId: 3,
        balance: 10000
    },
    {
        clientId: 3,
        bankId: 2,
        balance: 5400
    },
    {
        clientId: 3,
        bankId: 1,
        balance: 9000
    },
    {
        clientId: 4,
        bankId: 3,
        balance: 13500
    },
    {
        clientId: 2,
        bankId: 1,
        balance: 38200
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 17000
    },
    {
        clientId: 1,
        bankId: 3,
        balance: 1000
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 600
    },
    {
        clientId: 6,
        bankId: 1,
        balance: 16200
    },
    {
        clientId: 2,
        bankId: 2,
        balance: 10000
    }
]
const banks = [{
        id: 1,
        name: 'SANTANDER'
    },
    {
        id: 2,
        name: 'CHILE'
    },
    {
        id: 3,
        name: 'ESTADO'
    },
    {
        id: 4,
        name: 'ITAU'

    }

];


// 0 Arreglo con los ids de clientes
const listClientsIds = () => {
    return clients.map((client, index) => {
        return client.id;
    })
}

const listClientsIdsRefactorPro = () => clients.map((client, index) => client.id);

// 1 Arreglo con los ids de clientes ordenados por rut
const listClientsIdsSortByTaxNumber = () => {
    const clientSortByRut = clients.sort((a, b) => parseInt(a.taxNumber) - parseInt(b.taxNumber));
    return clientSortByRut.map(client => client.id);
}

clients.sort((a,b) => a.taxNumber >= a.taxNumber).map((client, index) => client.id);

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL
// de los saldos de cada cliente en los bancos que participa.

clients.map((client, index) => {
    let total = accounts
        .filter((account) => account === client.id)
        .reduce((rest, account) => rest + account.balance,0)
    return{name:client.name, total}    
})
.sort((a,b)=> a.total - b.total)
.map((cliente)=> cliente.name);

const sortClientsTotalBalances = () => {
    const bankBalanceSort = clients.map(client => {
        let balanceByClient = [];
        accounts.filter(account => account.clientId === client.id && balanceByClient.push(account.balance));
        const totalBalance = balanceByClient.reduce((a, b) => a + b);
        return ({
            ...client,
            totalBalance
        });
    });

    const balanceTotalSort = bankBalanceSort.sort((a,b) => b.totalBalance - a.totalBalance);
    return balanceTotalSort.map(client => client.name);
}

// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
const banksClientsTaxNumbers = () => {
    let tmp = accounts.reduce((resto, item) => {
        let tmp = {...resto};
        let bank = banks.filter((bank) => bank.id === item.bankId)[0];
        let cliente = clients.filter((cl) => cl.id === item.clientId)[0];
        tmp[bank.name] = tmp[bank.name] || [];
        tmp[bank.name].push(cliente);
        return tmp;
    }, {}) // => {Chile: Usuarios[], Estado: usuarios[], ...} 
    // console.log(tmp);
    //[Chile, Estado, Santander]
    Object.keys(tmp).map((bankName) => {
        let ruts = tmp[bankName]
            .sort((a, b) => a.name > b.name)
            .map(item => item.taxNumber);
        ruts = ruts.filter((item, index) => ruts.indexOf(item) === index);  // Saca los repetidos
        tmp[bankName] = ruts;
    });
    return tmp;
}    
// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER

const richClientsBalances = () => {
    const filterBalance = accounts.filter( account => account.balance > 25000 && account.bankId === 1);
    masDe25 = filterBalance.sort((a,b) => b.balance - a.balance);
    return masDe25;
}


// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
const banksRankingByTotalBalance = () => {
    const banksByBalance = banks.map(bank => {
        let totalBalance = [];
        accounts.map(account => {
            if(account.bankId === bank.id) {
                totalBalance.push(account.balance);
            }
        })
        return {
            id: bank.id,
            totalBalance: totalBalance.reduce((a,b) => a+b)
        }
    })
    console.log(banksByBalance);
    const banksOrderByIncrement = banksByBalance.sort((a, b) => a.totalBalance - b.totalBalance).map(bank => bank.id);
    return banksOrderByIncrement;
}

// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
const banksFidelity = () =>{
    let objBankFidelity = {};
    banks.map((bank, index) =>{
        let numberClients = accounts.filter(account => account.bankId === bank.id);
        objBankFidelity = {
            ...objBankFidelity,
            [bank.name]: numberClients.length
        }
    })
    return objBankFidelity;
}

// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.

// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 

// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.


	// Impresión de soluciones. No modificar.
// console.log('Pregunta 0');
// console.log(listClientsIds());
// console.log('Pregunta 1');
// console.log(listClientsIdsSortByTaxNumber());
// console.log('Pregunta 2');
// console.log(sortClientsTotalBalances());
// console.log('Pregunta 3');
// console.log(banksClientsTaxNumbers());
// console.log('Pregunta 4');
// console.log(richClientsBalances());
// console.log('Pregunta 5');
// console.log(banksRankingByTotalBalance());
console.log('Pregunta 6');
console.log(banksFidelity());
// console.log('Pregunta 7');
// console.log(banksPoorClients());
// console.log('Pregunta 8');
// console.log(newClientRanking());