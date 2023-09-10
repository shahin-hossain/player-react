//empty variable neoa
// if condition 
//value return

// setdata
// storecart ke neoa
// quantity dekha 
// quantity jodi thake taile return kora
//na thakle add kora
const getDataFromDB = () => {
    let storedCart;

    const shoppingCart = localStorage.getItem('shopping-cart')
    if (shoppingCart) {
        storedCart = JSON.parse(shoppingCart);
    }
    else {
        storedCart = {};
    }
    return storedCart;
};

const setDataToDb = (id) => {
    const storedCart = getDataFromDB();

    const quantity = storedCart[id];
    if (!quantity) {
        storedCart[id] = 1;
    }
    else {
        return;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
}

export { getDataFromDB, setDataToDb };