class Background{

    constructor( ctx, canvasWidth, canvasHeight, roadSideWidth, lineWidthRoadEdge, lineWidthRoadMiddle){
        this.ctx = ctx
        this.canvasSize = {w: canvasWidth, h: canvasHeight}
        this.roadSideWidth = roadSideWidth
        this.lineWidthRoadEdge = lineWidthRoadEdge
        this.lineWidthRoadMiddle = lineWidthRoadMiddle
    }

    draw(){
        this.drawFilledRectangles()
        this.drawRoadEdges()
    }

    drawFilledRectangles(){
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect( 0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect( this.roadSideWidth, 0, this.canvasSize.w - 2*this.roadSideWidth, this.canvasSize.h)
    }

    drawRoadEdges(){
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = this.lineWidthRoadEdge

        const leftEdge = this.roadSideWidth + 3*this.lineWidthRoadEdge/2
        const rightEdge = this.canvasSize.w - this.roadSideWidth - 3*this.lineWidthRoadEdge/2
        const roadMiddleLine = this.canvasSize.w/2 -this.lineWidthRoadMiddle/2

        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.moveTo(leftEdge,0)
        this.ctx.lineTo(leftEdge, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(rightEdge,0)
        this.ctx.lineTo(rightEdge, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = this.lineWidthRoadMiddle

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(roadMiddleLine, 0)
        this.ctx.lineTo(roadMiddleLine, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    }



}