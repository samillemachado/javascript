function gerar(){
var num = window.document.getElementById('txtnum')
var tab = window.document.getElementById('seltab')
var n = Number(num.value)

if (n == 0 || num.value.length == 0){
    window.alert('Digite um número!')
} else{
    tab.innerHTML = ''
    for (c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}
}