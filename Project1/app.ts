const form = document.getElementById('contactForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    alert(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn qua email: ${email}.`);
});
