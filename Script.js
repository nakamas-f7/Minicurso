let click = 1
let escolhida
let imgPrincipal = "url(imagens_do_jogo/principal.jpg)"
function Embaralha(x){
    const F = document.getElementsByClassName("Foto F" + x)[0]
    if(click === 2){
        if(escolhida % 2 === 0){
            if(x % 2 === 0){
                console.log("perdeu")
                F.style.backgroundImage = "url(imagens_do_jogo/" + (x / 2) + ".jpg)"
                setTimeout(() => {
                    F.style.backgroundImage = imgPrincipal
                }, 1000)
            }else if(x % 2 != 0){
                if(escolhida / 2 === x){
                    F.style.backgroundImage = "url(imagens_do_jogo/" + x + ".jpg)"
                    console.log("ganhou")
                }else{
                    console.log(x)
                    F.style.backgroundImage = "url(imagens_do_jogo/" + x + ".jpg)"
                    console.log("perdeu")
                    setTimeout(() => {
                        const carta1 = document.getElementsByClassName("Foto F" + escolhida)[0]
                        carta1.style.backgroundImage = imgPrincipal
                        F.style.backgroundImage = imgPrincipal
                    }, 1000)
                }
            }

        }else{
            if(escolhida * 2 === x){
                F.style.backgroundImage = "url(imagens_do_jogo/" + x/2 + ".jpg)"
                console.log("ganhou")
            }else{
                F.style.backgroundImage = "url(imagens_do_jogo/" + x + ".jpg)"
                console.log("perdeu")
                setTimeout(() => {
                    const carta1 = document.getElementsByClassName("Foto F" + escolhida)[0]
                    carta1.style.backgroundImage = "url(imagens_do_jogo/principal.jpg)"
                    F.style.backgroundImage = "url(imagens_do_jogo/principal.jpg)" 
                }, 1000)
            }
        }
        click = 1
    }else if(click === 1){
        if(x % 2 === 0){
            F.style.backgroundImage = "url(imagens_do_jogo/" + (x / 2) + ".jpg)"
        }else if(x % 2 === 1){
            F.style.backgroundImage = "url(imagens_do_jogo/" + x + ".jpg)"
        }
        click = 2
        escolhida = x
    }
}