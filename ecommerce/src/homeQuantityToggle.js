export const homeQuantityToggle =(event, id, stock)=>{
    const currCardElm=document.querySelector(`#card${id}`);
    // console.log(currCardElm)

    const productQuatity=currCardElm.querySelector(".productQuantity")
    // console.log(productQuatity)

    let quantity=parseInt(productQuatity.getAttribute('data-quantity')) || 1;
    // console.log(quantity)

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }
    if (event.target.className === "cartdecrement") {
        if(quantity > 1){
            quantity -=1;
        }
    }

    productQuatity.innerText = quantity ;
    productQuatity.setAttribute("data-quantity", quantity)
    return quantity;
}