const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const formEls = evt.currentTarget.elements;

    const mail = formEls.email.value;
    const password = formEls.password.value;

    const formData = {
        mail,
        password,
    };
    console.log(formData);
}