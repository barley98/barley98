const birdDom = document.querySelector('.bird')
class Bird extends Rectangle {
    constructor(){
        super(33,26,150,150,0,-50,birdDom)
        this.index = 1
        this.g = 1000
        this.timer = null
    }
    fly(){
        if(this.timer){
            clearInterval(this.timer)
            this.timer = null
        }else{
            this.timer = setInterval(() => {
                if(this.index<3){
                    this.index++
                }else{
                    this.index = 1
                }
                this.dom.className = `bird swing${this.index}` 
            }, 200);
        }
       
    }
    move(duration){
        super.move(duration)
        this.speedY += this.g*duration
    }
    onMove(){
        if(this.top < 0){
            this.top = 0 
        }else if (this.top > 468){
            this.top = 468
        }
    }
}
var bird = new Bird
setInterval(() => {
    bird.move(16/1000)
}, 16);