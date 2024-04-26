interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0;
    }
    speedUp(): void {
        this.speed += 10;
        console.log("Tốc độ tăng lên thành: " + this.speed);
    }
    slowDown(): void {
        this.speed -= 10;
        if (this.speed < 0)
            this.speed = 0;
        console.log("Tốc độ giảm xuống thành: " + this.speed);
    }
    stop(): void {
        this.speed = 0;
        console.log("Xe đã dừng lại");
    }
}
let car1 = new Vehicle();
car1.speedUp();
car1.slowDown();
car1.stop();
