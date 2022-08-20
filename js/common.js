function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
// calculate
    
const currentPhoneTotal = getTextElementValueById('phone_total');
const currentCaseTotal =  getTextElementValueById('case_total'); 
const currentSubTotal = currentPhoneTotal + currentCaseTotal;
setTextElementValueById('sub_total',currentSubTotal);

// calculate tax_total 
const taxTotalString = (currentSubTotal * 0.1).toFixed(2);
const taxTotal = parseFloat(taxTotalString);
setTextElementValueById('tax_total',taxTotal);

// calculate final_tota 
const finalTotal = currentSubTotal + taxTotal ;
setTextElementValueById('final_total',finalTotal);


}