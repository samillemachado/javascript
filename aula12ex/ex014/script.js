function carregar(){
    //acessando os elementos do html
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem") 

    //criando um objeto e acessando as infos dele
    var data = new Date()
    var hora = data.getHours()

    //adaptando mensagem conforme variável hora
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora > 0 && hora < 12) {
        // bom dia
        img.src = "./imagens/manha-p.png"
        document.body.style.background = "#eadbc3"
    } else if (hora >=12 && hora < 18){
        // boa tarde
        img.src = "./imagens/tarde-p.png"
        document.body.style.background = "#cd8473"
    } else {
        // boa noite
        img.src = "./imagens/noite-p.png"
        document.body.style.background = "#0e2d3d"
    }
}