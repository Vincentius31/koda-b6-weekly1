const data = "https://raw.githubusercontent.com/Vincentius31/koda-b6-weekly1/refs/heads/main/data.json"

export let menuData = []

export async function loadMenu() {
    const res = await fetch(data)
    menuData = await res.json()
}