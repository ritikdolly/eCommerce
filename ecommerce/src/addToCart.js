import { getCartProdFromLS } from "./getCartProdFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProdFromLS();
export const addToCart =(event, id ,stock)=>{

    let arrlocalStorageProd= getCartProdFromLS()    // local storage

    const curProdElm=document.querySelector(`#card${id}`);
    let quantity=curProdElm.querySelector(".productQuantity").innerText;
    let price = curProdElm.querySelector(".productPrice").innerText;
    console.log(quantity,price);
    price =price.replace("₹","")
    console.log(id)

    let existingProd= arrlocalStorageProd.find(
        (curProd)=> curProd.id === id
     );

    if (existingProd && quantity > 1 ) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price=Number(price* quantity);
        let updatedCart={id,quantity,price};

        updatedCart = arrlocalStorageProd.map((curProd)=> {
            // console.log("ckbjkbfkbf",curProd)
            return curProd.id === id ? updatedCart: curProd;
        });
        // console.log(updatedCart)
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
    }

    if (existingProd) {
        // alert("You have already Added in your cart")
        return false;
    }
    
    
    //changing in number
    quantity=Number(quantity);
    price=Number(price* quantity);

    // let updateCart ={id, quantity,price}
    // arrlocalStorageProd.push(updateCart)
    arrlocalStorageProd.push({id, quantity,price});
    localStorage.setItem('cartProductLS',JSON.stringify(arrlocalStorageProd));

    showToast("add",id)
    // //update the cart button value
    updateCartValue(arrlocalStorageProd);
}