

let xhr = new XMLHttpRequest()


const productDiv = (pr, id) => `
<a class='product-card' href="./product.html?${pr.id}">
  <div id=${pr.id}>
    <img src="${pr["preview"]}" width="100%"/>
    <h4>${pr["name"]}</h4>
    <h6>${pr["brand"]}</h6>
    <h6>${pr["price"]}</h6>
  </div>
</a>`

const banners = ["https://imgur.com/96OnkX7.png", "https://imgur.com/KtGxwnN.png", "https://imgur.com/sfjg9R8.png", "https://imgur.com/p0wdadG.png"];
let banner_id = 0

setInterval(() => {
  banner_id = banner_id===3 ? 0 : banner_id+1;
  document.getElementById("img-bnr").src = banners[banner_id]
}, 5000)

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let clothing = document.getElementById("clothing");
    let accessories = document.getElementById("accessories");
    const res = JSON.parse(xhr.responseText);
    
    console.log(res[0])

    for (let id in res) {
      if (!res[id]["isAccessory"]) {
        clothing.innerHTML += productDiv(res[id], id);
      }
    }

    for (let id in res) {
      if (res[id]["isAccessory"]) {
        accessories.innerHTML += productDiv(res[id], id);
      }
    }
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  true
);

xhr.send();

