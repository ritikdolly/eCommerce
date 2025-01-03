import { getCartProdFromLS } from "./getCartProdFromLS"

export const updateCartProductTotal=()=>{
    let totalCartProd= document.querySelector(".productSubTotal");
    let prodTax= document.querySelector(".productTax");
    let finalProdPrice= document.querySelector(".productFinalTotal");

   let LSCartProduct=getCartProdFromLS();
//    console.log(LSCartProduct);
    let totalProdPrice = LSCartProduct.reduce((accum,currElm)=>{
        let ProdPrice= (currElm.price) || 0;
        return accum +ProdPrice; 
    },0)
    // console.log(totalProdPrice)

    totalCartProd.innerText= `₹ ${totalProdPrice}`;

    let taxPrice= prodTax.innerText
    taxPrice = taxPrice.replace("₹","");
    // console.log(taxPrice);
    if(totalProdPrice === 0){
        prodTax.innerText= `₹ 0`
        taxPrice=0;        
    }
    finalProdPrice.innerText=`₹ ${Number(totalProdPrice) + Number(taxPrice)}`
}