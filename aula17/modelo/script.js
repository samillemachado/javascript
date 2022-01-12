var txtnum = window.document.getElementById('txtnum')
var selnum = window.document.getElementById('selnum')
var valores = []
res = window.document.querySelector('div#res')

// var btn = document.getElementById("button")

// function disableBtn() {
//     document.getElementById("button").disabled = false
// }

function adicionar(){
    var n = Number(txtnum.value)
    if (n < 1 || n > 100) {
        window.alert('[Erro] Confira se o número está entre 1 e 100.')
    } else if ((valores.indexOf(n)) == -1) {            
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`        
        selnum.appendChild(item)        
        valores.push(n)  
        res.innerHTML = ''                          
    } else {
        window.alert('[Erro] Número repetido.')
    }
    txtnum.value = ''
    txtnum.focus()    
}
function finalizar(){
    var maior = valores[0]
    var menor = valores[0]
    var s = 0
    var media = 0

    for (var pos in valores){
        s += valores[pos]
        media = (s / valores.length)

        if (valores[pos] > maior){
            maior = valores [pos]
        } else if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    
    if (valores.length == 0){
        window.alert('[Erro] Você deve inserir valores.')
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p> `
        res.innerHTML += `<p>A soma dos valores informados é de: ${s}.</p> `
        res.innerHTML += `<p>A média dos valores informados é de: ${media}.</p> `                        
    }      
}
/*
var btn = document.createElement('button')
btn.innerHTML= ("Limpar dados")
body.section.div.appendChild(btn)
res.btn.addEventListener('click', function() {            
})
*/   





