//Notas 100, 50, 20, 10, 5, 2, 1.
function saque(ValorSaque){
    let ValorSaqueInicial = ValorSaque;
    let notas100 = 0;
    let notas50 = 0;
    let notas20 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas2 = 0;
    let notas1 = 0;

    while(ValorSaque >= 100){
        ValorSaque -= 100;
        notas100 ++;
    }while(ValorSaque >= 50){
        ValorSaque -= 50;
        notas50 ++;
    }while(ValorSaque >= 20){
        ValorSaque -= 20;
        notas20 ++;
    }while(ValorSaque >= 10){
        ValorSaque -= 10;
        notas10 ++;
    }while(ValorSaque >= 5){
        ValorSaque -= 5;
        notas5 ++;
    }while(ValorSaque >= 2){
        ValorSaque -= 2;
        notas2 ++;
    }while(ValorSaque >= 1){
        ValorSaque -= 1;
        notas1 ++;
    }

    return console.log
      (`Saque de ${ValorSaqueInicial}
        Notas de 100 = ${notas100} 
        Notas de 50 = ${notas50}
        Notas de 20 = ${notas20}
        Notas de 10 = ${notas10}
        Notas de 5 = ${notas5}
        Notas de 2 = ${notas2}
        Notas de 1 = ${notas1}`);
}

saque(200);
saque(500);
saque(20);
saque(10);
saque(15);
saque(35);

