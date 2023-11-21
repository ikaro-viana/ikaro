function buscarPersonagens () {
    const adaptadorHttp = new XMLHttpRequest();
    const numeroDaPagina = Math.floor(Math.random() * 8) + 1; //Buscar pag aleatória
    const url = 'https://swapi.dev/api/people';
    adaptadorHttp.open('GET', url, true);
    adaptadorHttp.onreadystatechange = function() {
        if(adaptadorHttp.readyState == 0){
            console.log('Requisição não iniciada');
        } else if(adaptadorHttp.readyState == 1){
            console.log('Conexão com o servidor estabelecida');
        } else if(adaptadorHttp.readyState == 2){
            console.log('Requisição recebida');
        } else if(adaptadorHttp.readyState == 3){
            console.log('Processando requisição');
        } else if(adaptadorHttp.readyState == 4){
            console.log('Requisição concluída');
            const resposta = adaptadorHttp.responseText;
            const people = JSON.parse(resposta);
            const personagens = people.results;
            console.log(personagens);
            const nomesDosPersonagens = personagens.map(personagem => personagem.name);
           
        }
    };
    adaptadorHttp.send();
}