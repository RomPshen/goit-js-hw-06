const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    
    const formEls = evt.currentTarget.elements;
    const mail = formEls.email.value;
    const password = formEls.password.value;

    inputs.forEach(input) => {
        if (formEls.value === "") { 
        alert("всі поля повинні бути заповнені")
        };
    };

    const formData = {
        mail,
        password,
    };
    console.log(formData);
    document.getElementsByClassName(".login-form").reset();
}

