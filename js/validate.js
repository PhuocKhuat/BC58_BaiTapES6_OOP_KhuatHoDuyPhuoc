let mangThongBao = [
    //1 - 14
    "Vui lòng nhập tên sinh viên", "Vui lòng nhập địa chỉ", "Vui lòng nhập mã sinh viên", "Vui lòng nhập email", "Vui lòng nhập điểm toán", "Vui lòng nhập điểm lý", "Vui lòng nhập điểm hoá", "Tên sinh viên đã được sử dụng", "Nhập tên bằng chữ cái", "Nhập mã sinh viên bằng số", "Nhập đúng định dạng email", "Nhập điểm toán bằng số", "Nhập điểm lý bằng số", "Nhập điểm hoá bằng số", "Mã Sinh viên chứa 5 số",
    //15 - 23 
    "Vui lòng nhập tên nhân viên", "Vui lòng nhập mã nhân viên", "Vui lòng nhập số ngày làm", "Vui lòng nhập lương mỗi ngày", "Tên nhân viên đã được sử dụng", "Nhập mã nhân viên bằng số", "Nhập số ngày làm bằng số", "Nhập lương theo ngày bằng số","Nhập mã nhân viên chứa 5 số",
    //24 - 31
    "Vui lòng nhập tên khách hàng", "Vui lòng nhập mã khách hàng", "Vui lòng nhập tên công ty", "Vui lòng nhập trị giá hoá đơn", "Vui lòng nhập đánh giá", "Tên khách hàng đã được sử dụng", "Nhập mã khách hàng bằng số", "Nhập trị giá hoá đơn bằng số",
    "Nhập mã khách hàng chứa 5 số"
];
//KIỂM TRA TRÙNG TÊN
const kiemTraTrung = (object, array) =>{
    var viTri = array.findIndex((item) => item.hoTen == object);
    //Bằng -1 là chưa tìm thấy (chưa trùng), đúng mục đích nên hợp lệ
    if(viTri == -1){
     //hợp lệ
     domID('tbTen').innerHTML = "";
     domID('tbTen2').innerHTML = "";
     domID('tbTen3').innerHTML = "";
     return true;
    }
    domID('tbTen').innerHTML = mangThongBao[7];
    domID('tbTen2').innerHTML = mangThongBao[19];
    domID('tbTen3').innerHTML = mangThongBao[29];
    return false;
 }

//KIỂM TRA NHẬP
const kiemTraNhap = (id, idThongBao, indexChuoiTB) => {
   //dom tới bộ id.
   var field = domID(id).value; 
   //dom tới bộ id thông báo.
   //Nếu field là rỗng, thì sẽ hiện câu thông báo.
   if(field == "" || field == null){ //Hoặc ghi ten.length = 0
    domID(idThongBao).innerHTML = mangThongBao[indexChuoiTB];
    //Nếu không nhập kq là sai trả về false.
    return false;
   } else {
    domID(idThongBao).innerHTML = "";
    //Nếu nhập kq là đúng trả về true.
    return true;
   }   
}

//KIỂM TRA TÊN LÀ CHỮ.
const kiemTraTenLaChu = (id, idThongBao) => {
    var field = domID(id).value;
    //Kiểm tra mảng là họ và tên là 2 từ trở lên không dấu vd: DUY PHUOC
    var mangTen = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //Biến kiemTraTen sẽ kiểm tra mangTen có giống như mảng tên đã khai báo bên trên không.
    //match là lấy domID kiểm tra mangTen
    if(mangTen.test(field)){
        //Hợp lệ
        domID(idThongBao).innerHTML = "";
        return true;
    } else{
        domID(idThongBao).innerHTML = mangThongBao[8];
        return false;
    }
}

//KIỂM TRA SỐ
const kiemTraSo = (objectValue, idThongBao, indexChuoiTB) =>{
    const re = /\d+/;
    if(re.test(objectValue)){
        domID(idThongBao).innerHTML = "";
        return true;
    }
    domID(idThongBao).innerHTML = mangThongBao[indexChuoiTB];
    return false;
}

//KIỂM TRA ĐỘ DÀI KÍ TỰ NHẬP.
const kiemTraDoDai = (objectValue, idThongBao, minLength, maxLength, indexChuoiTB) => {
    var length = objectValue.length;
    if(minLength <= length && length <= maxLength){
        domID(idThongBao).innerHTML = "";
        return true;
    }  
    domID(idThongBao).innerHTML = mangThongBao[indexChuoiTB];
    return false;
}

//KIỂM TRA EMAIL.
function kiemTraEmail(objectValue, idThongBao, indexChuoiTB){
    //re LÀ ĐỊNH DẠNG EMAIL
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(objectValue)){
    //test là lấy re kiểm tra objectValue
    //Hợp lệ
    domID(idThongBao).innerHTML = "";
    return true;
  } 
  domID(idThongBao).innerHTML = mangThongBao[indexChuoiTB];
  return false;
}