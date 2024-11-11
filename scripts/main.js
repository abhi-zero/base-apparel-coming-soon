const emailValue = document.querySelector('#js-email');
const errorImg = document.querySelector('#js-error-img');
const errorMsg = document.querySelector('#js-error-msg');
const submitBtn = document.querySelector('#js-submit')

 function emailValidate(){
    const emailValidPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    
    if(!emailValidPattern.test(emailValue.value)){
        errorMsg.textContent=" Please Enter Valid Email";
        errorImg.style.display ="block";
        event.preventDefault();
        return false
    }

    errorMsg.textContent="";
    errorImg.style.display ="none";
    return true;
 }

  submitBtn.addEventListener('click', emailValidate);
