//DOM TỚI CÁC BẢNG NỘI DUNG.
const content1 = domID('content1');
const content2 = domID('content2');
const content3 = domID('content3');
//DOM TỚI CÁC NÚT THÊM
const btnAStudent = domID('btnAStudent');
const btnAEmployee = domID('btnAEmployee');
const btnACustomer = domID('btnACustomer');
//DOM TỚI Ô SEARCH
const search1 = domID('search1');
const search2 = domID('search2');
const search3 = domID('search3');

search1.style.display = "block";
search2.style.display = "none";
search3.style.display = "none";

// NÚT STUDENT
const myContent1 = () => {
    content1.style.transform = "translateX(0px)";
    content2.style.transform = "translateX(220%)";
    content3.style.transform = "translateX(220%)";
    btnAStudent.style.transform = "translateX(-130%)";
    btnAEmployee.style.transform = "translateX(100%)";
    btnACustomer.style.transform = "translateX(150%)";
    search1.style.display = "block";
    search2.style.display = "none";
    search3.style.display = "none";
}
// NÚT EMPLOYEE
//TẠI SAO SỬ DỤNG WINDOW VÌ ĐỂ SỬ DỤNG IMPORT, EXPORT PHẢI ĐỂ TYPE = MODULE Ở THẺ SCRIPT LIÊN KẾT ĐẾN ĐÂY
const myContent2 = () => {
    content2.style.transform = "translateX(0px)";
    content1.style.transform = "translateX(220%)";
    content3.style.transform = "translateX(220%)";
    btnAEmployee.style.transform = "translateX(-145%)";
    btnAStudent.style.transform = "translateX(150%)";
    btnACustomer.style.transform = "translateX(150%)";
    search1.style.display = "none";
    search2.style.display = "block";
    search3.style.display = "none";
}
//NÚT CUSTOMER
const myContent3 = () => {
    content3.style.transform = "translateX(0px)";
    content1.style.transform = "translateX(220%)";
    content2.style.transform = "translateX(220%)";
    btnACustomer.style.transform = "translateX(-140%)";
    btnAStudent.style.transform = "translateX(150%)";
    btnAEmployee.style.transform = "translateX(150%)";
    search1.style.display = "none";
    search2.style.display = "none";
    search3.style.display = "block";
}

//CÁC NÚT ADDSTUDENTS, ADDEMPLOYEE, ADDCUSTOMER VÀ LỚP BLUR.
//TẠO BLUR.
/**
 * B1. Tạo 1 id BLUR ở các thẻ cùng cấp với popup (nếu để popup ở trong thẻ có BLUR, popup bị BLUR đè).
 * B2. dom tới id BLUR ở nút mà muốn hiện.
 * B3. Thêm css cho thẻ có id BLUR (thêm .active).
 * B3. Bên file HTML, ban đầu id BLUR chưa có active, thì phương thức toggle sẽ thêm lớp active cho nó.  
 * B4. 
 */
const containBlur = () =>{
    let blur = domID('blur');
    let blur2 = domID('blur2');
    blur.classList.toggle('active');
    blur2.classList.toggle('active');
}
let popupContent = domID('popupContent');
let popupContent2 = domID('popupContent2');
let popupContent3 = domID('popupContent3');
btnAStudent.onclick = () => {
    popupContent.classList.add("openPopup");
    containBlur();
    domID('btnThemSV').style.display="inline-block";
    domID('btnCapNhat').style.display="none";
    domID('name').readOnly = false;
    domID('name').value = "";
    domID('address').value = "";
    domID('identify').value = "";
    domID('email').value = "";
    domID('math').value = "";
    domID('physical').value = "";
    domID('chemistry').value = "";
    //Ẩn thông báo khi ấn lại
    domID('tbTen').innerHTML = "";
    domID('tbDiaChi').innerHTML = "";
    domID('tbIdentify').innerHTML = "";
    domID('tbEmail').innerHTML = "";
    domID('tbMath').innerHTML = "";
    domID('tbPhysical').innerHTML = "";
    domID('tbChemistry').innerHTML = "";
}
btnAEmployee.onclick = () => {
    popupContent2.classList.add("openPopup2");
    containBlur();
    domID('btnCapNhat2').style.display = "none";
    domID('btnThemNV').style.display = "inline-block";
    domID('name2').readOnly = false;
    domID('name2').value = "";
    domID('address2').value = "";
    domID('identify2').value = "";
    domID('email2').value = "";
    domID('workingDay').value = "";
    domID('dailyWage').value = "";
    //Ẩn thông báo khi ấn lại
    domID('tbTen2').innerHTML = "";
    domID('tbDiaChi2').innerHTML = "";
    domID('tbIdentify2').innerHTML = "";
    domID('tbEmail2').innerHTML = "";
    domID('tbWorkingDay').innerHTML = "";
    domID('tbDailyWage').innerHTML = "";
}
btnACustomer.onclick = () => {
    popupContent3.classList.add("openPopup3");
    containBlur();
    popupContent3.style.transform ="translateY(-115px)";
    domID('btnCapNhat3').style.display = "none";
    domID('btnThemKH').style.display = "inline-block";
    domID('name3').readOnly = false;
    domID('name3').value = "";
    domID('address3').value = "";
    domID('identify3').value = "";
    domID('email3').value = "";
    domID('companyName').value = "";
    domID('invoiceValue').value = "";
    domID('evaluate').value = "";
    //Ẩn thông báo khi ấn lại
    domID('tbTen3').innerHTML = "";
  domID('tbDiaChi3').innerHTML = "";
  domID('tbIdentify3').innerHTML = "";
  domID('tbEmail3').innerHTML = "";
  domID('tbCompanyName').innerHTML = "";
  domID('tbInvoiceValue').innerHTML = "";
  domID('tbEvaluate').innerHTML = "";
}

//NÚT CLOSE
domID('btnDong').onclick = () => {
    popupContent.classList.remove("openPopup");
    containBlur();
}
domID('btnDong2').onclick = () => {
    popupContent2.classList.remove("openPopup2");
    containBlur();
}
domID('btnDong3').onclick = () => {
    popupContent3.classList.remove("openPopup3");
    containBlur();
}

