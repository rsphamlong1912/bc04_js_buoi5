function traCuu(){
    var diem_chuan = parseInt(document.getElementById("diem_chuan").value);
    var mon_1 = parseInt(document.getElementById("mon1").value);
    var mon_2 = parseInt(document.getElementById("mon2").value);
    var mon_3 = parseInt(document.getElementById("mon3").value);
    var khu_vuc = parseInt(document.getElementById("khu_vuc").value);
    var uu_tien = parseInt(document.getElementById("uu_tien").value);

    var diem_tong;
    diem_tong = mon_1 + mon_2 +mon_3+khu_vuc+uu_tien;
   if ((mon_1==0) || (mon_2==0) || (mon_3==0)){
    var tagDiv = document.createElement("div");
    tagDiv.innerHTML = "*Bạn không đỗ vì điểm liệt 0" + "<br>" +"Tổng điểm: "+diem_tong;
    tagDiv.style.color = "red";
   }else{
       if (diem_tong>=diem_chuan){
        var tagDiv = document.createElement("div");
        tagDiv.innerHTML = "Bạn đã đỗ tuyển sinh! Chúc mừng bạn!" + "<br>" +"Tổng điểm: "+diem_tong;
        tagDiv.style.color = "green";
       }else{
        var tagDiv = document.createElement("div");
        tagDiv.innerHTML = "*Bạn không đỗ tuyển sinh. Cố gắng hơn bạn nhé!" + "<br>" +"Tổng điểm: "+diem_tong;
        tagDiv.style.color = "red";
       }
   }
   document.getElementById("cardFooter").innerHTML="";
   document.getElementById("cardFooter").appendChild(tagDiv);
}