function getName(){
    return "Jacques de Lassau A. Cheron";
}

function logFn(fn){
    console.log(fn);
}

const logFnResult = logFn;

const obj = {
    logFn: logFn
}

const arr = [logFn];

logFnResult(getName);

/* ################# ################# */

    function init(){
        const exemplo = `Essa variável`;

        return function(){
            console.log(`1 - O valor da variável exemplo é: ${exemplo}`);

            return function(){
                console.log(`2 - O valor da variável exemplo é: ${exemplo}`);

                return function(){
                    console.log(`1 - O valor da variável exemplo é: ${exemplo}`);                
                }
            }
        }
    }

    const initFn1 = init();

    const initFn2 = initFn1();

    const initFn3 = initFn2();

    initFn3();

// init()()()();