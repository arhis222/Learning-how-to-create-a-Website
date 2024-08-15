const myCheckBox = document.getElementById("myCheckBox");
const masterCardBtn = document.getElementById("masterCardBtn");
const visaBtn = document.getElementById("visaBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const clickSound = document.getElementById("clickSound");
const errorSound = document.getElementById("errorSound");

submitBtn.onclick = function() {
    document.getElementById("clickSound").play();
    if (myCheckBox.checked) {
        subResult.textContent = "Thank you for your submission!";
        subResult.classList.remove("error");
    } 
    else {
        setTimeout(function() {
            errorSound.play();
            subResult.classList.add("error");
            subResult.textContent = "Please CHECK the box to submit.";     
        }, 200);

    }

    switch(true) {
        case visaBtn.checked:
            paymentResult.classList.remove("error");
            paymentResult.textContent = "You have selected Visa.";
            break;
        case masterCardBtn.checked:
            paymentResult.classList.remove("error");
            paymentResult.textContent = "You have selected MasterCard.";
            break;
        case paypalBtn.checked:
            paymentResult.classList.remove("error");
            paymentResult.textContent = "You have selected PayPal.";
            break;
            
        default:
            setTimeout(function() {
                errorSound.play();
                paymentResult.classList.add("error");
                paymentResult.textContent = "Please select a payment method.";

            }, 200)
            
        
    }
}