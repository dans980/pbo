class Kendaraan {
  constructor(merk, tahun) {
    this.merk = merk;
    this.tahun = tahun;
  }

  info() {
    return `Kendaraan merk ${this.merk}, tahun ${this.tahun}`;
  }
}

// Child class
class Mobil extends Kendaraan {
  constructor(merk, tahun, tipe) {
    super(merk, tahun);
    this.tipe = tipe;
  }

  infoMobil() {
    return `${this.info()}, tipe ${this.tipe}`;
  }
}

const mobilSaya = new Mobil("Honda", 2023, "SUV");
console.log("=== Informasi Kendaraan ===");
console.log(mobilSaya.infoMobil());

class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;
  }

  prosesPembayaran() {
    return `Memproses pembayaran sebesar Rp${this.jumlah}`;
  }
}

// Child class 1
class KartuKredit extends Pembayaran {
  constructor(jumlah, namaPemegang, nomorKartu) {
    super(jumlah);
    this.namaPemegang = namaPemegang;
    this.nomorKartu = nomorKartu;
  }

  prosesKartuKredit() {
    return `${this.prosesPembayaran()} menggunakan kartu kredit atas nama ${this.namaPemegang}`;
  }
}

class EWallet extends Pembayaran {
  constructor(jumlah, namaAkun, platform) {
    super(jumlah);
    this.namaAkun = namaAkun;
    this.platform = platform;
  }

  prosesEWallet() {
    return `${this.prosesPembayaran()} via ${this.platform} (akun: ${this.namaAkun})`;
  }
}

console.log("\n=== Informasi Pembayaran ===");

const transaksi1 = new KartuKredit(500000, "Dani Eka Putra", "1234-5678-9012-3456");
console.log(transaksi1.prosesKartuKredit());

const transaksi2 = new EWallet(150000, "dani_eka", "Dana");
console.log(transaksi2.prosesEWallet());
