document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const uploadForm = document.getElementById('upload-form');
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    function showLogin() {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        uploadForm.classList.add('hidden');
    }

    function showSignUp() {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        uploadForm.classList.add('hidden');
    }

    function showUploadForm() {
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        uploadForm.classList.remove('hidden');
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Logged in successfully!');
        loginForm.classList.add('hidden');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Signed up successfully!');
        signupForm.classList.add('hidden');
    });

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = uploadForm.querySelector('input[name="title"]').value;
        const price = uploadForm.querySelector('input[name="price"]').value;
        const description = uploadForm.querySelector('textarea[name="description"]').value;
        const image = uploadForm.querySelector('input[name="image"]').files[0];

        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const itemHTML = `
                    <div class="product-item">
                        <img src="${e.target.result}" alt="${title}">
                        <h2>${title}</h2>
                        <p>$${price}</p>
                        <p>${description}</p>
                        <button class="button">Add to Cart</button>
                    </div>
                `;
                productList.innerHTML += itemHTML;
                uploadForm.classList.add('hidden');
            };
            reader.readAsDataURL(image);
        }
    });

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.product-item');

        searchResults.innerHTML = '';

        items.forEach(item => {
            const title = item.querySelector('h2').innerText.toLowerCase();
            if (title.includes(query)) {
                searchResults.appendChild(item.cloneNode(true));
            }
        });
    }

    window.showLogin = showLogin;
    window.showSignUp = showSignUp;
    window.showUploadForm = showUploadForm;
    window.performSearch = performSearch;
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
