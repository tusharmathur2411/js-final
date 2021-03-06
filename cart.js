// ${pr.count===1?"Remove":"-"}

const cartDiv = (pr) => `
  <div class="cart-product" id="${pr.id}">
   <img src="${pr["preview"]}" height="100%"/><br/>
   <div class="cart-product-desc">
     <h2>${pr["name"]}</h2>
     <h4>Amount: ${pr["price"] * pr["count"]}</h4>
     <button onClick="onDecrement(event)">-</button>
       <span id="item-count-${pr.id}">${pr["count"]}</span> 
     <button onClick="onIncrement(event)">+</button><br/>
   </div>
   <button onClick="onDelete(event)">DELETE</button>
  </div>
 `

const updateCart = () => {
  const mainDiv = document.getElementById("left")
  const rightDiv = document.getElementById("right")
  mainDiv.innerHTML = ''
  rightDiv.innerHTML = ''
  const cart = JSON.parse(localStorage.getItem("cart"))
  if (cart.length===0) {
    mainDiv.innerHTML = '<div id="empty"><h1>Cart is empty.</h1></div>'
  }
  else{
    let total = 0
    mainDiv.innerHTML = `<h3>Total Items: ${cart.length}</h3>`
    for (let pr of cart){
      mainDiv.innerHTML += cartDiv(pr);
      total += (pr["price"] * pr["count"])
    }
    rightDiv.innerHTML += `<h2>Total Amount: ${total}</h2>`
    rightDiv.innerHTML += '<button onClick="placeOrder()">Place Order</button> <b>OR</b>'
  }
  rightDiv.innerHTML += `<a href="/"><button>Add${cart.length?" More " : " "}Items</button></a>`
  
}

const placeOrder = () => {
//   let xhr = new XMLHttpRequest();
  
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       const res = JSON.parse(xhr.responseText);

          // localStorage.setItem("cart", JSON.stringify([]));
          // window.location.href = "./confirmation.html";
      
//     }
//   };

//   xhr.open(
//     "POST",
//     "https://5d76bf96515d1a0014085cf9.mockapi.io/order",
//     true
//   );

//   xhr.send(localStorage.getItem("cart"));
  $.post('https://5d76bf96515d1a0014085cf9.mockapi.io/order', localStorage.getItem("cart"), function(res) {
      console.log(res);
      
  })
  localStorage.setItem("cart", JSON.stringify([]));
  window.location.href = "./confirmation.html";
}

const onIncrement = (e) => {
  const id = e.target.parentNode.parentNode.id
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = cart.map(i => (i.id==id? {...i, count: i.count+1} : i))
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("storage"));
}

const onDecrement = (e) => {
  const id = e.target.parentNode.parentNode.id
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

window.onload = updateCart;
window.onstorage = updateCart;