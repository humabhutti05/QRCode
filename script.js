document.getElementById('generate').addEventListener('click', function() {
    const qrContainer = document.getElementById('qr-container');
    qrContainer.style.display = 'block'; // Show container
    setTimeout(() => qrContainer.style.opacity = '1', 100); // Smooth fade-in

    new QRious({
        element: document.getElementById('qr-code'),
        value: 'Prhlo Beta Yeah sab kr ka kuch nhi Milaga!',
        size: 250
    });
});
