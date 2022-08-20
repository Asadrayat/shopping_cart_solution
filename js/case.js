document.getElementById('btn_case_plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case_number_field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    caseTotal = document.getElementById('case_total');
    newCaseTotal = newCaseNumber * 59;
    caseTotal.innerText = newCaseTotal;
    calculateSubTotal();
})
document.getElementById('btn_case_minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case_number_field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
    caseTotal = document.getElementById('case_total');
    newCaseTotal = newCaseNumber * 59;
    caseTotal.innerText = newCaseTotal;
    calculateSubTotal();
})