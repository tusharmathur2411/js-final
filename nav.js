const navbar = `
  <div>
    <a id="logo" href="/">SHOPLANE</a>
    <a href="/#clothing-div">Clothing</a>
    <a href="/#accessories-div">Accessories</a>
  </div>
  </i><input type="text" placeholder="Search"/>
  <a id="cart-icon" href="./cart.html"><img src="https://img.icons8.com/fluent/48/000000/fast-cart.png"/></a>
`
const footer = `<div>
	<p class="footer-heading">Online Store</p>
	<a href="/" class="footer-link">Men Clothing</a>
	<a href="/" class="footer-link">Women Clothing</a>
	<a href="/" class="footer-link">Men Accessories</a>
	<a href="/" class="footer-link">Women Accessories</a>
</div>
<div>
	<p class="footer-heading">Helpful Links</p>
	<a href="/" class="footer-link">Home</a>
	<a href="/" class="footer-link">About</a>
	<a href="/" class="footer-link">Contact</a>
</div>
<div>
	<p class="footer-heading">Partners</p>
	<a href="/" class="footer-link">Zara</a>
	<a href="/" class="footer-link">Pantaloons</a>
	<a href="/" class="footer-link">Levis</a>
	<a href="/" class="footer-link">UCB</a>
	<a href="/" class="footer-link">+ Many More</a>
</div>
<div>
	<p class="footer-heading">Address</p>
	<p href="/" class="footer-link">Building 101</p>
	<p href="/" class="footer-link">Central Avenue</p>
	<p href="/" class="footer-link">LA - 902722</p>
	<p href="/" class="footer-link">United States</p>
</div>`

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("footer").innerHTML = footer;

let cart = localStorage.getItem("cart");
localStorage.setItem("cart", (cart===null || cart===""?  JSON.stringify([]): cart));

// document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0) || ""

const crt=  JSON.parse(cart).reduce((a,v) => (a+v.count),0)
document.getElementById("cart-icon").innerHTML =  crt? <span id="cart-count"></span>: ""

window.addEventListener('storage', () => {
  
  let cart = localStorage.getItem("cart");
  const crt=  JSON.parse(cart).reduce((a,v) => (a+v.count),0)
  document.getElementById("cart-icon").innerHTML =  crt? <span id="cart-count"></span>: ""
});

