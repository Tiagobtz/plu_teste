function buscarProduto(){
    let valorDaBusca = document.getElementById('caixa-busca').value.toLowerCase()
    let produtos = document.querySelectorAll(".produtos")
    
    let nomeDosProdutos = {
        'abacaxi': 0,
        'banana': 1,
        'laranja': 2,
        'limão': 3,
        'maçã': 4,
        'mamão formosa': 5,
        'melancia': 6,
        'morango': 7,
    }

    produtos.forEach(produto => {
        produto.classList.remove("efeito-destaque")
        produto.style.opacity = 0.3
    })
    
    if (nomeDosProdutos[valorDaBusca] !== undefined){
        let produto = nomeDosProdutos[valorDaBusca]
        produtos[produto].scrollIntoView({behavior: 'smooth'})
        window.location.href = `#${valorDaBusca.replace(/\s/g, '-')}`
        produtos[produto].classList.add("efeito-destaque")
        produtos[produto].style.opacity = 1
    }
}



/*
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
