'use strict'

function onBallClick(elBall) {
    var css = getComputedStyle(elBall)
    var cssWidth = parseInt(css.width,10)
    var cssHeight = css.height.match(/(\d+)/)[0]

    elBall.style.width = +cssWidth +50 + 'px'
    elBall.style.height = +cssHeight +50 + 'px'
}