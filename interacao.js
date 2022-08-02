function calculaDatas() {
    var hoje = document.getElementById("hoje").value
    var vencimento = document.getElementById("vencimento").value
    hoje = new Date(hoje)
    vencimento = new Date(vencimento)

    var diffInTime = Math.abs(hoje - vencimento)
    var timeInOnDay = 1000 * 60 * 60 * 24
    var diffInDays = diffInTime / timeInOnDay

    return diffInDays

}


function atualizar() {
    var exibicao = document.getElementById("exibir")
    var valor = Number(document.getElementById("valor").value)
    var juros = ajuste((valor * 0.33) / 100, 2)
    var multa = ajuste((valor * 2) /100, 2)
    var credito = document.getElementById('credito')
    var taxa = document.getElementById('taxa')
    var atraso = calculaDatas()

    if (valor === 65 || valor === 75 || valor === 80 || valor === 85 || valor === 90 || valor === 100 || valor === 120){
        var resultado = juros * atraso + multa + valor
        exibicao.innerHTML = `R$ ${ajuste(resultado,2)}`
        credito.innerHTML = `R$ ${ajuste(resultado + (resultado * 4 /100),2)}`
        taxa.innerHTML = `R$ ${ajuste(resultado * 4 / 100, 2)}`
    }else {
        alert('Plano inexistente')
    }
    
    negociar()
}

function negociar() {
    var exibicao = document.getElementById("totalJuros15dias")
    var valor = Number(document.getElementById("valor").value)
    var juros = ajuste((valor * 0.33) / 100, 2)
    var multa = ajuste((valor * 2) /100, 2)
    var atraso = calculaDatas()
    var diasDeUso15 = valor / 2
    var juros15credito = document.getElementById("juros15credito")
    var juros15taxa = document.getElementById("juros15taxa")

    if (valor === 65 || valor === 75 || valor === 80 || valor === 85 || valor === 90 || valor === 100 || valor === 120){
        var resultado = juros * atraso + multa + valor + diasDeUso15
        exibicao.innerHTML = `R$ ${ajuste(resultado,2)}`
        juros15credito.innerHTML = `R$ ${ajuste(resultado + (resultado * 4 / 100),2)}`
        juros15taxa.innerHTML = `R$ ${ajuste(resultado * 4 / 100,2)}`
    } else {
        alert('Plano inexistente')
    }

    proporcional()
    descricao(valor/30,juros,atraso,multa,diasDeUso15)
}

function proporcional() {
    var exibicao = document.getElementById("exibirproporcional")
    var valor = Number(document.getElementById("valor").value)
    var proporcional = Number(document.getElementById('proporcional').value)
    var juros = ajuste((valor * 0.33) / 100, 2)
    var multa = ajuste((valor * 2) /100, 2)
    var atraso = calculaDatas()
    var diasDeUso15 = valor / 2
    var creditoproporcional = document.getElementById("creditoproporcional")
    var taxaproporcional = document.getElementById("taxaproporcional")

    if (valor === 65 || valor === 75 || valor === 80 || valor === 85 || valor === 90 || valor === 100 || valor === 120){
        var resultado = juros * atraso + multa + valor + diasDeUso15 + (proporcional * (valor / 30))
        exibicao.innerHTML = `R$ ${ajuste(resultado,2)}`
        creditoproporcional.innerHTML = `R$ ${ajuste(resultado + (resultado * 4 / 100),2)}`
        taxaproporcional.innerHTML = `R$ ${ajuste(resultado * 4 / 100,2)}`
    } else {
        alert('Plano inexistente')
    }
}

function descricao(parametro1,parametro2,parametro3,parametro4,parametro5) {
    document.getElementById('valorDiaDeUso').innerHTML = ajuste(parametro1, 2)
    document.getElementById('jurosAoDia').innerHTML = ajuste(parametro2, 2)
    document.getElementById('diasDeAtraso').innerHTML = parametro3
    document.getElementById('juros').innerHTML = ajuste(parametro2 * parametro3, 2)
    document.getElementById('multa').innerHTML = ajuste(parametro4, 2)
    document.getElementById('diasDeConsumo15').innerHTML = ajuste(parametro5, 2)
}

function ajuste(num,casas) {
    const og = Math.pow(10,casas)
    return Math.floor(num * og) / og
}