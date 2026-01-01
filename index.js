// inisialisasi penggunaan Readline untuk stdin dan stdout
const https = require("https");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let menuMakanan = [] //menyimpan menu makanan
let kerajang = [] //menyimpan makanan yang akan di checkout
let historyPembelian = [] //menyimpan history pembelian
const url = "https://raw.githubusercontent.com/Vincentius31/koda-b6-weekly1/refs/heads/main/data.json" //variable menyimpan url data

//function pengambilan data dengan async function dengan metode fetch serta menggunakan try-catch
async function ambilData() {
    try{
        const hasil = await fetch(url)
        const data = await hasil.json()
        menuMakanan = data
        console.log("Berhasil Input")
    } catch(err){
        console.log("Gagal Input")
    }
}

//tampilan utama pada console box
function menuUtama(){
    console.log("\=== Aplikasi Pemesanan Iga Bakar SiJangkung ===")
    console.log("1. Cari Menu Makanan")
    console.log("2. Lihat Keranjang Pembelian")
    console.log("3. History Pembelian")
    console.log("4. Checkout")

    rl.question("Pilih menu (1-4): ", pindahHalaman)
}

//penggunaan switch untuk handle halaman utama dengan fungsi untuk memberikan perintah pindah halaman
function pindahHalaman(pilihan){
    switch(pilihan){
        case "1":
        halamanMenu()
        break

        case "2":
        halamanKeranjangPembelian()
        break

        case "3":
        halamanHistoryPembelian()
        break

        case "4":
        halamanCheckout()
        break

        default: menuUtama()
    }

}
