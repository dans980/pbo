const mahasiswa = [
    { nama: "Dani Eka Putra", umur: 20, jurusan: "Informatika" },
    { nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];

// Simpan ke localStorage
localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));

console.log("Data mahasiswa disimpan ke localStorage!");

// Ambil kembali dari localStorage
const jsonString = localStorage.getItem("mahasiswa");
const mahasiswaList = JSON.parse(jsonString);

console.log("Daftar Mahasiswa:");
mahasiswaList.forEach(mhs =>
    console.log(`${mhs.nama} - ${mhs.jurusan}`)
);
