import {Student} from '../js/model.js'

let popupContent = domID('popupContent');
const containBlur = () =>{
  let blur = domID('blur');
  let blur2 = domID('blur2');
  blur.classList.toggle('active');
  blur2.classList.toggle('active');
}

let studentArr = [];
let dataJson = localStorage.getItem('DSSV_LOCAL');
if(dataJson != null){
  let result = JSON.parse(dataJson);
  studentArr = result.map((item) => new Student(
    item.hoTen,
    item.diaChi,
    item.ma,
    item.email,
    item.toan,
    item.ly,
    item.hoa,
  ));
  renderDSSV(studentArr);
}

//THÊM SINH VIÊN
/**
 * B1. Tạo 1 mảng rỗng ở bên ngoài.
 * B2. dom đến giao diện lấy thông tin.
 * B3. Tạo object tương ứng với từng thông tin.
 * B4. VALIDATE.
 * B5. studentArr sẽ push student vào chính nó.
 * B6. Đem mảng đã được đổi thành JSON với 1 mã xuống localStorage.
 * B7. Lấy array đi xử lý tiếp ~ renderDSSV.
 */
domID('btnThemSV').onclick = () => {
    popupContent.classList.remove("openPopup");
    popupContent.style.transform ="translateY(-600px)";
    containBlur();
    //2.
    let hoTen = domID('name').value;
    let diaChi = domID('address').value;
    let ma = domID('identify').value;
    let email = domID('email').value;
    let toan = domID('math').value*1;
    let ly = domID('physical').value*1;
    let hoa = domID('chemistry').value*1;
    //3.
    const student = new Student(hoTen, diaChi, ma, email, toan, ly, hoa); 
    //4.
    let isValid = kiemTraNhap('name', 'tbTen', 0) & kiemTraNhap('address', 'tbDiaChi', 1) & kiemTraNhap('identify', 'tbIdentify', 2) & kiemTraNhap('email', 'tbEmail', 3) & kiemTraNhap('math', 'tbMath', 4) & kiemTraNhap('physical', 'tbPhysical', 5) & kiemTraNhap ('chemistry', 'tbChemistry', 6); 
    isValid = isValid && kiemTraTenLaChu('name', 'tbTen') & kiemTraSo(student.ma, "tbIdentify", 9) & kiemTraSo(student.toan, "tbMath", 11) & kiemTraSo(student.ly, "tbPhysical", 12) & kiemTraSo(student.hoa, "tbChemistry", 13) & kiemTraEmail(student.email, "tbEmail",10);
    isValid = isValid && kiemTraTrung(student.hoTen, studentArr) & kiemTraDoDai(student.ma, "tbIdentify", 5, 5, 14);
    if(isValid){
      //5.
      studentArr.push(student);
      //6.
      localStorage.setItem('DSSV_LOCAL', JSON.stringify(studentArr));
      //8.
      renderDSSV(studentArr);
    } else if(!isValid){
     popupContent.classList.add("openPopup");
     containBlur();
     popupContent.style.transform ="translateY(-188px)";
    }
}

//XOÁ SINH VIÊN.
/**
 * B1. Dùng filter lọc ra, xoá được nếu tên trong studentArr khác với tên truyền renderDSSV .
 * B2. Lấy array đi xử lý tiếp ~ renderDSSV. 
 */

window.xoaSV = (id) => {
  studentArr = studentArr.filter(item => item.hoTen != id);
  localStorage.setItem('DSSV_LOCAL', JSON.stringify(studentArr));
  renderDSSV(studentArr);
} 

//SỬA SINH VIÊN.
/**
 * B1. Dùng findIndex tìm vị trí,
 * B2. Tạo biến trung gian và gán vị trí bằng vào mảng.
 * B3. dom đến chỗ hiện giao diện và thay bằng vị trí đã tìm được.
 */
window.suaSV = (id) => {
  //Thêm popup và thêm blur.
  popupContent.classList.add("openPopup");
  containBlur();
  //Hiện nút cập nhật và ẩn nút thêm.
  domID('btnThemSV').style.display="none";
  domID('btnCapNhat').style.display="inline-block";
  //Ẩn thông báo khi ấn lại
  domID('tbTen').innerHTML = "";
  domID('tbDiaChi').innerHTML = "";
  domID('tbIdentify').innerHTML = "";
  domID('tbEmail').innerHTML = "";
  domID('tbMath').innerHTML = "";
  domID('tbPhysical').innerHTML = "";
  domID('tbChemistry').innerHTML = "";
  let viTri = studentArr.findIndex(item => item.hoTen == id);
  const sV = studentArr[viTri];
  domID('name').readOnly = true;
  domID('name').value = sV.hoTen;
  domID('address').value = sV.diaChi;
  domID('identify').value = sV.ma;
  domID('email').value = sV.email;
  domID('math').value = sV.toan;
  domID('physical').value = sV.ly;
  domID('chemistry').value = sV.hoa;
}

//CẬP NHẬT SINH VIÊN
/**
 * B1. dom lên giao diện lấy thông tin người dùng. 
 * B2. Tìm vị trí bằng findIndex dựa theo hoTen đã dom.
 * B3. Tạo object tương ứng với các biến đã dom.
 * B4. Lấy viTri để vào mảng và gán bằng object.
 * B5. VALIDATE.
 * B6. Dùng splice lấy vị trí, xoá đi 1 và thêm vào object ở trên.
 * B7. Lưu xuống localStorage và chuyển array thành JSON.
 * B8. Lấy array đi xử lý ~ render.
 */
domID('btnCapNhat').onclick = () =>{
  //Ẩn đi popup và ẩn lớp blur.
  popupContent.classList.remove("openPopup");
  containBlur();
  //1.
  let hoTen = domID('name').value;
  let diaChi = domID('address').value;
  let ma = domID('identify').value;
  let email = domID('email').value;
  let toan = domID('math').value*1;
  let ly = domID('physical').value*1;
  let hoa = domID('chemistry').value*1;
  //2.
  let viTri = studentArr.findIndex(item => item.hoTen == hoTen);
  //3.
  const student = new Student(hoTen, diaChi, ma, email, toan, ly, hoa);
  //4.
  studentArr[viTri] = student;
  //5.
  let isValid = kiemTraNhap('name', 'tbTen', 0) & kiemTraNhap('address', 'tbDiaChi', 1) & kiemTraNhap('identify', 'tbIdentify', 2) & kiemTraNhap('email', 'tbEmail', 3) & kiemTraNhap('math', 'tbMath', 4) & kiemTraNhap('physical', 'tbPhysical', 5) & kiemTraNhap ('chemistry', 'tbChemistry', 6); 
    isValid = isValid && kiemTraTenLaChu('name', 'tbTen') & kiemTraSo(student.ma, "tbIdentify", 9) & kiemTraSo(student.toan, "tbMath", 11) & kiemTraSo(student.ly, "tbPhysical", 12) & kiemTraSo(student.hoa, "tbChemistry", 13) & kiemTraEmail(student.email, "tbEmail",10);
    isValid = isValid && kiemTraDoDai(student.ma, "tbIdentify", 5, 5, 14);
    if(isValid){
      //6.
      studentArr.splice(viTri, 1, student);
      //7.
      localStorage.setItem('DSSV_LOCAL', JSON.stringify(studentArr));
      //8.
      renderDSSV(studentArr);
    } else{
      popupContent.classList.add("openPopup");
  containBlur();
    }
}

//SẮP XẾP THEO THỨ TỰ TĂNG DẦN.
function sortUp(){
    studentArr.sort((a,b) => {
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
  renderDSSV(studentArr);
}
//SẮP XẾP THEO THỨ TỰ GIẢM DẦN.
function sortDown(){
  studentArr.sort((a,b) => {
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
  renderDSSV(studentArr);
}
//NÚT TĂNG DẦN
domID('fullName1').onclick = () => {
  if(domID('sortUp').classList.toggle('active')){
      domID('sortUp').classList.add('active')
      domID('sortDown').classList.remove('active');
      sortUp();
  } else {
      domID('sortUp').classList.remove('active')
      domID('sortDown').classList.add('active');
      sortDown();
  };
}

//TÌM NGƯỜI DÙNG DỰA THEO MÃ.
/**
 * B1. dom tới nút tìm kiếm trên layout, gán thêm thành chữ thường.
 * B2. Khởi tạo biến và lọc những phần tử từ dSNV trả về những phần tử thuộc xếp loại, chữ thường, kiểm tra keySearch có tồn tại không.
 * B3. renderdSNhanVien có tham số là kQTKiem.
 */
domID("btnSearch1").onclick = () => {
  var keySearch = domID("searchCode1").value.toLowerCase();
  var kQTKiem = studentArr.filter((item) => item.ma.toLowerCase().includes(keySearch));
  renderDSSV(kQTKiem);
  domID("searchCode1").value ="";
}