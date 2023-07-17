const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit );

function onFormSubmit(evt) {
    evt.preventDefault();
    
    const formEls = evt.currentTarget.elements;
    const mail = formEls.email.value;
    const password = formEls.password.value;

        if (mail === "" || password === "") { 
        alert("всі поля повинні бути заповнені")
        };

    const formData = {
        mail,
        password,
    };
    console.log(formData);
    form.reset();
    }

