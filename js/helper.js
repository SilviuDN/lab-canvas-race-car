function randomStartPoint(width){
    const ratio = Math.min(1/3, Math.random())
    return Math.floor( width * ratio )
}

function randomWidth(startPoint, canvaWidth){
    const availableWidth = canvaWidth - startPoint
    const ratio = Math.min(2/3, Math.random())
    return Math.floor( availableWidth * ratio )
}

function randomObstacle(canvaWidth){
    const startPoint = randomStartPoint(canvaWidth)
    const obstacleWidth = randomWidth(startPoint, canvaWidth)
    return {x: startPoint, w: obstacleWidth}
}