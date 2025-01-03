import './style.css';

import products from "/api/products.json";
import { showProductContainer } from './homeProductCards';
// console.log(products)

// define a function named 'showProductContainer' that takes an array of product as input
showProductContainer(products)