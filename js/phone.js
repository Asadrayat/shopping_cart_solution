/* function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function calculateSubTotal(){
// calculate
    
const currentPhoneTotal = getTextElementValueById('phone_total');
const currentCaseTotal =  getTextElementValueById('case_total'); 
const currentSubTotal = currentPhoneTotal + currentCaseTotal;
const subTotalElement = document.getElementById('sub_total');
subTotalElement.innerText = currentSubTotal;
}
 */
document.getElementById('btn_phone_plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone_number_field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
    phoneTotal = document.getElementById('phone_total');
    newPhoneTotal = newPhoneNumber * 1219;
    phoneTotal.innerText = newPhoneTotal;
    calculateSubTotal();
    
    })
  

 

document.getElementById('btn_phone_minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone_number_field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;
    phoneTotal = document.getElementById('phone_total');
    newPhoneTotal = newPhoneNumber * 1219;
    phoneTotal.innerText = newPhoneTotal;
    calculateSubTotal();
})