function checkEmail(inputValue) {
    // Comparing email input with regex expression for check email https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression/51332395
    const error = document.getElementById('error')
    error.classList.add('active')
    if (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(inputValue)) {
        error.classList.add('light-green');
        error.classList.remove('red');
        error.innerHTML = "Alright, email have been sent !";
    } else {
        error.classList.add('red');
        error.classList.remove('light-green');
        error.innerHTML = "Oops! Please check your email";
    }
}