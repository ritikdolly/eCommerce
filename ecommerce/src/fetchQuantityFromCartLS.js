import { getCartProdFromLS } from "./getCartProdFromLS"

export const fetchQuantityFromCartLS=(id,price)=>{
    let cartProduct = getCartProdFromLS();

    let existingProduct= cartProduct.find((curProd)=> curProd.id === id);
    let quantity =1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price=existingProduct.price;
    }
    return {quantity,price}
}