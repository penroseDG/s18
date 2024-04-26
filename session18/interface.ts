/*
    interface: giao diện
    dùng để định nghĩa các thuộc tính và phương thức các con kế thừa 
    bắt buộc phải triển khai
    ==> cx giống như abstract
    - có những điểm gì khác nhau so với abstract
    - để tạo abstract thì dùng từ khóa abstract
    - để tạo interface thì dùng interface
    - trong interface sẽ gồm có thuộc tính và phương thức
    - đối với phương thức thì k có phần thân, tức là nó chỉ định nghĩa
    - đối với interface thì không thể dùng kiểu kết hợp union và intersection giống như type
    - có thể khởi tạo đối tượng từ interface được không?
    ==> không thể khởi tạo đối tượng từ interface được
    - interface sinh ra nhằm mục đích gì?
    ==> interface là một cái khuân mẫu cho các class khác kế thừa phải tuân theo
    - các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tính và 
    phương thức của ỉnterface (implement)
    - 1 class có thể triển khai nhiều interface được
    ==> interface có thể kế thừa interface 
    - trong interface thì không thể đặt access modifer được 
*/
interface Sales{
    name: string;
    sale():string;
    sale2():void;
}
interface Sales2{
    name: string;
    address:string
}
interface Sale3 extends Sale2 {
    age:number;
}
// interface C2=Sales&Sales2
class Person0 implements Sales{
    name:string 
    address:string
    constructor(name:string,address:string){
        this.name=name
        this.address=address
    }
    sale():string{
        return `giảm giá 5%`
    }
    sale2():void{
        
    }
}
type A={
    name:string;
}
type B={
    name:string;
    age:number
}
type C=A&B;
let name1: A;