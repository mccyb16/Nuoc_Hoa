function DangNhap() {
    var TaiKhoan = document.getElementById("Email");
    var tk = TaiKhoan.value;
    var MatKhau = document.getElementById("password");
    var mk = MatKhau.value;
    if(tk === "" && mk === ""){
        alert("Vui lòng nhập Email và mật khẩu")
    } else if(tk ===""){
        alert("Bạn chưa nhập Email");
        } else if(mk === ""){
            alert("Bạn chưa nhập mật khẩu");
                } else if(mk.length < 8){
                    alert("Mật khẩu phải dài tối thiểu 8 kí tự")
                    }else alert("Đăng nhập thành công");
}