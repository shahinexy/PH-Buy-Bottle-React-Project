const getStorageCard = () =>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString);
    }
    return [];
}

const saveCartToLs = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLs = id => {
    const cart = getStorageCard();
    cart.push(id)
    // save to local storage
    saveCartToLs(cart);
}

export { addToLs, getStorageCard }