document.getElementById('generate').addEventListener('click', function() {
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: 'Prhlo Beta Yeah sab kr ka kuch nhi Milaga!',
        size: 250
    });
});