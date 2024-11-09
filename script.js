document.getElementById("connectButton").addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Wallet connected:', accounts[0]);
            alert('Wallet connected: ' + accounts[0]);
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    } else {
        alert('Please install MetaMask or another Ethereum wallet.');
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Silakan verifikasi bahwa Anda bukan robot.");
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted:", { name, email, message });
    alert("Pesan Anda telah dikirim!");
});