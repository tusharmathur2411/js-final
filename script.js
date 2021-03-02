import home from './home.js'
import cart from './cart.js'
import product from './product.js'

const navitems = document.getElementsByClassName("navitem")

for (let i = 0; i<navitems.length; i++ ) {
  navitems[i].addEventListener("click", (e) => {
    const pathname = e.target.id;
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname];
  })
}


const routes = {
  '/' : home,
  '/cart' : cart,
  '/product' : product
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}

window.addEventListener('beforeunload', function (e) {
});