
let email = document.getElementById("email");
let button = document.getElementById("send");

document.addEventListener("click", function(event) {
    if (event.target == button) {
        document.querySelector(".alert").style.visibility = "hidden";
        
        if (email.validity.valid) {
            localStorage.setItem("email", email.value);
            document.querySelector(".alert").style.visibility = "visible";
            email.value = "";
        } else {
            email.reportValidity();
        }
        
    }
})
