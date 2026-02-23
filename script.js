document.addEventListener('DOMContentLoaded', () => {
    // Initialize Leaflet Map
    const map = L.map('map').setView([34.0522, -118.2437], 15); // Los Angeles coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([34.0522, -118.2437]).addTo(map)
        .bindPopup('<b>Java Buzz Coffee Shop</b><br>123 Coffee Lane, Brewtown')
        .openPopup();

    // Fetch and Display Blogs
    const blogContainer = document.getElementById('blog-container');
    fetch('blogs.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(blog => {
                const blogCard = `
                    <div class="blog-card">
                        <img src="${blog.image}" alt="${blog.title}">
                        <div class="blog-card-content">
                            <h3>${blog.title}</h3>
                            <p><small>${blog.date}</small></p>
                            <p>${blog.excerpt}</p>
                            <a href="#" class="share-btn">Read More & Share</a>
                        </div>
                    </div>
                `;
                blogContainer.innerHTML += blogCard;
            });
        })
        .catch(err => console.error('Error loading blogs:', err));

    // Responsive Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#3e2723';
        navLinks.style.width = '100%';
        navLinks.style.textAlign = 'center';
        navLinks.style.padding = '1rem 0';
    });
});
