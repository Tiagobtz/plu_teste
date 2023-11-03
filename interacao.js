function buscarProduto(){
    let valorDaBusca = document.getElementById('caixa-busca').value.toLowerCase()
    let lista = document.getElementById('lista')
    let produtos = document.querySelectorAll(".produtos")

    // Criação de um objeto
    let nomesDosProdutos = {
        'abacaxi': 0,
        'banana': 1,
        'laranja': 2,
        'limão': 3,
        'maçã': 4,
        'mamão formosa': 5,
        'melancia': 6,
        'morango': 7,
    }

    // Verificando se o valor digitado na caixa de busca existe
    if (nomesDosProdutos[valorDaBusca] !== undefined){
        const produto = nomesDosProdutos[valorDaBusca]
        produtos[produto].scrollIntoView({behavior: 'smooth'})
        location.href = `#{valorDaBusca.replace(/\s/g, '-')}`
    }
}


/*
    let valorDaBusca = document.getElementById('caixa-busca').value.toLowerCase()
    let produtos = document.querySelectorAll(".produtos")

    if (valorDaBusca === 'abacaxi'){
        produtos[0] = location.href = '#abacaxi'

    } else if (valorDaBusca === 'banana'){
        produtos[1] = location.href = '#banana'

    } else if (valorDaBusca === 'laranja'){
        produtos[2] = location.href = '#laranja'

    } else if (valorDaBusca === 'limão'){
        produtos[3] = location.href = '#limao'

    } else if (valorDaBusca === 'maçã'){
        produtos[4] = location.href = '#maca'

    } else if (valorDaBusca === 'mamão formosa'){
        produtos[5] = location.href = '#mamao-formosa'

    } else if (valorDaBusca === 'melancia'){
        produtos[6] = location.href = '#melancia'

    } else if (valorDaBusca === 'morango'){
        produtos[7] = location.href = '#morango'
    }
    */