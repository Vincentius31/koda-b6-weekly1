export let cart = []

export function addToCart(item){
    return cart.push(item)
}

export function clearCart(){
    return cart = []
}