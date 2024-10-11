const emailform = document.querySelector(".emailform");
const emailinsert = document.querySelector(".uemailinsert");
const passwordinsert = document.querySelector(".unameinsert");
const resultmessage = document.querySelector(".resultMessage");

emailform.addEventListener("submit", function (event){
    event.preventDefault();

    const email = emailinsert.value;
    const password = passwordinsert.value;

    const isValid = validateEmail(email, password);

    if(isValid){
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        resultmessage.textContent = "Registration completed! We're already redirecting you."
        resultmessage.style.color = "black";
        setTimeout(function() {
            window.location.href = "./kanbanpage.html";
        }, 3000);
    }
    else{
        resultmessage.textContent = "Enter a valid e-mail address"
        resultmessage.style.color = "red";
    }
})

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+.[^\s]+$/
    return regex.test(email);
}