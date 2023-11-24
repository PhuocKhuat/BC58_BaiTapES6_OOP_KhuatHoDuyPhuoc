import { Customer } from "./model.js";

let popupContent3 = domID('popupContent3');
const containBlur = () =>{
  let blur = domID('blur');
  let blur2 = domID('blur2');
  blur.classList.toggle('active');
  blur2.classList.toggle('active');
}

//1.
let customerArr = [];
let dataJson = localStorage.getItem("DSKH_LOCAL");
if(dataJson != null){
  let result = JSON.parse(dataJson);
  customerArr = result.map(item => 
    new Customer(
        item.hoTen,
        item.diaChi,
        item.ma,
        item.email,
        item.triGia,
        item.danhGia,
    ));
    renderDSKH(customerArr); 
}
//THÊM KHÁCH HÀNG:
/**
 * B1. Tạo 1 mảng rỗng ở bên ngoài.
 * B2. dom đến giao diện lấy thông tin.
 * B3. Tạo object tương ứng với từng thông tin.
 * B4. VALIDATE.
 * B5. Mảng sẽ push object.
 * B6. Lấy array xuống localStorage với 1 mã và chuyển array thành JSON.
 * B7. Lấy array đi xử lý tiếp ~ render.
 */
domID('btnThemKH').onclick = () => {
    popupContent3.classList.remove('openPopup3');
    containBlur();
    //2.
    let hoTen = domID('name3').value;
    let diaChi = domID('address3').value;
    let ma = domID('identify3').value;
    let email = domID('email3').value;
    let tenCongty = domID('companyName').value;
    let triGia = domID('invoiceValue').value;
    let danhGia = domID('evaluate').value;
    //3.
    const customer = new Customer (hoTen, diaChi, ma, email, tenCongty, triGia, danhGia);
    //4
    let isValid = kiemTraNhap('name3', 'tbTen3', 24) & kiemTraNhap('address3', 'tbDiaChi3', 1) & kiemTraNhap('identify3', 'tbIdentify3', 25) & kiemTraNhap('email3', 'tbEmail3', 3) & kiemTraNhap('companyName', 'tbCompanyName', 26) & kiemTraNhap('invoiceValue', 'tbInvoiceValue', 27) & kiemTraNhap('evaluate', 'tbEvaluate', 28); 
    isValid = isValid && kiemTraTenLaChu('name3', 'tbTen3') & kiemTraSo(customer.ma, "tbIdentify3", 30) & kiemTraSo(customer.triGia, "tbInvoiceValue", 31) & kiemTraEmail(customer.email, "tbEmail3",10);
    isValid = isValid && kiemTraTrung(customer.hoTen, customerArr) & kiemTraDoDai(customer.ma, "tbIdentify3", 5, 5, 32);
    if(isValid){
        //5.
        customerArr.push(customer);
        //6.
        localStorage.setItem('DSKH_LOCAL', JSON.stringify(customerArr));
        //7.
        renderDSKH(customerArr);
    } else{
        popupContent3.classList.add("openPopup3");
        containBlur();
        popupContent3.style.transform ="translateY(-250px)";
    }
}

//XOÁ NHÂN VIÊN
/**
 * B1. Dùng filter lọc ra những phần tử có hoTen khác với hoTen nhận từ id.
 * B2. Chuyển array thành JSON và lưu xuống LOCALSTORAGE.
 * B3. Lấy array đi xử lý tiếp ~ renderDSKH.
 */
window.xoaKH = (id) => {
    //1.
    customerArr = customerArr.filter(item => item.hoTen != id);
    //2.
    localStorage.setItem("DSKH_LOCAL", JSON.stringify(customerArr));
    //3.
    renderDSKH(customerArr);
}

//SỬA NHÂN VIÊN
/**
 * B1. Dùng findIndex tìm vị trí,
 * B2. Tạo biến trung gian và gán vị trí bằng vào mảng.
 * B3. dom đến chỗ hiện giao diện và thay bằng vị trí đã tìm được.
 */
window.suaKH = (id) => {
  //Thêm popup và thêm blur.
    popupContent3.classList.add('openPopup3');
    containBlur();
  //Hiện nút cập nhật và ẩn nút thêm.
    domID('btnCapNhat3').style.display ="inline-block";
    domID('btnThemKH').style.display = "none";
  //Ẩn thông báo khi ấn lại.
  domID('tbTen3').innerHTML = "";
  domID('tbDiaChi3').innerHTML = "";
  domID('tbIdentify3').innerHTML = "";
  domID('tbEmail3').innerHTML = "";
  domID('tbCompanyName').innerHTML = "";
  domID('tbInvoiceValue').innerHTML = "";
  domID('tbEvaluate').innerHTML = "";
    //1.
    let viTri = customerArr.findIndex(item => item.hoTen == id);
    //2.
    const KH = customerArr[viTri];
    //3.
    domID('name3').readOnly = true;
    domID('name3').value = KH.hoTen;
    domID('address3').value = KH.diaChi;
    domID('identify3').value = KH.ma;
    domID('email3').value = KH.email;
    domID('companyName').value = KH.tenCongty;
    domID('invoiceValue').value = KH.triGia;
    domID('evaluate').value = KH.danhGia;
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
domID('btnCapNhat3').onclick = () => {
    popupContent3.classList.remove('openPopup3');
    containBlur();
    //1.
    let hoTen = domID('name3').value;
    let diaChi = domID('address3').value;
    let ma = domID('identify3').value;
    let email = domID('email3').value;
    let tenCongty = domID('companyName').value;
    let triGia = domID('invoiceValue').value;
    let danhGia = domID('evaluate').value;
    //2.
    let viTri = customerArr.findIndex(item => item.hoTen == hoTen);
    //3.
    const customer = new Customer(hoTen, diaChi, ma, email, tenCongty, triGia,danhGia);
    //4.
    customerArr[viTri] = customer;
    //5. 
    let isValid = kiemTraNhap('name3', 'tbTen3', 24) & kiemTraNhap('address3', 'tbDiaChi3', 1) & kiemTraNhap('identify3', 'tbIdentify3', 25) & kiemTraNhap('email3', 'tbEmail3', 3) & kiemTraNhap('companyName', 'tbCompanyName', 26) & kiemTraNhap('invoiceValue', 'tbInvoiceValue', 27) & kiemTraNhap('evaluate', 'tbEvaluate', 28); 
    isValid = isValid && kiemTraTenLaChu('name3', 'tbTen3') & kiemTraSo(customer.ma, "tbIdentify3", 30) & kiemTraSo(customer.triGia, "tbInvoiceValue", 31) & kiemTraEmail(customer.email, "tbEmail3",10);
    isValid = isValid && kiemTraDoDai(customer.ma, "tbIdentify3", 5, 5, 32);
    //6.
    if(isValid){
      customerArr.splice(viTri, 1, customer);
      //7.
      localStorage.setItem("DSKH_LOCAL", JSON.stringify(customerArr));
      //8.
      renderDSKH(customerArr);
    }else{
      popupContent3.classList.add("openPopup3");
      containBlur();
  }
}

//SẮP XẾP THEO THỨ TỰ TĂNG DẦN.
function sortUp(){
  customerArr.sort((a,b) => {
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
renderDSKH(customerArr);
}
//SẮP XẾP THEO THỨ TỰ GIẢM DẦN.
function sortDown(){
  customerArr.sort((a,b) => {
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
  renderDSKH(customerArr);
}
//NÚT TĂNG/GIẢM DẦN
domID('fullName3').onclick = () => {
  if(domID('sortUp3').classList.toggle('active')){
      domID('sortUp3').classList.add('active')
      domID('sortDown3').classList.remove('active');
      sortUp();
  } else {
      domID('sortUp3').classList.remove('active')
      domID('sortDown3').classList.add('active');
      sortDown();
  };
}

//TÌM NGƯỜI DÙNG DỰA THEO MÃ.
/**
 * B1. dom tới nút tìm kiếm trên layout, gán thêm thành chữ thường.
 * B2. Khởi tạo biến và lọc những phần tử từ dSNV trả về những phần tử thuộc xếp loại, chữ thường, kiểm tra keySearch có tồn tại không.
 * B3. renderdSNhanVien có tham số là kQTKiem.
 */
 domID("btnSearch3").onclick = () => {
    var keySearch = domID("searchCode3").value.toLowerCase();
    var kQTKiem = customerArr.filter((item) => item.ma.toLowerCase().includes(keySearch));
    renderDSKH(kQTKiem);
    domID("searchCode3").value ="";
}
