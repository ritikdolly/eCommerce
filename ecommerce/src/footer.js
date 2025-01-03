const footerHTML=`
 <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="images/ecoLogo.png" alt="logo">
        <p>Welcome to Ritik EcoStore, your ultimate destination for cutting-edge gadgets!</p>
      <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards">
    </div>
    <div class="content_2">
      <h4>SHOPPING</h4>
      <a href="#">Computer Store</a>
      <a href="#">Laptop Store</a>
      <a href="#">Accessories</a>
      <a href="#">Sale & Discount</a>
    </div>
    <div class="content_3">
      <h4>Experience</h4>
      <a href="contact.html">Contact Us</a>
      <a href="" target="_blank">Payment Method</a>
      <a href="" target="_blank">Delivery</a>
      <a href="" target="_blank">Return and Exchange</a>
    </div>
    <div class="content_4">
      <h4>NEWSLETTER</h4>
      <p>Be the first to know about new <br/>arrivals, sales & promos!</p>
      <div class="f_mail">
        <input type="email" placeholder="your Email">
        <i class="bx bx-envelope"></i>
      </div>
      <hr>
    </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Ritik Kumar</p>
      </div>
    </div>
  </footer>
`

const footerElm=document.querySelector(".section-footer");
footerElm.insertAdjacentHTML("afterbegin",footerHTML)