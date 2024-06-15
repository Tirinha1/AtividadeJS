fetch('./cidades-mg.json')
    .then(res => res.json())
    .then(jsonData => verificarCidades(jsonData))
    .catch(error => console.log(error.message))

function verificarCidades(jsonData){
    for(cidadeData of jsonData){
        let index = cidadeData.search(":");
        var codigoCidade = cidadeData.slice(0, index);
        var nomeCidade = cidadeData.slice(index+1, jsonData.lenght)

        console.log(codigoCidade, nomeCidade);
    }
    
}