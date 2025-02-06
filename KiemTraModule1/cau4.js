class CongNhan {
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }
}

const danhSachCongNhan = [
    new CongNhan(1, "Trương Tấn A", "11-11-1997", "Quảng Nam", 2000, "Abc"),
    new CongNhan(2, "Trương Tấn B", "11-11-1998", "Đà Nẵng", 2000, "Abc"),
    new CongNhan(3, "Trương Tấn C", "11-11-1999", "Huế", 2000, "Abc"),
];

danhSachCongNhan.sort(function (a, b) {
    return a.hoTen.localeCompare(b.hoTen);
});

const tbody = document.getElementById("tbody");
danhSachCongNhan.forEach(function (cn) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${cn.stt}</td>
        <td>${cn.hoTen}</td>
        <td>${cn.ngaySinh}</td>
        <td>${cn.diaChi}</td>
        <td>${cn.luong.toLocaleString()} VNĐ</td>
        <td>${cn.chucVu}</td>
    `;
    tbody.appendChild(row);
});