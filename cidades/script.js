fetch('./cidades-mg.json')
    .then(res => res.json())
    .then(jsonData => verificarCidades(jsonData))
    .catch(error => console.log(error.message))

function verificarCidades(jsonData){
    var tabela = "<table><tr><th>Nome da cidade</th><th>Codigo da Cidade</th></tr>"
    for(cidadeData of jsonData){
        let index = cidadeData.search(":");
        var codigoCidade = cidadeData.slice(0, index);
        var nomeCidade = cidadeData.slice(index+1, jsonData.lenght)

        var linha = "<tr>";
        linha += "<td>" + nomeCidade + "</td><td>" + codigoCidade + "</td></tr>"

        tabela += linha;
    }

    tabela += "</table>"

    document.getElementById("table").innerHTML += tabela;
}