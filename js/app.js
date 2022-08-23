document.getElementById('adding-phone-item').addEventListener('click',function(){
    const itemsnumber= increasePhoneItem(true);
    updatePhonePrice(itemsnumber);
    subTotalPrice();

})
document.getElementById('subtract-phone-item').addEventListener('click',function(){
    const itemsnumber = increasePhoneItem(false);
    updatePhonePrice(itemsnumber);
    subTotalPrice();
})

document.getElementById('adding-cassing-item').addEventListener('click',function(){
    const itemsNumber =increseCassingItem(true);
    updateCassingPrice(itemsNumber);
    subTotalPrice();
})
document.getElementById('subtract-cassing-item').addEventListener('click',function(){
    const itemsNumber =increseCassingItem(false);
    updateCassingPrice(itemsNumber);
    subTotalPrice();
})

