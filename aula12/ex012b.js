var agora = new Date()
var hora = agora.getHours() //pega a hora atual do sistema que está rodando o script
console.log(`São ${hora} horas.`)
if (hora < 12){
    console.log("Bom dia!")
} else if (hora <= 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}