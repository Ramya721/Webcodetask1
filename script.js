// Define the API URL
const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

// Get the search input element
const searchInput = document.getElementById('searchInput');

// Get the product container element
const productContainer = document.getElementById('productContainer');

// Fetch and display the products
async function fetchProducts() {
    try {
        // Fetch the products from the API
        const response = await fetch(apiUrl);
        const products = await response.json();

        // Clear the product container
        productContainer.innerHTML = '';

        // Loop through the products and display each one
        products.forEach(product => {
            // Check if the product matches the search input value
            if (product.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
                // Create the product element
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                // Create the product details
                const brandElement = document.createElement('h2');
                brandElement.textContent = `Brand: ${product.brand}`;

                const nameElement = document.createElement('h3');
                nameElement.textContent = `Name: ${product.name}`;

                const priceElement = document.createElement('p');
                priceElement.textContent = `Price: ${product.price}`;

                const imageElement = document.createElement('img');
                imageElement.src = product.image_link;

                const linkElement = document.createElement('a');
                linkElement.href = product.product_link;
                linkElement.textContent = 'Product Link';

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = `Description: ${product.description}`;

                // Append the product details to the product element
                productElement.appendChild(brandElement);
                productElement.appendChild(nameElement);
                productElement.appendChild(priceElement);
                productElement.appendChild(imageElement);
                productElement.appendChild(linkElement);
                productElement.appendChild(descriptionElement);

                // Append the product element to the product container
                productContainer.appendChild(productElement);
            }
        });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
    }
}

// Add event listener to search input for filtering products
searchInput.addEventListener('input', fetchProducts);

// Fetch and display the initial set of products
fetchProducts();
