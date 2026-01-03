import {ask} from "../utils/input.js"
import {formatHarga} from "../utils/format.js"
import {menuData} from "../data/menu.js"
import { addToCart } from "./cart.js"

export async function searchMenu() {
    console.clear()
    const keyword = await ask("Masukan kata pencarian: ")

    let found = false

    for(let i = 0; i< menuData.length; i++){
        if(menuData[i].namaMakanan.toLowerCase().includes(keyword.toLowerCase())){
            console.log(`${menuData[i].id}. ${menuData[i].namaMakanan} | Stok: ${menuData[i].stok}`)
            found = true
        }
    }

    if(!found){
        console.log("Menu makanan tidak ditemukan")
    }

    await ask("\nEnter untuk kembali...")
}