let xhr = new XMLHttpRequest()

const productDiv = (pr) => `
  
  
`

const id = window.location.search.substr(1)

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // let clothing = document.getElementById("clothing");
    // let accessories = document.getElementById("accessories");
    // todos.innerHTML = "";
    const res = JSON.parse(xhr.responseText);
    
    console.log(res[0])

    document.body.innerHTML = productDiv(res[id]);
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
  true
);

xhr.send();
