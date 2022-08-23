function increasePhoneItem(isIncrease) {
  const phoneItem = document.getElementById("phone-input-field");
  const previousPhoneItems = parseInt(phoneItem.value);
  let addPhoneItems;
  if (isIncrease) {
    addPhoneItems = previousPhoneItems + 1;
    phoneItem.value = addPhoneItems;
  } else {
    addPhoneItems = previousPhoneItems - 1;
    phoneItem.value = addPhoneItems;
  }
  return addPhoneItems;
}

function increseCassingItem(isIncrease) {
  const cassingItem = document.getElementById("cassing-input-field");
  const previousCassingItems = parseInt(cassingItem.value);
  let addCassingItems;
  if (isIncrease) {
    addCassingItems = previousCassingItems + 1;
    cassingItem.value = addCassingItems;
  } else {
    addCassingItems = previousCassingItems - 1;
    cassingItem.value = addCassingItems;
  }
  return addCassingItems;
}

function updatePhonePrice(itemsNumber) {
  const previousPhonePrice = document.getElementById("phone-price");
  const totalPhonePrice = itemsNumber * 1219;
  previousPhonePrice.innerText = totalPhonePrice;
}
function updateCassingPrice(itemsNumber) {
  const previousCassingPrice = document.getElementById("cassing-price");
  const totalCassingPrice = itemsNumber * 59;
  previousCassingPrice.innerText = totalCassingPrice;
}

function getElementTotalPrice(elementbyId) {
  const previousElementPrice = document.getElementById(elementbyId);
  const totalElementPrice = parseInt(previousElementPrice.innerText);
  return totalElementPrice;
}
function setTextElementById(elementId, newValue) {
  const newElement = document.getElementById(elementId);
  newElement.innerText = newValue;
}
function subTotalPrice() {
  const totalPhoneprice = getElementTotalPrice("phone-price");
  const totalCassingPrice = getElementTotalPrice("cassing-price");
  const subTotalPrice = totalPhoneprice + totalCassingPrice;
  const totalprice = document.getElementById("total-price");
  totalprice.innerText = subTotalPrice;
  const taxAmaunt =parseFloat((subTotalPrice * 0.1).toFixed(2));
  setTextElementById("total-tax", taxAmaunt);
  const finalPrice = subTotalPrice+taxAmaunt;
  setTextElementById('final-price',finalPrice);
}
