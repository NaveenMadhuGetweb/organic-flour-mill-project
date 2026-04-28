

// Below code is for text animation (ease in texts)
document.addEventListener("DOMContentLoaded", function(event) {

  // Texts Ease In functionality codes 
    // Callback function to run when an element intersects
    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showtexts'); // Add the animation class
          observer.unobserve(entry.target); // Optional: stop observing after animation plays once
        }
      });
    };

      // Create a new observer
      const observer = new IntersectionObserver(intersectionCallback);
      // Select all elements to animate and observe them
      const items = document.querySelectorAll('.ease-in-text');
      items.forEach(item => {
        observer.observe(item);
    });

  // Texts ease Up Funtionality code
    const Callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showtexts'); // Add the animation class
          observer.unobserve(entry.target); // Optional: stop observing after animation plays once
        }
      });
    };
    const Observer = new IntersectionObserver(Callback);
      // Select all elements to animate and observe them
      const itemss = document.querySelectorAll('.upTxtOb');
      itemss.forEach(item => {
        Observer.observe(item);
    });


























// recipes File js 
//(filter recipes cards)
function showCard(cardId) {

    let cards = document.querySelectorAll('.recipe');
    cards.forEach(card => {
      
        if (cardId === 'all') {
            card.style.display = 'block';
        } 
        else if (card.id == cardId) {
            // console.log(card);
            card.style.display = 'block';
        }
        else {
            console.log( cardId + card.id);
            card.style.display = 'none';
        }
    });

}


// Recipes card scrolling code.
  const $RSbtn = document.querySelector("#RSbtn");
  const $LSbtn = document.querySelector("#LSbtn");
  let carouselQ = document.querySelector("#CustomCaroId");
  $RSbtn.addEventListener("click", function() {
    scrollRight();
  });
  
  $LSbtn.addEventListener("click", function() {
    scrollLeftSide();
  });

  function scrollRight() {
                                                                              // clientWidth - > Visible width of the element
                                                                              // scrollwidth -> Total full width of the content, including the part not visible
      const maxScrollLeft = carouselQ.scrollWidth - carouselQ.clientWidth;                                                                    // scrollLeft scrolled horizontally from the left
       if (carouselQ.scrollLeft >= maxScrollLeft - 5) {  // detecting scroll item is last
         carouselQ.scrollTo({                                               //  scrollTo -> method used -> Go to exact position
           left: 0,                                      // If at end → jump to start
           behavior: "smooth"
         });
       } else {
         carouselQ.scrollBy({                                                // scrollBy -> method useed-> from where you are right now.
           left: 300,                                                        
           behavior: "smooth"
         });
       }
  }
  
  function scrollLeftSide(){
          if (carouselQ.scrollLeft <= 0) {
        // If at start → jump to end
        carouselQ.scrollTo({
          left: carouselQ.scrollWidth,
          behavior: "smooth"
        });
      } else {
        carouselQ.scrollBy({
          left: -300,
          behavior: "smooth"
        });
      }

  }






});






document.addEventListener("DOMContentLoaded", function() {

// Home Page
// Wholesale product Horizontal scrolling 

  const $WSLArrow = document.querySelector("#WSLArrow");
  const $WSRArrow = document.querySelector("#WSRArrow");
  let ws_carouselProdcut = document.querySelector(".ws-product-items-container");
  $WSLArrow.addEventListener("click", function() {
    // console.log("hi-left");

    wsscrollLeftSide(); 
  });
  
  $WSRArrow.addEventListener("click", function() {
    // console.log("hi-right");
    wsscrollRight();
  });

    function wsscrollRight() {
          const maxScrollLeft = ws_carouselProdcut.scrollWidth - ws_carouselProdcut.clientWidth;          // clientWidth - > Visible width of the element   // // scrollwidth -> Total full width of the content, including the part not visible // scrollLeft scrolled horizontally from the left                                                                              
         if (ws_carouselProdcut.scrollLeft >= maxScrollLeft - 5) {     // detecting scroll item is last  // If at end → jump to start
           ws_carouselProdcut.scrollTo({                                                               //  scrollTo -> method used -> Go to exact position
             left: 0,                                      
             behavior: "smooth"
           });
         } else {
           ws_carouselProdcut.scrollBy({                                                                 // scrollBy -> method useed-> from where you are right now.
             left: 100,                                                        
             behavior: "smooth"
           });
         }
  }
  
  function wsscrollLeftSide(){
          if (ws_carouselProdcut.scrollLeft <= 0) {              //If at start → jump to end 
        ws_carouselProdcut.scrollTo({
          left: ws_carouselProdcut.scrollWidth,
          behavior: "smooth"
        });
      } else {
        ws_carouselProdcut.scrollBy({
          left: 300,
          behavior: "smooth"
        });
      }

  }





// Retail Product Horizontal Scrolling
// Home page

  const $LArrow = document.querySelector("#LArrow");
  const $RArrow = document.querySelector("#RArrow");
  let carouselProdcut = document.querySelector(".product-items-container");

  $LArrow.addEventListener("click", function() {
    // console.log("hi-left");
    scrollRight();
  });
  
  $RArrow.addEventListener("click", function() {
    console.log("hi-right");
    scrollLeftSide(); 
  });

  function scrollRight() {
          const maxScrollLeft = carouselProdcut.scrollWidth - carouselProdcut.clientWidth;          // clientWidth - > Visible width of the element   // // scrollwidth -> Total full width of the content, including the part not visible // scrollLeft scrolled horizontally from the left                                                                              
         if (carouselProdcut.scrollLeft >= maxScrollLeft - 5) {     // detecting scroll item is last  // If at end → jump to start
           carouselProdcut.scrollTo({                                                               //  scrollTo -> method used -> Go to exact position
             left: 0,                                      
             behavior: "smooth"
           });
         } else {
           carouselProdcut.scrollBy({                                                                 // scrollBy -> method useed-> from where you are right now.
             left: 300,                                                        
             behavior: "smooth"
           });
         }
  }
  
  function scrollLeftSide(){
          if (carouselProdcut.scrollLeft <= 0) {              //If at start → jump to end 
        carouselProdcut.scrollTo({
          left: carouselProdcut.scrollWidth,
          behavior: "smooth"
        });
      } else {
        carouselProdcut.scrollBy({
          left: -300,
          behavior: "smooth"
        });
      }

  }




});







let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(productName, price)
{
    let product = {
        name: productName,
        price: price
    };

    cart.push(product);                                   // cart.push(product)   Adds product into array. 
                                                          // localStorage.setItem()  Stores cart permanently in browser. 
    localStorage.setItem("cart", JSON.stringify(cart));   // JSON.stringify()         Converts array/object → string     //-> Because localStorage stores only strings. 

    updateCartCount();

    alert("Product Added To Cart");
}

function updateCartCount()
{
  document.getElementById("cart-count").innerText = cart.length;
}


function removeItem(index)
{
    // console.log("helow", index);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);          

    localStorage.setItem( "cart", JSON.stringify(cart) );
    showCart();
    alert("Item Removed");
}


function showCart()
{
        let cart = JSON.parse(localStorage.getItem("cart")) || [];           // JSON.parse()  -> Converts stored string back into array/object.
        let output = "";
        
        cart.forEach((item, index) => {                                      // index -> array index
            output += `        
                    <div class="container-fluid px-1 px-md-4">
                        <div class="row">
                            <div class="product-card">
                                <div>
                                    <img class="w-100 " src="../images/images-final/${ item.name} ">
                                    <div class="pro-cart-caption">Price: ${ item.price} </div>
                                    <div class="pro-cart-caption" onclick="removeItem(${ index })">Remove from Cart</div>
                                    <div class="pro-cart-caption">Buy Now!</div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
        document.getElementById("cart-items-imgs").innerHTML = output;
}  









































// recipe page options to redirect method concept
// tow items added features 
// This is My Reference For 1. Redirect pages by js  2.use without DOM
function Recipe(recipe_name){
    const routes = {
    paratha: "../views/recipes/paratha.html",
    chola_puri: "../views/recipes/chola-puri.html"
  };
  // window.location.href = routes.paratha;

  var page;
  switch(recipe_name){
      case "paratha":
                      // console.log("hi");
                      page = routes.paratha;
                      break;
      case "chola-puri":
                      page = routes.chola_puri;
                      break;
      default:
                      page = "Not";
  }
    window.location.href = page;
}





  

// recipes File js 
//(filter recipes cards)
function showCard(cardId) {

    let cards = document.querySelectorAll('.recipe');
    cards.forEach(card => {
      
        if (cardId === 'all') {
                card.classList.remove('recipe-hide');
            // card.style.display = 'block';
        } 
        else if (card.classList.contains(cardId)) {
            card.classList.remove('recipe-hide');
            // console.log(card);
            // card.style.display = 'block';
        }
        else {
            card.classList.add('recipe-hide');
            // console.log( cardId + card.id);
            // card.style.display = 'none';
        }
    });

}


