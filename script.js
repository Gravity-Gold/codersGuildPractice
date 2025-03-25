document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

// clear error
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let valid = true;

// fetch values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
// start checking
// name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

// email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        valid = false;
    }

// message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }
// done checking
//     if success
    if (valid) {
        document.getElementById('formMessage').style.display = 'block';
        document.getElementById('formMessage').textContent = 'Your message has been sent successfully!';

// clear form
        document.getElementById('contactForm').reset();
    }
});


//check darkmode
if (localStorage.getItem('dark-Mode') === 'enabled') {
    document.body.classList.add('darkmode');
    document.getElementById('darkness').textContent = "Switch to Light";
}

function darkness() {
    const body = document.body;
    const button = document.getElementById('darkness');

    body.classList.toggle('darkmode');

    //save preferences
    if (body.classList.contains('darkmode')) {
        localStorage.setItem('dark-Mode', 'enabled');
        button.textContent = "Light";
    } else {
        localStorage.setItem('dark-Mode', 'disabled');
        button.textContent = "Darkness";
    }
}