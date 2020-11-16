function fn(){
    return 'teste';
};

const arrowFn = () => 'teste1';
const arrowFn2 = () => {
    return 'teste2';
};

// Funções tb são objetos
fn.prop = 'posso criar propriedades';

console.log(fn());
console.log(fn.prop);
console.log(arrowFn());

// receber parâmetros
const logValue = value => console.log('value');
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlfnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
};

const handleFnExecution = controlfnExec(fn);

handleFnExecution(true);
handleFnExecution();

// function controlfnExec(fnParam) {
//     return function(allowed) {
//         if (allowed) {
//             fnParam();
//         }
//     }
// };

// const handleFnExecution = controlfnExec(fn);

// handleFnExecution(true);
// handleFnExecution();