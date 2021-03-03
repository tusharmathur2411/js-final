const navbar = `
  <div>
    <a href="">SHOPLANE</a>
    <a href="/#clothing-div">Clothing</a>
    <a href="/#accessories-div">Accessories</a>
  </div>
  <input type="text" placeholder="Search"/>
  <a href="./cart.html"><img src="https://img.icons8.com/fluent/48/000000/fast-cart.png"/><span id="cart-count"></span></a>
`


document.getElementById("navbar").innerHTML = navbar

let cart = localStorage.getItem("cart");
localStorage.setItem("cart", (cart===null || cart===""?  JSON.stringify([]): cart));

document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0) || ""

window.addEventListener('storage', () => {
  
  let cart = localStorage.getItem("cart");
  document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0) || ""
});

