import { getCartProdFromLS } from "./getCartProdFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id)=>{
    let cartProducts=getCartProdFromLS();

    // get rest of this id so that we can update that data
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);
    // console.log(cartProducts);

    //update the local storeage after removing the item
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts))

    //to remove the div onclick button
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        //show toat when product cart remove
        showToast("delete",id) 
    }
    updateCartValue(cartProducts);

    //update final price of items
        updateCartProductTotal()
}