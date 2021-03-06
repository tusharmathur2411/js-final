let xhr = new XMLHttpRequest()


const productDiv = (pr, id) => `
<a class='product-card' href="./product.html?${pr.id}">
  <img src="${pr["preview"]}" width="100%"/>
  <div class="product-card-desc" id=${pr.id}>
    <h4>${pr["name"]}</h4>
    <h6 class="brand">${pr["brand"]}</h6>
    <h6 class="price">Rs. ${pr["price"]}</h6>
  </div>
</a>`

const banners = ["https://cdn.glitch.com/cb384e5b-ed54-40c9-81c9-952d70798b31%2Fbanner-img-0.png?v=1614775610309",
                 "https://cdn.glitch.com/cb384e5b-ed54-40c9-81c9-952d70798b31%2Fbanner-img-1.png?v=1614775711856",
                 "https://cdn.glitch.com/cb384e5b-ed54-40c9-81c9-952d70798b31%2Fbanner-img-2.png?v=1614775712494",
                 "https://cdn.glitch.com/cb384e5b-ed54-40c9-81c9-952d70798b31%2Fbanner-img-3.png?v=1614775715032"];

let banner_id = 0
document.getElementById("img-bnr").src = banners[banner_id];

setInterval(() => {
  document.getElementById("btn-"+banner_id).classList.remove("curr")
  banner_id = banner_id===3 ? 0 : banner_id+1;
  document.getElementById("img-bnr").src = banners[banner_id];
  document.getElementById("btn-"+banner_id).classList.add("curr")
}, 3000)

const buttons = document.getElementsByClassName("banner-btn")

for (let _ of buttons) {
  _.addEventListener("click", (ev) => {
    document.getElementById("btn-"+banner_id).classList.remove("curr")
    banner_id = parseInt(ev.target.id.slice(-1))
    document.getElementById("img-bnr").src = banners[banner_id]
    document.getElementById("btn-"+banner_id).classList.add("curr")
  })
}

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let clothing = document.getElementById("clothing");
    let accessories = document.getElementById("accessories");
    const res = JSON.parse(xhr.responseText);
    
    // console.log(res[0])

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

