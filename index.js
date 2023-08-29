// BAI 1

const A = 2;
const B = 1;
const C = 0.5;
const X = 0;

const D = 2.5;
const E = 1.5;
const F = 1;
const O = 0;



var diemChuan = 23.5;

function tinhDiem() {
    var monSo1 = document.getElementById("monSo1").value * 1;
    var monSo2 = document.getElementById("monSo2").value * 1;
    var monSo3 = document.getElementById("monSo3").value * 1;
    var thongBao = document.getElementById("thongBao");
    tong = monSo1 + monSo2 + monSo3 + loaiUuTienKhuVuc() + loaiUuTienDoiTuong();
    var ketQua = "Diem cua ban la: " + tong + "---ban da thi dau";
    var ketQua1 = "Diem cua ban la: " + tong + "---ban da truot vi mon so 1 cua ban = 0 ";
    if (monSo1 > 0 && monSo2 > 0 && monSo3 > 0 && tong >= diemChuan) {
        thongBao.innerText = ketQua
    } else if (monSo1 == 0 && monSo2 > 0 && monSo3 > 0) {
        thongBao.innerText = ketQua1
    } else if (monSo1 > 0 && monSo2 == 0 && monSo3 > 0) {
        thongBao.innerText = "Diem cua ban la: " + tong + "---ban da truot vi mon so 2 cua ban = 0 ";
    } else if (monSo1 > 0 && monSo2 > 0 && monSo3 == 0) {
        thongBao.innerText = "Diem cua ban la: " + tong + "---ban da truot vi mon so 3 cua ban = 0 ";
    } else if (monSo1 > 0 && monSo2 > 0 && monSo3 > 0 && tong < diemChuan) {
        thongBao.innerText = "Diem cua ban la: " + tong + "---ban da truot vi tong diem cua ban khong du";
    }

}

function loaiUuTienKhuVuc() {
    var khuVuc = document.getElementById("khuVuc").value;
    var content = "";
    if (khuVuc === "A") {
        content = A;
    } else if (khuVuc === "B") {
        content = B;
    } else if (khuVuc === "C") {
        content = C;
    } else if (khuVuc === "X") {
        content = X;
    } else {
        alert("vui long nhap dung khu vuc")
    }
    return content;
}
function loaiUuTienDoiTuong() {
    var doiTuong = document.getElementById("doiTuong").value;
    var loaiDoiTuong = "";
    if (doiTuong === "D") {
        loaiDoiTuong = D;
    } else if (doiTuong === "E") {
        loaiDoiTuong = E;
    } else if (doiTuong === "F") {
        loaiDoiTuong = F;
    } else if (doiTuong === "O") {
        loaiDoiTuong = O;
    } else {
        alert("vui long nhap dung Doi tuong")
    }
    return loaiDoiTuong;
}

// BAI 2
var tong = 0;
var kwDau = 50;
var kwHai = 100;
var kwBa = 200;
var kwBon = 350;
var kw1 = 0;
var kw2 = 0;
var kw3 = 0;
var kw4 = 0;
var kw5 = 0;
// var conLai = tren300;

function kwDauTien(soKw) {
    var result = 0;
    result = soKw * 500;
    return result;
}
function kwThuHai(kwDau, soKw) {
    var result = 0;
    kw1 = kwDau * 500;
    kw2 = (soKw - 50) * 650;
    result = kw1 + kw2;
    return result;
}
function kwThuBa(soKw) {
    var result = 0;
    kw1 = kwDau * 500;
    kw2 = kwDau * 650;
    kw3 = (soKw - 100) * 850;
    result = kw1 + kw2 + kw3;
    return result;
}
function kwThuBon(soKw) {
    var result = 0;
    kw1 = kwDau * 500;
    kw2 = kwDau * 650;
    kw3 = kwHai * 850;
    kw4 = (soKw - 200) * 1100;
    result = kw1 + kw2 + kw3 + kw4;
    return result;
}
function kwCuoi(soKw) {
    var result = 0;
    kw1 = kwDau * 500;
    kw2 = kwDau * 650;
    kw3 = kwHai * 850;
    kw4 = 150 * 1100;
    kw5 = (soKw - 350) * 1300;
    result = kw1 + kw2 + kw3 + kw4 + kw5;
    return result;
}


var btnDien = document.getElementById("btnDien");
btnDien.onclick = function tienDien() {
    var tenKhach = document.getElementById("tenKhach").value;
    var soKw = document.getElementById("soKw").value;

    if (soKw <= kwDau) {
        tong = kwDauTien(soKw);
    } else if (soKw > kwDau && soKw <= kwHai) {
        tong = kwThuHai(kwDau, soKw);
    } else if (soKw > kwHai && soKw <= kwBa) {
        tong = kwThuBa(soKw);
    } else if (soKw > kwBa && soKw <= kwBon) {
        tong = kwThuBon(soKw);
    } else if (soKw > kwBon) {
        tong = kwCuoi(soKw);
    }

    var ketQua = tenKhach + " la : "
    var thongBaoDien = document.getElementById("thongBaoDien");
    thongBaoDien.innerText = "tong so tien cua " + ketQua + tong + " vnd";
};


//BAI 3

var btnThuNhap = document.getElementById("btnThuNhap");
btnThuNhap.onclick = function layDuLieu() {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value;
    var soNguoi = document.getElementById("soNguoi").value;
    var tienTru = 4;
    var tienThem = 1.6;
    var tong = thuNhapNam - tienTru - soNguoi * 1.6;
    var ketQua = 0;
    if (tong > 0 && tong <= 60) {
        ketQua = tong * 5 / 100;
    } else if (tong > 60 && tong <= 120) {
        ketQua = tong * 10 / 100;
    } else if (tong > 120 && tong <= 210) {
        ketQua = tong * 15 / 100;
    } else if (tong > 210 && tong <= 384) {
        ketQua = tong * 20 / 100;
    } else if (tong > 348 && tong <= 624) {
        ketQua = tong * 25 / 100;
    } else if (tong > 624 && tong <= 960) {
        ketQua = tong * 30 / 100;
    } else if (tong > 960) {
        ketQua = tong * 35 / 100;
    }
    var content = "";
    //dong thu 1 
    content += "<tr>";
    content += "<td>" + hoVaTen + "</td>";
    content += "<td>" + thuNhapNam + "tr" + "</td>";
    content += "<td>" + soNguoi + "</td>";
    content += "<td>" + ketQua + "tr" + "</td>";
    content += "</tr>";

    var tBody = document.getElementById("tBody");
    tBody.innerHTML = content;
}
// bai 4
const suLyHoaDon = 4.5;
const suLyDichVu = 20.5;
const KenhCaoCap = 7.5;

const suLyHoaDonDN = 15;
const suLyDichVuDN1 = 75;
const KenhCaoCapDN = 50;


var soKenhKetNoi1 = 0;
var soKenhKetNoi2 = 0;


function tinhTienCap() {
    var thongBaoCap = document.getElementById("thongBaoCap");
    var slcKhachHang = document.getElementById("slcKhachHang").value;
    var slcKhachHang = document.getElementById("slcKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;

    var content = "";
    var tBody1 = document.getElementById("tBody1");
    if (slcKhachHang === "DoanhNghiep") {
        content += "<tr>"
        content += "<th>" + maKhachHang + "</th>"
        content += "<th>" + "Doanh Nghiep" + "</th>"
        content += "<th>" + tinhDoanhNghiep() + "$" + "</th>"
        content += "</tr>"
        tBody1.innerHTML = content;
    } else if (slcKhachHang === "NhaDan") {
        content += "<tr>"
        content += "<th>" + maKhachHang + "</th>"
        content += "<th>" + "Nha Dan" + "</th>"
        content += "<th>" + tinhNhaDan() + "$" + "</th>"
        content += "</tr>"
        tBody1.innerHTML = content;
    }
}


function doiDiabled() {

    var slcKhachHang = document.getElementById("slcKhachHang").value;
    var soKetNoi = document.getElementById("soKetNoi");

    switch (slcKhachHang) {

        case "DoanhNghiep":
            soKetNoi.disabled = false;
            break;
        case "NhaDan":
            soKetNoi.disabled = true;
            break;
        default:
            alert("vui long chon khach hang");
            break;
    }
    return slcKhachHang;
}


function tinhNhaDan() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhKetNoi = document.getElementById("soKenhKetNoi").value;
    var soKenhKetNoi = document.getElementById("soKenhKetNoi").value;
    tong = suLyHoaDon + suLyDichVu + (KenhCaoCap * soKenhKetNoi);
    return tong;
}
function tinhDoanhNghiep() {
    var soKetNoi = document.getElementById("soKetNoi").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhKetNoi = document.getElementById("soKenhKetNoi").value;
    var tong = 0;
    if (soKetNoi <= 10) {
        soKenhKetNoi1 = suLyHoaDonDN + (suLyDichVuDN1 * soKetNoi) + (KenhCaoCapDN * soKenhKetNoi);
        tong = soKenhKetNoi1;
    } else if (soKetNoi > 10) {
        soKenhKetNoi1 = suLyHoaDonDN + (suLyDichVuDN1 * 10) + (KenhCaoCapDN * soKenhKetNoi);
        soKenhKetNoi2 = suLyDichVuDN1 * (soKetNoi - 10);
        tong = soKenhKetNoi1 + soKenhKetNoi2;
    }
    return tong;
}

