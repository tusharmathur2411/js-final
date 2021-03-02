/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
const navitems = document.getElementsByClassName("navitem")

for (let i = 0; i<navitems.length; i++ ) {
  console.log(navitems[i])
  navitems[i].addEventListener("click", (e) => {
    console.log(e.target.id)
    
  })
}

