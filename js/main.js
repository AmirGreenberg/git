'use strict'

function onBallClick(elBall) {
    if (!elBall.style.width) {
        var css = getComputedStyle(elBall)
        var ballSize = css.width.replace(/\D/g, '')
    } else{
        var ballSize = elBall.style.width.replace(/\D/g, '')
    }

    if (ballSize < 400) {
        elBall.style.width = +ballSize + 50 + 'px'
        elBall.style.height = +ballSize + 50 + 'px'
    } else {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }

    elBall.innerText = elBall.style.width
}
