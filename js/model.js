//B1. Tạo các lớp đối tượng ứng.
//B2. Tạo các lớp kế thừa nếu có.
class Person {
    constructor(hoTen, diaChi, ma, email){
       this.hoTen = hoTen;
       this.diaChi = diaChi;
       this.ma = ma;
       this.email = email;
    }
}

export class Student extends Person{
    constructor(hoTen, diaChi, ma, email, toan, ly, hoa){
       super(hoTen, diaChi, ma, email);
       this.toan = toan;
       this.ly = ly;
       this.hoa = hoa;
       this.tinhDTB = () => ((this.toan + this.ly + this.hoa) /3).toLocaleString();
    }
}

export class Employee extends Person{
    constructor(hoTen, diaChi, ma, email, soNgayLam, luongNgay){
        super(hoTen, diaChi, ma, email);
        this.soNgayLam = soNgayLam;
        this.luongNgay = luongNgay;
        this.tinhLuong = () => (this.soNgayLam * this.luongNgay).toLocaleString();
    }
}

export class Customer extends Person{
    constructor(hoTen, diaChi, ma, email, tenCongty, triGia, danhGia){
        super(hoTen, diaChi, ma, email);
        this.tenCongty = tenCongty;
        this.triGia = triGia;
        this.danhGia = danhGia;
    }
    
}

class ListPerson {
    constructor(){
        this.list = [];
    }
}

export default Person;