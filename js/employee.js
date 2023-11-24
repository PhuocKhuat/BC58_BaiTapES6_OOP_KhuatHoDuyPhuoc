import { Employee } from "./model.js";

let popupContent2 = domID('popupContent2');
const containBlur = () =>{
  let blur = domID('blur');
  let blur2 = domID('blur2');
  blur.classList.toggle('active');
  blur2.classList.toggle('active');
}

let employeeArr = [];
let dataJson = localStorage.getItem("DSNV_LOCAL");
if(dataJson != null){
  let result = JSON.parse(dataJson);
  employeeArr = result.map(item => 
    new Employee(
        item.hoTen,
        item.diaChi,
        item.ma,
        item.email,
        item.soNgayLam,
        item.luongNgay,
    ));
    renderDSNV(employeeArr);
}

//THÊM NHÂN VIÊN
/**
 * B1. Tạo 1 mảng rỗng.
 * B2.
 * B3. dom lên giao diện lấy id tương ứng
 * B4. 
 */
domID('btnThemNV').onclick = () => {
    popupContent2.classList.remove('openPopup2');
    containBlur();
    popupContent2.style.transform ="translateY(-500px)";
    //2.
    let hoTen = domID('name2').value;
    let diaChi = domID('address2').value;
    let ma = domID('identify2').value;
    let email = domID('email2').value;
    let soNgayLam = domID('workingDay').value*1;
    let luongNgay = domID('dailyWage').value*1;
    //3.
    const employee = new Employee (hoTen, diaChi, ma, email, soNgayLam, luongNgay);
    //4.
    let isValid = kiemTraNhap('name2', 'tbTen2', 15) & kiemTraNhap('address2', 'tbDiaChi2', 1) & kiemTraNhap('identify2', 'tbIdentify2', 16) & kiemTraNhap('email2', 'tbEmail2', 3) & kiemTraNhap('workingDay', 'tbWorkingDay', 17) & kiemTraNhap('dailyWage', 'tbDailyWage', 18); 
    isValid = isValid && kiemTraTenLaChu('name2', 'tbTen2') & kiemTraSo(employee.ma, "tbIdentify2", 20) & kiemTraSo(employee.soNgayLam, "tbWorkingDay", 21) & kiemTraSo(employee.luongNgay, "tbDailyWage", 22) & kiemTraEmail(employee.email, "tbEmail2",10);
    isValid = isValid && kiemTraTrung(employee.hoTen, employeeArr) & kiemTraDoDai(employee.ma, "tbIdentify2", 5, 5, 23);
    if(isValid){
        //5.
        employeeArr.push(employee);
        //6.
        localStorage.setItem("DSNV_LOCAL", JSON.stringify(employeeArr));
        //7.
        renderDSNV(employeeArr);
    } else{
        popupContent2.classList.add("openPopup2");
        containBlur();
        popupContent2.style.transform ="translateY(-100px)";
    }
}

//XOÁ NHÂN VIÊN
/**
 * B1. Dùng filter lọc ra những phần tử có hoTen khác với hoTen nhận từ id.
 * B2. Chuyển array thành JSON và lưu xuống LOCALSTORAGE.
 * B3. Lấy array đi xử lý tiếp ~ renderDSNV.
 */
window.xoaNV = (id) => {
    //1.
    employeeArr = employeeArr.filter(item => item.hoTen != id);
    //2.
    localStorage.setItem("DSNV_LOCAL", JSON.stringify(employeeArr));
    //3.
    renderDSNV(employeeArr);
}

//SỬA NHÂN VIÊN
/**
 * B1.
 * B2. 
 * B3.
 */
window.suaNV = (id) => {
  //Thêm popup và thêm blur.
    popupContent2.classList.add('openPopup2');
    containBlur();
  //Hiện nút cập nhật và ẩn nút thêm.
    domID('btnCapNhat2').style.display ="inline-block";
    domID('btnThemNV').style.display = "none";
  //Ẩn thông báo khi ấn lại.
  domID('tbTen2').innerHTML = "";
  domID('tbDiaChi2').innerHTML = "";
  domID('tbIdentify2').innerHTML = "";
  domID('tbEmail2').innerHTML = "";
  domID('tbWorkingDay').innerHTML = "";
  domID('tbDailyWage').innerHTML = "";
    let viTri = employeeArr.findIndex(item => item.hoTen == id);
    const nV = employeeArr[viTri];
    domID('name2').readOnly = true;
    domID('name2').value = nV.hoTen;
    domID('address2').value = nV.diaChi;
    domID('identify2').value = nV.ma;
    domID('email2').value = nV.email;
    domID('workingDay').value = nV.soNgayLam;
    domID('dailyWage').value = nV.luongNgay;
}

//CẬP NHẬT SINH VIÊN.
/**
 * B1.
 * B2. dom tới giao diện lấy thông tin.
 * B3. 
 */

domID('btnCapNhat2').onclick = () => {
    //1.
    popupContent2.classList.remove('openPopup2');
    containBlur();
    //2.
    let hoTen = domID('name2').value;
    let diaChi = domID('address2').value;
    let ma = domID('identify2').value;
    let email = domID('email2').value;
    let soNgayLam = domID('workingDay').value;
    let luongNgay = domID('dailyWage').value;
    //3.
    let viTri = employeeArr.findIndex(item => item.hoTen == hoTen);
    //4.
    const employee = new Employee(hoTen, diaChi, ma, email, soNgayLam, luongNgay);
    //5.
    employeeArr[viTri] = employee;
    //6. VALIDATE
    let isValid = kiemTraNhap('name2', 'tbTen2', 15) & kiemTraNhap('address2', 'tbDiaChi2', 1) & kiemTraNhap('identify2', 'tbIdentify2', 16) & kiemTraNhap('email2', 'tbEmail2', 3) & kiemTraNhap('workingDay', 'tbWorkingDay', 17) & kiemTraNhap('dailyWage', 'tbDailyWage', 18); 
    isValid = isValid && kiemTraTenLaChu('name2', 'tbTen2') & kiemTraSo(employee.ma, "tbIdentify2", 20) & kiemTraSo(employee.soNgayLam, "tbWorkingDay", 21) & kiemTraSo(employee.luongNgay, "tbDailyWage", 22) & kiemTraEmail(employee.email, "tbEmail2",10);
    isValid = isValid && kiemTraDoDai(employee.ma, "tbIdentify2", 5, 5, 23);
    //7.
    if(isValid){
      employeeArr.splice(viTri, 1, employee);
      //8.
      localStorage.setItem("DSNV_LOCAL", JSON.stringify(employeeArr));
      //9.
      renderDSNV(employeeArr);
    }else{
      popupContent2.classList.add("openPopup2");
      containBlur();
  }
}

//SẮP XẾP THEO THỨ TỰ TĂNG DẦN.
function sortUp(){
    employeeArr.sort((a,b) => {
    a = a.hoTen.toLowerCase();
    b = b.hoTen.toLowerCase();
    if(a<b){ //Vd: a(1) < b(2) => -1 để a đặt trước b.
      return -1;
    }
    if(a>b){ //Vd: a(3) > b(2) => 1 để a đặt sau b.
      return 1;
    }
    return 0;
  });
  renderDSNV(employeeArr);
}
//SẮP XẾP THEO THỨ TỰ GIẢM DẦN.
function sortDown(){
  employeeArr.sort((a,b) => {
    a = a.hoTen.toLowerCase();
    b = b.hoTen.toLowerCase();
    if(a>b){ //Vd: a(3) > b(2) => -1 để a đặt trước b.
      return -1;
    }
    else if(a<b){ //Vd: a(1) < b(2) => 1 để a đặt sau b.
      return 1;
    }
    return 0;
  });
  renderDSNV(employeeArr);
}
//NÚT TĂNG/GIẢM DẦN
domID('fullName2').onclick = () => {
  if(domID('sortUp2').classList.toggle('active')){
      domID('sortUp2').classList.add('active')
      domID('sortDown2').classList.remove('active');
      sortUp();
  } else {
      domID('sortUp2').classList.remove('active')
      domID('sortDown2').classList.add('active');
      sortDown();
  };
}

//TÌM NGƯỜI DÙNG DỰA THEO MÃ.
/**
 * B1. dom tới nút tìm kiếm trên layout, gán thêm thành chữ thường.
 * B2. Khởi tạo biến và lọc những phần tử từ dSNV trả về những phần tử thuộc xếp loại, chữ thường, kiểm tra keySearch có tồn tại không.
 * B3. renderdSNhanVien có tham số là kQTKiem.
 */
domID("btnSearch2").onclick = () => {
  var keySearch = domID("searchCode2").value.toLowerCase();
  var kQTKiem = employeeArr.filter((item) => item.ma.toLowerCase().includes(keySearch));
  renderDSNV(kQTKiem);
  domID("searchCode2").value ="";
}