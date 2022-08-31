{
    const messageBox = document.querySelector(".js-messageBox");

    const showSuccessMessage = (message) => {
        messageBox.innerText = message;
        messageBox.classList.add("form__message--success");
        messageBox.classList.remove("form__message--error");
        messageBox.classList.remove("form__message--hide");
    }

    const showErrorMessage = (message) => {
        messageBox.innerText = message;
        messageBox.classList.remove("form__message--success");
        messageBox.classList.add("form__message--error");
        messageBox.classList.remove("form__message--hide");
    }

    const amountIsValid = (amount) => {
        return (amount) ? true : false;
    }

    const exchangeRateIsValid = (exchangeRate) => {
        return (exchangeRate && exchangeRate >= 0) ? true : false;
    }

    const switchExchangeRate = (currency) => {
        const exchangeRateEURelement = document.querySelector(".js-exchangeRateEUR");
        const exchangeRateUSDelement = document.querySelector(".js-exchangeRateUSD");
        const exchangeRateEUR = +exchangeRateEURelement.value;
        const exchangeRateUSD = +exchangeRateUSDelement.value;

        switch (currency) {
            case "EUR":
                return exchangeRateEUR;
            case "USD":
                return exchangeRateUSD;
            default:
                return 1;
        }
    }

    const calculateResult = (exchangeRate1, exchangeRate2, amount) => {
        return (exchangeRate1 / exchangeRate2 * amount).toFixed(2);
    }

    const resetMessageBox = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("input", () => {
            messageBox.classList.add("form__message--hide");
        });
    }

    const onButtonClick = () => {
        const amountElement = document.querySelector(".js-amount");
        const currency1Element = document.querySelector(".js-currency1");
        const currency2Element = document.querySelector(".js-currency2");
        const button = document.querySelector(".js-button");

        button.addEventListener("click", (event) => {
            event.preventDefault();

            const currency2 = currency2Element.value;
            const amount = +amountElement.value;
            const exchangeRate1 = switchExchangeRate(currency1Element.value);
            const exchangeRate2 = switchExchangeRate(currency2);

            if (!amountIsValid(amount)) {
                showErrorMessage("Podaj kwotę jaką chcesz wymienić!");
                return;
            };

            if (!exchangeRateIsValid(exchangeRate1) || !exchangeRateIsValid(exchangeRate2)) {
                showErrorMessage("Podaj kurs, który nie jest liczbą ujemną!");
                return;
            };

            showSuccessMessage(`Dostaniesz dokładnie ${calculateResult(exchangeRate1, exchangeRate2, amount)} ${currency2}`);
        })
    }

    onButtonClick();
    resetMessageBox();
}