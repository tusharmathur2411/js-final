

const cartDiv = (pr) => `
  <div class="cart-product" id="${pr.id}">
   <img src="${pr["preview"]}" height="100%"/><br/>
   <div>
     <h2>${pr["name"]}</h2>
     <h4>Amount: ${pr["price"] * pr["count"]}</h4>
     <button onClick="onDecrement(event)">${pr.count===1?"Remove":"-"}</button>
       <span id="item-count-${pr.id}">${pr["count"]}</span> 
     <button onClick="onIncrement(event)">+</button><br/>
   </div>
   <button onClick="onDelete(event)">Delete</button>
  </div>
 `

const updateCart = () => {
  const mainDiv = document.getElementById("main")
  mainDiv.innerHTML = ''
  const cart = JSON.parse(localStorage.getItem("cart"))
  if (cart.length===0) {
    mainDiv.innerHTML = 'Cart is empty.'    
  }
  else{
    let total = 0
    for (let pr of cart){
      mainDiv.innerHTML += cartDiv(pr);
      total += (pr["price"] * pr["count"])
    }
    mainDiv.innerHTML += `<h4>Total: ${total}</h4>`
  }
  mainDiv.innerHTML += '<a href="/"><button>Continue Shopping</button></a>'
  
}

const onIncrement = (e) => {
  const id = e.target.parentNode.id
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = cart.map(i => (i.id==id? {...i, count: i.count+1} : i))
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("storage"));
}

const onDecrement = (e) => {
  const id = e.target.parentNode.id
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = cart.map(i => (i.id==id? {...i, count: i.count-1} : i))
  cart = cart.filter(i => i.count !== 0)
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("storage"));
}

const onDelete = (e) => {
  const id = e.target.parentNode.id
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = cart.filter(i => i.id != id)
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("storage"));
}



// const id = window.location.search.substr(1)

// xhr.onreadystatechange = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     const res = JSON.parse(xhr.responseText);
    
//     console.log(res)

//     document.body.innerHTML = productDiv(res);
//   }
// };

// xhr.open(
//   "GET",
//   "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
//   true
// );

// xhr.send();
window.onload = updateCart;
window.onstorage = updateCart;