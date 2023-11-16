'use strict'

function onBallClick(elBall,maxDiameter) {
    if (!elBall.style.width) {
        var css = getComputedStyle(elBall)
        var ballSize = css.width.replace(/\D/g, '')
             
    } else{
        var ballSize = elBall.style.width.replace(/\D/g, '')
    }

    if (ballSize < maxDiameter) {
        elBall.style.width = +ballSize + 50 + 'px'
        elBall.style.height = +ballSize + 50 + 'px'
        elBall.innerText = +ballSize + 50
    } else {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.innerText = 100
    }

    elBall.style.background = getRandomColor()
}
