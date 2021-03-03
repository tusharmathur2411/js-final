

const cart = JSON.parse(localStorage.getItem("cart"))

console.log(cart)

const cartDiv = (pr) => `
  <div>
   <img src="${pr["preview"]}" width="20%"/><br/>
   <span>${pr["name"]}</span><br/>
   <button>-</button>
     <span>X${pr["count"]}</span><br/>   
   <button>+</button>
   <span>Amount: ${pr["price"] * pr["count"]}</span>
  </div>
 `

for (let pr of cart){
  document.body.innerHTML += cartDiv(pr);  
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
