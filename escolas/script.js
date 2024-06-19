fetch('./buscaavancada.json')
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData);
        verificarEscolas(jsonData);
        verificarMediaEnem(jsonData);
    })
    .catch(error => console.log(error.message));


function verificarEscolas(jsonData){
    var tabela = "<table><tr><th>Nome da Escola</th><th>Codigo da Escola</th></tr>"
    for(let escolaData of jsonData){
        let escolaNome = escolaData.nome
        let codEscola = escolaData.cod

        console.log(escolaNome, codEscola);

        var linha = "<tr>";
        linha += "<td>" + escolaNome + "</td><td>" + codEscola + "</td></tr>"

        tabela += linha;
    }

    document.getElementById("escola").innerHTML = tabela;
}


function verificarMediaEnem(jsonData){
    var menorMediaGeral = 999;
    var maiorMediaGeral = 0;
    var nomeEscolaMaiorMedia;
    var nomeEscolaMenorMedia;
    for(let escolaData of jsonData){
        if(escolaData.enemMediaGeral > 0 && escolaData.situacaoFuncionamentoTxt == "Em atividade"){
            if(maiorMediaGeral < escolaData.enemMediaGeral){
                maiorMediaGeral = escolaData.enemMediaGeral;
                nomeEscolaMaiorMedia = escolaData.nome;
            }
            if(menorMediaGeral > escolaData.enemMediaGeral){
                menorMediaGeral = escolaData.enemMediaGeral;
                nomeEscolaMenorMedia = escolaData.nome;
            }
        }
    }

    document.getElementById("btn1").addEventListener("click", event => maiorMedia(event))

    function maiorMedia(event){
        event.preventDefault();
        alert(`Maior media no Enem: ${maiorMediaGeral.toFixed(2)} \nda Escola: ${nomeEscolaMaiorMedia}`);
    }

    document.getElementById("btn2").addEventListener("click", event => menorMedia(event))

    function menorMedia(event){
        event.preventDefault();
        alert(`Menor media no Enem: ${menorMediaGeral.toFixed(2)} \nda Escola: ${nomeEscolaMenorMedia}`);
    }
}

