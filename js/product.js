/**
 * file: js/product.js
 * purpose: Product page functionality
 **/

// Color switching functionality
const colorOptions = document.querySelectorAll('.color-option');
const productImage = document.getElementById('productImage');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove active class from all options
    colorOptions.forEach(opt => opt.classList.remove('active'));
    
    // Add active class to clicked option
    option.classList.add('active');
    
    // Change product image
    const newImage = option.getAttribute('data-image');
    if (newImage) {
      productImage.src = newImage;
    }
  });
});

// Add to basket functionality
const addToBasketBtn = document.querySelector('.add-to-basket-btn');
if (addToBasketBtn) {
  addToBasketBtn.addEventListener('click', () => {
    // Add to basket logic here
    alert('Product added to basket!');
  });
}
