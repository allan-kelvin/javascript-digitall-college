function saudacao(nome,turno){
    let newTurno = turno.toLocaleLowerCase();
    if (newTurno == 'manhã') {
        console.log(`Bom dia! ${nome}`);
    }else if(newTurno == 'tarde'){
        console.log(`Boa tarde! ${nome}`);
    } else if(newTurno == 'noite'){
        console.log(`Boa Noite! ${nome}`);
     }else{
        console.log(`Olá ${nome}`)
     }
}
saudacao('Allan','manhã');
saudacao('Allan','tarde');
saudacao('Allan','noite');
saudacao('Allan','não sei');
saudacao('Allan','Manhã');
saudacao('Allan','TARDE');