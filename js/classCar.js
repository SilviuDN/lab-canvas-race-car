class Car{
    constructor( ctx, carPosX, carPosY, carWidth, carHeight, carImage, canvasWith, canvasHeight){

        this.ctx = ctx
        this.pos = {x: carPosX, y: carPosY}
        this.size = {w: carWidth, h: carHeight}
        this.image = carImage
        this.imageInstance = undefined
        this.canvasSize = {w: canvasWith, h: canvasHeight}

        this.init()
    }

    init(){
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.image}`
    }

    draw(){
        // this.imageInstance.onload = () => this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.carSize.w, this.carSize.h)
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.w, this.size.h)
    }

    moveLeft() {
        this.pos.x -= 10
        const left = this.pressedKey
    }

    moveRight() {
        console.log('right')
        this.pos.x += 10
    }
}