const form = document.getElementById('uploadForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.value) {
        e.preventDefault();
        message.textContent = "Please select a file before uploading.";
    } else {
        message.textContent = "Uploading your file...";
    }
});
