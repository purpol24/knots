
    var cartItems = [];
    var totalPrice = 0;

    function addToCart(product, price) {
      cartItems.push(product);
      totalPrice += price;
      alert(product + " is added to cart!");
    }

    function displayCart() {
      var cartElement = document.getElementById("cart");
      cartElement.innerHTML = "";
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var itemElement = document.createElement("p");
        itemElement.textContent = item;
        cartElement.appendChild(itemElement);
      }
    }

    function checkout() {
      alert("Thanks for purchasing! Total Price: " + "₱" + totalPrice );
    }


    function displayCart() {
      alert("Products in cart: " + cartItems.join(", "));
    }

  