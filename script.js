let title = document.querySelector("#title")
let container = document.querySelector("#container")
let imagem = document.querySelector("#imagem")
let labelHora = document.querySelector("#hora")
let body = document.body

setInterval(function(){
    hora = new Date().getHours()
    minutos = new Date().getMinutes().toString().padStart(2, '0')

    if (hora < 6){
        imagem.src = "img/madrugada.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "#242424"
        title.style.color = "white"
    }

    else if (hora < 13){
        imagem.src = "img/dia.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        container.style.background = "rgba(255, 255, 255, 0.609)"
        body.style.background = "skyblue"
        255, 255, 130
    }

    else if (hora < 18){
        imagem.src = "img/tarde.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "rgb(255, 147, 96)"
        title.style.color = "white"
        container.style.background = "rgba(255, 255, 255, 0.384)"
        labelHora.style.color = "rgb(36,36,36)"
        
    }

    else if (hora <= 24){
        imagem.src = "img/noite.jpg"
        labelHora.innerHTML = `${hora}:${minutos}`
        body.style.background = "rgb(20,20,40)"
        title.style.color = "white"
        labelHora.style.color = "white"
    }

}, 1)
