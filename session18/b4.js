"use strict";
/*
   Tạo ra interface Geometry chứa 2 phương thức calculateArea và calculatePerimeter.
   Định nghĩa lớp Circle có thuộc tính private radius, lớp Rectangle có 2 thuộc tính private width, height.
   2 lớp đều implements interface Geometry. Xây dựng 2 phương thức có trong interface cho 2 hàm đó.
*/
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // khi implements Geometry thì phải triển khai 2 phương thức của interface 
    calculateArea() {
        // tính diện tích hình tròn 
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        // tính chu vi hình tròn 
        return 2 * Math.PI * this.radius;
    }
}
// tạo đối tượng ( intance ) từ lớp Circle 
let circle1 = new Circle(5);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() { }
    calculatePerimeter() { }
}
