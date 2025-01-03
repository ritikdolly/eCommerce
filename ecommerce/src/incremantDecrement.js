import { getCartProdFromLS } from "./getCartProdFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incremantDecrement=(event,id,stock,price)=>{
    const currCardElm=document.querySelector(`#card${id}`);
    // console.log(currCardElm)
    const productQuatity=currCardElm.querySelector(".productQuantity");
    // console.log(productQuatity)
    const productPrice= currCardElm.querySelector(".productPrice");
    // console.log(productPrice)

    let quantity = 1 ;
    let localStorgePrice=0;

    let localCartProduct= getCartProdFromLS()// local storage
    let existingProd= localCartProduct.find((curProd)=> curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStorgePrice= existingProd.price;
    }else{
        localStorgePrice =price;
        price=price
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity+= 1;
        }else if(quantity === stock){
            quantity = stock;
            localStorgePrice = price * stock;
        }
    }
    if (event.target.className === "cartdecrement") {
        if(quantity > 1){
            quantity -=1;
        }
    }

    // finally we will udate the price in localStorage
    localStorgePrice = price * quantity;
    localStorgePrice = Number(localStorgePrice.toFixed(2));

    let updatedCart={id,quantity,price : localStorgePrice};

        updatedCart = localCartProduct.map((curProd)=> {
            return curProd.id === id ? updatedCart: curProd;
        });
        // console.log(updatedCart)
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));

    productQuatity.setAttribute("data-quantity",quantity);
    productQuatity.innerText=quantity;
    productPrice.innerText= localStorgePrice;

    //update final price of items
    updateCartProductTotal()
};