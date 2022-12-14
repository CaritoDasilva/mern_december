// Scope Global y scope local
// console.log(userName);
var userName = 'lulú';


// Funciones de flecha
const testingScope = () => {
    // Scope local;
    const scopeLocal = 'Soy un scopito local';
    console.log(scopeLocal);
};

// testingScope();

const hacerTorta = (ingredients) => 'Torta lista';

// const y let => block scope
const student = 'Angelo';
// console.log("🚀 ~ file: fundamentos1.js:15 ~ student", student);

let studentTwo = 'Marcela';
studentTwo = 'Pilar';
// console.log("🚀 ~ file: fundamentos1.js:19 ~ studentTwo", studentTwo);

// Desestructuración

const movie = {
    title: 'The avengers',
    year: 2019,
    company: 'Marvel inc.'
}

// console.log(movie.title);

// console.log(movie['title']);

const { title: titulo, year, company } = movie;

// console.log(titulo);

const students = ['Carlos', 'Pepito', 'Josefina'];

const [, , fruta] = students;
// console.log("🚀 ~ file: fundamentos1.js:44 ~ firstElement", fruta)
// console.log(students[2])

// Spread Operator and rest

const recipeArepa = {
    ingredients: 'Harina de maíz, agua y sal',
    time: 30,
    portions: 10,
    level: 'facil'
};

const recipeArepaCopy = { ...recipeArepa, level: 'difícil', title: 'Arepa venezolana' };
// console.log("🚀 ~ file: fundamentos1.js:57 ~ recipeArepaCopy", recipeArepaCopy)

const { ingredients, time, ...arepa3 } = recipeArepa;
// console.log("🚀 ~ file: fundamentos1.js:60 ~ arepa3", arepa3);

const studentsMern = [...students, 'Carolina'];
// console.log("🚀 ~ file: fundamentos1.js:63 ~ studentsMern", studentsMern)

// == => 1 == '1' retornar true
// === => 1 === '1' retornar false

// Operador ternario
const userName2 = userName === 'josefina' ? 'Hola Josefina' : 'Hola extraño';
// console.log("🚀 ~ file: fundamentos1.js:70 ~ userName2", userName2)
const userName3 = userName === 'josefina' && 'Hola Josefina';
console.log("🚀 ~ file: fundamentos1.js:72 ~ userName3", userName3)




