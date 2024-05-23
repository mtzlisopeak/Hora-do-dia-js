let title = document.querySelector("#title")
let container = document.querySelector("#container")
let imagem = document.querySelector("#imagem")
let labelHora = document.querySelector("#hora")
let body = document.body

setInterval(function(){
    hora = new Date().getHours().toLocaleString('pt-br', {dateStyle: 'short'})
    minutos = new Date().getMinutes().toLocaleString('pt-br', {dateStyle: 'short'})

    if (hora < 6){
        imagem.src = "img/madrugada.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "#242424"
        title.style.color = "white"
    }

    else if (hora < 13){
        imagem.src = "img/dia.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        container.style.background = "rgba(255, 255, 255, 0.409)"
        body.style.background = "skyblue"
    }

    else if (hora < 18){
        imagem.src = "img/tarde.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "salmon"
        title.style.color = "white"
        labelHora.style.color = "white"
    }

    else if (hora <= 24){
        imagem.src = "img/noite.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "rgb(20,20,40)"
        title.style.color = "white"
        labelHora.style.color = "white"
    }

}, 1)
