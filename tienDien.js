function tienDien(){
    var ten = document.getElementById("ten").value;
    var so_kw = parseInt(document.getElementById("kw").value);

    var tong_tien;
    if (so_kw<=50){
        tong_tien = so_kw * 500;
    }else if(50<so_kw<=100){
        tong_tien = (50*500)+(so_kw-50)*650;
    }else if(100<so_kw<=200){
        tong_tien= (50*500)+(50*650)+(so_kw-100)*850;
    }else if(200<so_kw<=350){
        tong_tien= (50*500)+(50*650)+(100*850)+(so_kw-200)*1100;
    }else if(so_kw>350){
        tong_tien= (50*500)+(50*650)+(100*850)+(150*1100)+(so_kw-350)*1300;
    }
    var currentFormat = new Intl.NumberFormat("vn-VN");
    tong_tien = currentFormat.format(tong_tien);
    
    var tbTien = document.getElementById("thongBaoTien");
    tbTien.innerHTML="Tiền điện "+ ten + " phải trả là: "+tong_tien+"VNĐ";
}