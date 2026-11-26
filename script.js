// Simple demo interactions: product search, cart counter and newsletter message.
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');

document.querySelectorAll('.add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountElement.textContent = cartCount;
    button.textContent = 'Added ✓';
    setTimeout(() => { button.textContent = 'Add to Cart'; }, 900);
  });
});

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-col');
const noResults = document.getElementById('noResults');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  productCards.forEach((card) => {
    const matches = card.dataset.name.toLowerCase().includes(searchTerm);
    card.classList.toggle('d-none', !matches);
    if (matches) visibleCount += 1;
  });
  noResults.classList.toggle('d-none', visibleCount !== 0);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    productCards.forEach((card) => card.classList.remove('d-none'));
    noResults.classList.add('d-none');
  }
});

document.getElementById('newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('newsletterMessage').textContent = 'Thanks for subscribing! (Demo signup)';
  event.target.reset();
});
