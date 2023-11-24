const renderDSSV = (studentArr) => {
    //Tạo 1 chuỗi rỗng.
    let contentHTML = "";
    //Dùng forEach duyệt những phần tử.
    studentArr.forEach((item) => {
        //Chuỗi rỗng += dòng tr.
        contentHTML += `
        <tr>
           <td class="text-center border-2">${item.hoTen}</td>
           <td class="text-center border-2">${item.diaChi}</td>
           <td class="text-center border-2">${item.ma}</td>
           <td class="text-center border-2">${item.email}</td>
           <td class="text-center border-2">${item.tinhDTB()}</td>
           <td class="text-center border-2">
           <button class='btn btn-danger w-1/2' onclick="xoaSV('${item.hoTen}')">Delete</button>
           <button class='btn btn-warning' onclick="suaSV('${item.hoTen}')">Edit</button>
           </td>
        </tr>
        `
    })
    //
    domID('tableList1').innerHTML = contentHTML;
  }

  const renderDSNV = (employeeArr) => {
    //Tạo 1 chuỗi rỗng.
    let contentHTML = "";
    //Dùng forEach duyệt những phần tử trong mảng.
    employeeArr.forEach((item) =>{
       contentHTML += `
       <tr>
           <td class="text-center border-2">${item.hoTen}</td>
           <td class="text-center border-2">${item.diaChi}</td>
           <td class="text-center border-2">${item.ma}</td>
           <td class="text-center border-2">${item.email}</td>
           <td class="text-center border-2">${item.tinhLuong()}</td>
           <td class="text-center border-2">
           <button class='btn btn-danger w-1/2' onclick="xoaNV('${item.hoTen}')">Delete</button>
           <button class='btn btn-warning' onclick="suaNV('${item.hoTen}')">Edit</button>
           </td>
        </tr> 
        `
    })
    domID('tableList2').innerHTML = contentHTML;
  }

  const renderDSKH = (customerArr) => {
    //Tạo 1 chuỗi rỗng.
    let contentHTML = "";
    //Dùng forEach duyệt những phần tử.
    customerArr.forEach((item) => {
        //Chuỗi rỗng += dòng tr.
        contentHTML += `
        <tr>
           <td class="text-center border-2">${item.hoTen}</td>
           <td class="text-center border-2">${item.diaChi}</td>
           <td class="text-center border-2">${item.ma}</td>
           <td class="text-center border-2">${item.email}</td>
           <td class="text-center border-2">${item.tenCongty}</td>
           <td class="text-center border-2">${item.triGia}</td>
           <td class="text-center border-2">${item.danhGia}</td>
           <td class="text-center border-2">
           <button class='btn btn-danger w-1/2' onclick="xoaKH('${item.hoTen}')">Delete</button>
           <button class='btn btn-warning' onclick="suaKH('${item.hoTen}')">Edit</button>
           </td>
        </tr>
        `
    })
    //
    domID('tableList3').innerHTML = contentHTML;
  }