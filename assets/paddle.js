//speed at which the paddles move
const SPEED = 0.02

export default class Paddle {
    constructer(paddleElem){
    this.reset()
}

get position() {
    return parseFloat (
        getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
}

set position(value) {
    this.paddleElem.style.setProperty("--position")
}
//setting game field relevant to users screen size
rect() {
    this.paddleElem.getBoundingClientRect()
}

reset() {
    this.position = 40
}

update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHieght - this.position)
}
}