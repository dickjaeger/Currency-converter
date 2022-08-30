let form = document.querySelector(".js-form");
let exchangeRateEURelement = document.querySelector(".js-exchangeRateEUR");
let exchangeRateUSDelement = document.querySelector(".js-exchangeRateUSD");
let currency1Element = document.querySelector(".js-currency1");
let currency2Element = document.querySelector(".js-currency2");
let amountElement = document.querySelector(".js-amount");
let button = document.querySelector(".js-button");
let messageBox = document.querySelector(".js-messageBox");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let exchangeRateEUR = exchangeRateEURelement.value;
    let exchangeRateUSD = exchangeRateUSDelement.value;
    let currency1 = currency1Element.value;
    let currency2 = currency2Element.value;
    let amount = amountElement.value;
    let exchangeRate1 = 1;
    let exchangeRate2 = 1;

    if (!amount) {
        messageBox.innerText = "Podaj kwotę jaką chcesz wymienić";
        messageBox.classList.remove("form__message--success");
        messageBox.classList.add("form__message--error");
        messageBox.classList.remove("form__message--hide");
        return;
    }

    if (exchangeRateEUR < 0 || exchangeRateUSD < 0) {
        messageBox.innerText = "Kursy walut nie mogą być liczbami ujemnymi!"
        messageBox.classList.remove("form__message--success");
        messageBox.classList.add("form__message--error");
        messageBox.classList.remove("form__message--hide");
        return;
    }

    switch (currency1) {
        case "EUR":
            exchangeRate1 = exchangeRateEUR;
            break;
        case "USD":
            exchangeRate1 = exchangeRateUSD;
            break;
    }

    switch (currency2) {
        case "EUR":
            exchangeRate2 = exchangeRateEUR;
            break;
        case "USD":
            exchangeRate2 = exchangeRateUSD;
            break;
    }

    let result = (exchangeRate1 / exchangeRate2 * amount).toFixed(2);

    messageBox.innerText = `Dostaniesz dokładnie ${result} ${currency2}`
    messageBox.classList.add("form__message--success");
    messageBox.classList.remove("form__message--error");
    messageBox.classList.remove("form__message--hide");
})

form.addEventListener("input", () => {
    messageBox.classList.add("form__message--hide");
});
