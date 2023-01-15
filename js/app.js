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
    interval: 0,

    background: undefined,
    roadSideWidth: 50,
    lineWidthRoadEdge: 10,
    lineWidthRoadMiddle: 6,

    obstacles: [],
    obstacleHeight: 20,
    obstacleSpeed: 10,
    obstacleFreq: 10,
    obstacleFreqCount: 0,
    score: 0,

    carSize: {w: 50, h: 50},
    car: undefined,

    FPS: 70,
    pressedKeys: [],

    init(){
        console.log('init')
        this.setContext()
        this.setDimensions()
        this.createCar()
        this.createObstacle() //DE STERS

        this.start()
    },

    start(){
        this.setListeners()
        this.interval = setInterval(() => {
            this.clearScreen()
            this.moveObstacles()
            this.drawAll()
            if( ++this.obstacleFreqCount == this.obstacleFreq ){
                this.obstacleFreqCount = 0
                this.createObstacle()
                this.obstacleFreq = this.obstacleFreqGen()
                console.log(this.obstacleFreq +' '+this.obstacleFreqGen())
            }             
        }, this.FPS)
    },

    stop(){
        clearInterval(this.interval)
        alert(`Your score: ${this.score}`)
    },

    drawAll(){

        this.drawBackground()        
        this.drawCar()
        this.drawObstacles()
        
    },   

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }, 

    obstacleFreqGen(){
        return ( 10 + Math.floor( 10 * Math.random() ) ) 
    },
    
    // CONTEXT, CANVAS && LISTENERS

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

    // OBSTACLES

    createObstacle(){
        const obstacle = new Obstacle(this.ctx, this.canvasSize.w, this.obstacleHeight, this.obstacleSpeed)
        this.obstacles.push(obstacle)
    },

    drawObstacles(){
        this.obstacles.forEach( (el)=> {
            el.draw() 
        })
    },

    moveObstacles(){
        this.obstacles.forEach( (el) => {
            el.move()
            el.pos.y >= this.canvasSize.h ? this.removeObstacleFromList() : null
            // console.log(this.obstacles.length)
            this.collision(this.car, el) ? this.stop() : null
        } )
    },

    removeObstacleFromList(){
        this.obstacles.shift()
        this.score++
    },
    // BACKGROUND

    drawBackground(){
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, this.roadSideWidth, this.lineWidthRoadEdge, this.lineWidthRoadMiddle)
        this.background.draw()
    },

    // CAR

    createCar(){
        const startPosX = this.canvasSize.w / 2 - this.carSize.w /2
        const startPosY = this.canvasSize.h - this.carSize.h
        this.car = new Car(this.ctx, startPosX, startPosY, this.carSize.w, this.carSize.h, 'car.png', this.canvasSize.w, this.canvasSize.h)
    },

    drawCar(){
        this.car.draw()
    },

    // COLLISION

    collision(car, ob){
        return (
            car.pos.x < (ob.pos.x + ob.size.w) &&
            (car.pos.x + car.size.w) > ob.pos.x &&
            car.pos.y < (ob.pos.y + ob.size.h) &&
            car.pos.y + car.size.h > ob.pos.y
        )
    },







}