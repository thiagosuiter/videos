function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }

    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var classificacao = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade < 12) {
            classificacao = 'criança'
            img.setAttribute('src', 'homem_crianca.png')
        } else if (idade < 21) {
            classificacao = 'jovem'
            img.setAttribute('src', 'homem_jovem.png')
        } else if (idade < 60) {
            classificacao = 'adulto'
            img.setAttribute('src', 'homem_adulto.png')
        } else {
            classificacao = 'idoso'
            img.setAttribute('src', 'homem_idoso.png')
        }
    } else if (sexo[1].checked) {
        genero = 'Mulher'
        if (idade < 12) {
            classificacao = 'criança'
            img.setAttribute('src', 'mulher_crianca.png')
        } else if (idade < 21) {
            classificacao = 'jovem'
            img.setAttribute('src', 'mulher_jovem.png')
        } else if (idade < 60) {
            classificacao = 'adulta'
            img.setAttribute('src', 'mulher_adulta.png')
        } else {
            classificacao = 'idosa'
            img.setAttribute('src', 'mulher_idosa.png')
        }
    }

    res.innerHTML = `<p>Detectamos ${genero} ${classificacao} com ${idade} anos.</p>`
    res.appendChild(img)
}
