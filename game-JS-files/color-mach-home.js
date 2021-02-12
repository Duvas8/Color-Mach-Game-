let allYourMoney = document.querySelector('.account-bank');

import changeBankMoney from './color-mach6';

(function (changeBankMoney){
allYourMoney.innerHTML = '$' + (allYourMoney.innerHTML +  changeBankMoney); 
});