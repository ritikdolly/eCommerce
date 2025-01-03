import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProdFromLS } from "./getCartProdFromLS";
import { incremantDecrement } from "./incremantDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import products from "/api/products.json";

let cartProducts=getCartProdFromLS();
// console.log(cartProducts)

let filterProduct=products.filter((curProd)=>{
    // console.log(curProd.id);
    return cartProducts.some((curElm)=> curElm.id === curProd.id);
})

// console.log(filterProduct)

const cartElm= document.querySelector("#productCartContainer");
const templateContainer= document.querySelector("#productCartTemplate");

const showCartProduct=()=>{
    filterProduct.forEach((curProd) => {
        const {category,id,image,name,price,stock}=curProd;
        
        const productClone=document.importNode(templateContainer.content,true)

        const LSActualData= fetchQuantityFromCartLS(id,price);

        productClone.querySelector("#cardValue").setAttribute('id',`card${id}`)
        productClone.querySelector(".category").textContent =category;
        productClone.querySelector(".productImage").src =image;
        productClone.querySelector(".productImage").alt =name;
        productClone.querySelector(".productName").textContent =name;

        productClone.querySelector(".productPrice").textContent= LSActualData.price;
        productClone.querySelector(".productQuantity").textContent=LSActualData.quantity;
        productClone.querySelector(".productQuantity").setAttribute("data-quantity",LSActualData.quantity);

        //handle increament and decrement
        productClone
            .querySelector(".stockElement")
            .addEventListener('click',(event)=>{
                incremantDecrement(event, id,stock,price);
            })

        productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=> removeProdFromCart(id) );

        cartElm.append(productClone)
    });
};

showCartProduct()

// calculating the card total in our cartProducts page
updateCartProductTotal();