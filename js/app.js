const Game = {
    name: 'Road background',
    description: 'Canvas race app.',
    version: '1.0.0',
    author: 'Silviu Dilimot',
    license: undefined,
    repository: undefined,

    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: {w: undefined, h: undefined},

    background: undefined,
    roadSideWidth: 50,
    lineWidthRoadEdge: 10,
    lineWidthRoadMiddle: 6,

    carSize: {w: 50, h: 50},
    car: undefined,

    FPS: 70,
    pressedKeys: [],

    init(){
        console.log('init')
        this.setContext()
        this.setDimensions()
        this.createCar()
        this.drawAll()

        this.start()
    },

    drawAll(){

        this.drawBackground()
        
        this.drawCar()
        
    },

    drawBackground(){
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, this.roadSideWidth, this.lineWidthRoadEdge, this.lineWidthRoadMiddle)
        this.background.draw()
    },

    setContext(){
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        console.log(`Let's sytart!`)
    },
    setDimensions(){
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    setListeners() {
        
        document.onkeydown = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        };

    },

    start(){
        // this.createCar()
        this.setListeners()
        setInterval(() => {
            this.clearScreen()
            this.drawAll()
        }, this.FPS)
    },

    createCar(){
        const startPosX = this.canvasSize.w / 2 - this.carSize.w /2
        const startPosY = this.canvasSize.h - this.carSize.h
        this.car = new Car(this.ctx, startPosX, startPosY, this.carSize.w, this.carSize.h, 'car.png', this.canvasSize.w, this.canvasSize.h)
    },

    drawCar(){
        this.car.draw()
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }





}