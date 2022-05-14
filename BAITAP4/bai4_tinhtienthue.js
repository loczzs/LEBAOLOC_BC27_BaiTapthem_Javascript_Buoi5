function doanhnghiep(){
    var loaikhachEl = document.getElementById("loaikhach").value
    if (loaikhachEl === "C" ){
        document.getElementById("ketnoi").style.display = "block"
    }else{
        document.getElementById("ketnoi").style.display = "none"
    }
}

function baitap4(){
    var loaikhachEl = document.getElementById("loaikhach").value
    var makhachEl = document.getElementById("makhach").value
    var sokenhEl = + document.getElementById("sokenh").value
    var ketnoiEl = + document.getElementById("ketnoi").value
    
    hienThi(loaikhachEl,makhachEl,sokenhEl,ketnoiEl)
    
}
function hienThi(loaikhachEl,makhachEl,sokenhEl,ketnoiEl){
    var pay = 0
    if (loaikhachEl === "A"){
        alert('vui lòng chọn loại khách hàng')
    }else if (loaikhachEl === "B"){
        pay += 4.5 + 20.5 + sokenhEl * 7.5
        document.getElementById("result").innerHTML = `Mã khách hàng: ${makhachEl}; Tiền cáp: $ ${pay.toLocaleString()}.00`
    }else if (loaikhachEl === "C"){
        if(ketnoiEl <= 10){
            pay += 15 + 75 + 50 * sokenhEl
            document.getElementById("result").innerHTML = `Mã khách hàng: ${makhachEl}; Tiền cáp: $ ${pay.toLocaleString()}.00`
        }else if (ketnoiEl>10){
            pay += 15 + 75 + (ketnoiEl - 10)*5 + 50*sokenhEl
            document.getElementById("result").innerHTML = `Mã khách hàng: ${makhachEl}; Tiền cáp: $ ${pay.toLocaleString()}.00`
        }
    }
}