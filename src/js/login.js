// validate
const form = document.querySelector('form');
const [email, password] = form.elements;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (email.value === '') {
        alert('Email is required');
        isValid = false;
    } else if (!email.value.includes('@')) {
        alert('Email is invalid');
        isValid = false;
    }

    if (password.value === '') {
        alert('Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        alert('Password must be at least 6 characters');
        isValid = false;
    }

    if (isValid) {
        form.submit();
        window.location.href = './../../public/index.html';
    }
})