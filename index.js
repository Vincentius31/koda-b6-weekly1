let menuMakanan = [] //menyimpan menu makanan
let kerajang = [] //menyimpan makanan yang akan di checkout
let historyPembelian = [] //menyimpan history pembelian
const url = "https://raw.githubusercontent.com/Vincentius31/koda-b6-weekly1/refs/heads/main/data.json" //variable menyimpan url data

//Penggunaan readline untuk menggunakan stdin dan stdout
const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


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

