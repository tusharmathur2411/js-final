const navbar = `
  <div>
    <a id="logo" href="/">SHOPLANE</a>
    <a href="/#clothing-div">Clothing</a>
    <a href="/#accessories-div">Accessories</a>
  </div>
  </i><input type="text" placeholder="Search"/>
  <a id="cart-icon" href="./cart.html"><img src="https://img.icons8.com/fluent/48/000000/fast-cart.png"/><span id="cart-count"></span></a>
`
const footer = `<div>
	<p>Online Store</p>
	<a href="/">Men Clothing</a>
	<a href="/">Women Clothing</a>
	<a href="/">Men Accessories</a>
	<a href="/">Women Accessories</a>
</div>
<div>
	<p>Helpful Links</p>
	<a href="/">Home</a>
	<a href="/">About</a>
	<a href="/">Contact</a>
</div>
<div>
  <p>Partners</p>
	<a href="/">Zara</a>
	<a href="/">Pantaloons</a>
	<a href="/">Levis</a>
	<a href="/">UCB</a>
	<a href="/">+ Many More</a>
</div>
<div>
	<p>Address</p>
	<p href="/">Building 101</p>
	<p href="/">Central Avenue</p>
	<p href="/">LA - 902722</p>
	<p href="/">United States</p>
</div>`

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("footer").innerHTML = footer;

let cart = localStorage.getItem("cart");
localStorage.setItem("cart", (cart===null || cart===""?  JSON.stringify([]): cart));

document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0) || ""

window.addEventListener('storage', () => {
  
  let cart = localStorage.getItem("cart");
  document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0) || ""
});

