class Obstacle{
    constructor(ctx, canvaWidth, height, speed){
        this.ctx = ctx
        this.canvaWidth = canvaWidth
        this.pos = {x: undefined, y: 0}
        this.size = {w: undefined, h: height}
        this.speed = speed

        this.init()
    }

    init(){
        this.pos.x = randomObstacle(this.canvaWidth).x
        this.pos.y = 0
        this.size.w = randomObstacle(this.canvaWidth).w
    }

    draw(){
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect( this.pos.x, this.pos.y, this.size.w, this.size.h)
    }

    move(){
        this.pos.y += this.speed
    }
}