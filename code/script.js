document.addEventListener("DOMContentLoaded", function() {

  const cardNumber = document.getElementById('number');
  const numberInp = document.getElementById('card_number');

  const cardName = document.getElementById('name');
  const nameInp = document.getElementById('card_name');

  const cardMonth = document.getElementById('month');
  const monthInp = document.getElementById('card_month');

  const cardYear = document.getElementById('year');
  const yearInp = document.getElementById('card_year');

  const cardCvc = document.getElementById('cvc');
  const cvcInp = document.getElementById('card_cvc');

  const submitBtn = document.getElementById('submit_btn');

  const continueBtn = document.getElementById("continueBtn");

  const completed = document.querySelector('.thank');
  const form = document.querySelector('form');

  function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
  }
  function setCardName(e) {
    cardName.innerText = e.target.value;
  }
  function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
  }
  function setCardYear(e) {
    cardYear.innerText = e.target.value;
  }
  function setCardCvc(e) {
    cardCvc.innerText = e.target.value;
  }

  function format(s) {
    return s.toString().replace(/(\d{4})/g, "$1 ");
  }

  function handleSubmit(e) {
    e.preventDefault();
    //Name
    if(!nameInp.value){
      nameInp.classList.add('error');
      nameInp.parentElement.classList.add('error_message');
    } else {
      nameInp.classList.remove('error');
      nameInp.parentElement.classList.remove('error_message');
    }
    //Number
    if(!numberInp.value){
      numberInp.classList.add('error');
      numberInp.parentElement.classList.add('error_message');
    } else {
      numberInp.classList.remove('error');
      numberInp.parentElement.classList.remove('error_message');
    }
    //Month
    if(!monthInp.value){
      monthInp.classList.add('error');
      monthInp.parentElement.classList.add('error_message');
    } else {
      monthInp.classList.remove('error');
      monthInp.parentElement.classList.remove('error_message');
    }
    //Year
    if(!yearInp.value){
      yearInp.classList.add('error');
      yearInp.parentElement.classList.add('error_message');
    } else {
      yearInp.classList.remove('error');
      yearInp.parentElement.classList.remove('error_message');
    }
    //CVC
    if(!cvcInp.value){
      cvcInp.classList.add('error');
      cvcInp.parentElement.classList.add('error_message');
    } else {
      cvcInp.classList.remove('error');
      cvcInp.parentElement.classList.remove('error_message');
    }

    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value){
      completed.classList.remove('hidden');
      form.classList.add('hidden');
    }
  }

  numberInp.addEventListener("input", setCardNumber);
  nameInp.addEventListener("input", setCardName);
  monthInp.addEventListener("input", setCardMonth);
  yearInp.addEventListener("input", setCardYear);
  cvcInp.addEventListener("input", setCardCvc);
  submitBtn.addEventListener("click", handleSubmit);

  continueBtn.addEventListener("click", () => {
    location.reload();
  });

});
