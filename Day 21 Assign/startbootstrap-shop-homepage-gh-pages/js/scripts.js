const addToCartButtons= document.querySelectorAll('.add-to-cart');
const cartCountVal = document.getElementById('cartCountVal');
let cartCount=0;
cartCountVal.textContent = cartCount;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
    
      button.disabled = true;
        cartCount++;
    

// Set the content of the cart count badge
cartCountVal.textContent = cartCount;
console.log(cartCount);
  
      // Find the parent card element   
      const card = button.closest('.card');
  
      // Find the "Remove from Cart" button within the card
      const removeFromCartButton = card.querySelector('.remove-from-cart');
      console.log("Add to Cart button clicked!");
  
      // Enable the "Remove from Cart" button
      removeFromCartButton.disabled = false;
  
      // Update the cart badge count
      updateCartBadge();
      // Your code to handle the "Add to Cart" button click for each button
      // For example, you can add the item to the cart or update UI
     
    });
  });

  

  const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');

// Add click event listeners to each button
removeFromCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Disable the "Remove from Cart" button
    button.disabled = true;
    if(cartCount>=0){
       cartCount =cartCount-1;
    }
      cartCountVal.textContent = cartCount;
    // Find the parent card element
    const card = button.closest('.card');

    // Find the "Add to Cart" button within the card
    const addToCartButton = card.querySelector('.add-to-cart');

    // Enable the "Add to Cart" button
    addToCartButton.disabled = false;
    console.log("Remove From Cart");
    console.log(cartCount);

    // Update the cart badge count
    updateCartBadge();
  });
});

// Function to update the cart badge count
function updateCartBadge() {

  

  const cartBadge = document.querySelector('.cart-badge');
  cartBadge.textContent = cartCount.toString();

}
