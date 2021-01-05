function tienCap(){
    var ma_khach = parseInt(document.getElementById("ma_khach").value);
    var so_tk = parseInt(document.getElementById("so_tk").value);
    var cao_cap = parseInt(document.getElementById("cao_cap").value);
    var ket_noi = parseInt(document.getElementById("ket_noi").value);
    var hoaDon;
    var phi_co_ban;
    var phi_cao_cap;
    var tongTien;
    if (ma_khach==1){
        hoaDon = 4.5;
        phi_co_ban= 20.5;
        phi_cao_cap= 7.5 * cao_cap;
        tongTien = hoaDon + phi_co_ban +phi_cao_cap;
        var tbTien2 = document.getElementById("inTienCap");
        tbTien2.innerHTML="Hoá đơn của khách hàng "+ so_tk+ " là: "+tongTien+ "$" +"<br>"
        +"Trong đó:"+"<br>"+
        "Phí xử lí hoá đơn: 4.5$ <br>"+
        "Phí dịch vụ cơ bản: "+ "20.5$"+"<br>"+
        "Thuê "+ cao_cap +" kênh cao cấp: "+ phi_cao_cap+"$";
    }else if(ma_khach==2){
        if(ket_noi<=10){
            phi_co_ban = 75;
        }else if(ket_noi>10){
            phi_co_ban= 75;
            for (var i=11; i<=ket_noi; i++){
                phi_co_ban +=5;
            }
        }
        hoaDon = 15;
        phi_cao_cap= 50 * cao_cap;
        tongTien = hoaDon + phi_co_ban +phi_cao_cap;
        var tbTien2 = document.getElementById("inTienCap");
        tbTien2.innerHTML="Hoá đơn của doanh nghiệp "+ so_tk+ " là: "+tongTien+ "$" +"<br>"
        +"Trong đó:"+"<br>"+
        "Phí xử lí hoá đơn: 15$ <br>"+
        "Phí dịch vụ cơ bản: "+ phi_co_ban+"$ cho "+ket_noi+" kết nối"+"<br>"+
        "Thuê "+ cao_cap +" kênh cao cấp: "+ phi_cao_cap+"$";
    }else{
        var tbTien2 = document.getElementById("inTienCap");
        tbTien2.innerHTML="*Vui lòng nhập hợp lệ mã khách hàng";
        tbTien2.style.color="red";
    }
}