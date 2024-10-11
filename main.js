const emailform = document.querySelector(".emailform");
const emailinsert = document.querySelector(".uemailinsert");
const resultmessage = document.querySelector(".resultMessage");

emailform.addEventListener("submit", function (event){
    event.preventDefault();

    const email = emailinsert.value;

    const isValid = validateEmail(email)

    if(isValid){
        resultmessage.textContent = "Cadastro concluído! Já estamos te redirecionando."
        resultmessage.style.color = "black";
        setTimeout(function() {
            window.location.href = "./kanbanpage.html";
        }, 3000);
    }
    else{
        resultmessage.textContent = "Insira um e-mail válido"
        resultmessage.style.color = "red";
    }
})

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+.[^\s]+$/
    return regex.test(email);
}