var num = [3, 2, 5, 7, 6, 9, 1]

/*
METODO 1
for (var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

METODO 2 - MAIS SIMPLIFICADO PARA ARRAYS E OBJETOS
for (var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

// ENCONTRAR VALORES DENTRO DE UM ARRAY
var pos = num.indexOf(10)

if(pos == -1){
    console.log('Valor não encontrado!')
} else{
    console.log(`O valor está na posição ${pos}.`)
}


