function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value; // value ke return kora hoyechey karon ei value ta ke abar new jaigai kaje lagate hobe
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function totalValueUpdate(fieldId, amount) {
    const totalField = document.getElementById(fieldId); // id diye field ta dhore anbe
    const totalInText = totalField.innerText; // innertext er vitorer value/text ke variable er vitore rakha
    const previousTotalValue = parseFloat(totalInText); // text akare pawa variable er man ta ke ebar floating number e rupantor kore variable rakha
    const newTotalValue = previousTotalValue + amount; // old value er shathe new input field thake pawa amount addition kora holo
    totalField.innerText = newTotalValue; // totalfield er man ke newly define kora holo
}

function balanceUpdate(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalanceValue = parseFloat(balanceInText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalanceValue + amount;
    } else {
        newBalance = previousBalanceValue - amount;
    }

    balanceTag.innerText = newBalance;

}
// deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input'); // amount variable er maddhome totalValueUpdate function er parameter er man set kora hoyechey 
    if (amount > 0) {   // amount variable ke condition er vitore niye asha hoyechey-ete kore 0 er chaite kom value input deya jabe na, minus figure, text input deya jabe na
        totalValueUpdate('deposit-total', amount); // upor thake amount variable ke paremeter hishabe pathano hoyechey
        balanceUpdate(amount, true);
    }
})
// withdraw
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        const amount = getInputValue('withdraw-input');
        if (amount > 0) {
            totalValueUpdate('withdraw-total', amount);
            balanceUpdate(amount, false);
        }
    })




