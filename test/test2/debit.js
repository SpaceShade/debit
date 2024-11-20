window.addEventListener('load', function(){
    const savedData = localStorage.getItem('paymentData');
    if (savedData){
        const paymentData = JSON.parse(savedData);
        if (paymentData.paymentMethod){
            document.querySelector(`input[name="payment-method"][value="${paymentData.paymentMethod}"]`).checked = true;
        }
        document.getElementById('card-holder').value = paymentData.cardHolder || '';
        document.getElementById('card-number').value = paymentData.cardNumber || '';
        document.getElementById('expiry-date').value = paymentData.expiryDate || '';
        document.getElementById('cvv').value = paymentData.cvv || '';
        document.getElementById('save-info').checked = paymentData.saveInfo || false;
    }
})

let pay = document.getElementById('pay');

pay.addEventListener('click', function() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;
    const cardHolder = document.getElementById('card-holder').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const saveInfo = document.getElementById('save-info').checked; 

    const paymentData = {
        paymentMethod: paymentMethod,
        cardHolder: cardHolder,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv,
        saveInfo: saveInfo
    }

    console.log(paymentData);
    const paymentDataJSON = JSON.stringify(paymentData);
    localStorage.setItem('paymentData', paymentDataJSON);
    alert("Saved");
});

