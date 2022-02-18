function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value; // value ke return kora hoyechey karon ei value ta ke abar new jaigai kaje lagate hobe
}

function totalValueUpdate(fieldId, amount) {
    const totalField = document.getElementById(fieldId); // id diye field ta dhore anbe
    const totalInText = totalField.innerText; // innertext er vitorer value/text ke variable er vitore rakha
    const previousTotalValue = parseFloat(totalInText); // text akare pawa variable er man ta ke ebar floating number e rupantor kore variable rakha
    const newTotalValue = previousTotalValue + amount; // old value er shathe new input field thake pawa amount addition kora holo
    totalField.innerText = newTotalValue; // totalfield er man ke newly define kora holo
}
function balanceUpdate()
// deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input'); // amount variable er maddhome totalValueUpdate function er parameter er man set kora hoyechey 
    totalValueUpdate('deposit-total', amount); // upor thake amount variable ke paremeter hishabe pathano hoyechey
})
// withdraw
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        const amount = getInputValue('withdraw-input');

    })




