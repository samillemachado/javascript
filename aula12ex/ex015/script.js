function verificar(){
    var data = new Date() //buscou os dados de data;
    var ano = data.getFullYear() //pegou o ano com 4 dígitos;
    var fano = window.document.getElementById('txtano') // formulário preenchido com o ano, linkou com a caixa do input;
    var res = window.document.querySelector('div#res') //linkou com a div;

    if (fano.value.length == 0 || Number(fano.value) > ano) { //testando valor inputado na caixa, se vazio ou maior que o ano atual;
        window.alert('[Erro] Verifique os dados novamente.')
    } else {
        var fsex = document.getElementsByName("sexrad") // teste de genero - informação das caixas radio [0] homem ou [1] mulher;
        var idade = ano - Number(fano.value) // calculo da idade;
        var gênero = '' //variavel genero;
        var img = document.createElement('img') //vamo inserir imagens dinamicamente;
        img.setAttribute('id', 'foto') //como se tivesse colocado uma imagem no html com id foto;

        if (fsex[0].checked) { //testando se foi dado check no box homem;
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) { //teste da idade;
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 45) {
                //Jovem Adulto
                img.setAttribute('src', 'jadulto-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }

        } else if (fsex[1].checked) { //testanto se foi dado check no box mulher;
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) { //teste da idade;
                //Criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 45) {
                //Jovem Adulto
                img.setAttribute('src', 'jadulto-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` //imprimir na tela;
        res.appendChild(img) //imprimir a imgem;
                
    } 
    
}
