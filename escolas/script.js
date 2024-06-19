fetch('./buscaavancada.json')
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData);
        verificarEscolas(jsonData);
    })
    .catch(error => console.log(error.message));


function verificarEscolas(jsonData){
    for(let escolaData of jsonData){
        let escolaNome = escolaData.nome;

        console.log(escolaNome);
    }

}