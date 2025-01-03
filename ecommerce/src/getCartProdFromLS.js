import { updateCartValue } from "./updateCartValue";

export const getCartProdFromLS =()=>{
    let cartProducts=localStorage.getItem('cartProductLS');
    // console.log(cartProducts)
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    //update the cart buuton value
    updateCartValue(cartProducts);
    
    return cartProducts;
} 