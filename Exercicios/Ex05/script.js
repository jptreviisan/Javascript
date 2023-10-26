var num = document.getElementById('fnum')
var lista = document.getElementById('flist')
var res = document.getElementById('res')
var valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O numero ${num.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já escontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para analizar.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
            maior = valores[pos] 
            if (valores[0] < menor) 
                menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valore informado foi ${maior}</p> `
        res.innerHTML += `<p> O menor valore informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`

    }
}


