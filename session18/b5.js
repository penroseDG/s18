"use strict";
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 10;
        console.log("Tốc độ tăng lên thành: " + this.speed);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0)
            this.speed = 0;
        console.log("Tốc độ giảm xuống thành: " + this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Xe đã dừng lại");
    }
}
let car1 = new Vehicle();
car1.speedUp();
car1.slowDown();
car1.stop();
