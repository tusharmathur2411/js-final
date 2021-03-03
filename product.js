let xhr = new XMLHttpRequest()

const productDiv = (pr) => `
  <img src="${pr["preview"]}" width="30%"/>
  
  <button onClick="onAdd()">Add to Cart</button>
  
`

const id = window.location.search.substr(1)
let product;

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    product = JSON.parse(xhr.responseText);
    
    console.log(product)

    document.body.innerHTML = productDiv(product);
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
  true
);

xhr.send();

const onAdd = () => {
  let cart = JSON.parse(localStorage.getItem("cart"))
  const current = cart.filter(i => i.id==id)[0]
  if (current===undefined) {
    product.count = 1
    cart.push(product)
  }
  else{
    cart = cart.map(i => (i.id==id? {...i, count: i.count+1} : i))
  }
  
  localStorage.setItem("cart", JSON.stringify(cart))
}