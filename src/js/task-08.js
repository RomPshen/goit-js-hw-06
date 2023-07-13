const form = document.querySelector(".login-form");
const inputs = documents.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

inputs.foreach(input) => {
    if (input.value.trim() === '') { 
    alert("error")
    }
};

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