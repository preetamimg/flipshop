'use strict';


    
    //? ################  Home Page Start  ###########################

    const readMoreList = document.querySelectorAll('.bestSellSpecMore')

    readMoreList.forEach(e => {
        e.addEventListener('click', () => {
            e.parentElement.classList.toggle('active');
            e.classList.toggle('active');
        })
    });

    //! ################  End Home Page  ###########################

    
    //? ################  Login Start  ###########################
    // Fetch all the needsvalidationlogin we want to apply custom Bootstrap validation styles to
    const needsvalidationlogin = document.querySelectorAll('.needs-validation-login')
    const needsvalidationlogin2 = document.querySelector('.needs-validation-login')
    const needsvalidationlogin2Verify = document.querySelector('.needs-validation-loginVerify')
    const TermsConditionsInvalidCheck = document.querySelector('#invalidCheck');
    const loginBtn = document.querySelector('#loginBtn')

    // Loop over them and prevent submission
    Array.from(needsvalidationlogin).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            needsvalidationlogin2.classList.add('d-none');
            needsvalidationlogin2Verify.classList.remove('d-none');
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })




    if(! TermsConditionsInvalidCheck == "") {
        TermsConditionsInvalidCheck.onchange = function() {
            loginBtn.disabled = !this.checked;
        };
    }
    

    // Fetch all the needsvalidationloginVerify we want to apply custom Bootstrap validation styles to
    const needsvalidationloginVerify = document.querySelectorAll('.needs-validation-loginVerify')
    const loginVerifyBtn = document.querySelector('#loginVerifyBtn')
    const inputs = document.querySelectorAll('#otp2 > *[id]');
    const otpValue = [1,2,3,4];

    // Loop over them and prevent submission
    Array.from(needsvalidationloginVerify).forEach(form => { 
        for (let i = 0; i < inputs.length; i++) { 
            inputs[i].addEventListener('keydown', function (event) { 
                isNumberKey2(event);
                form.classList.remove('was-validated')
                inputs[0].removeAttribute('pattern'); 
                inputs[1].removeAttribute('pattern'); 
                inputs[2].removeAttribute('pattern'); 
                inputs[3].removeAttribute('pattern');
                if (!form.checkValidity()) {
                    loginVerifyBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    loginVerifyBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (event.key === "Backspace") { 
                    inputs[i].value = ''; 
                    setTimeout(() => {
                    if (i !== 0) inputs[i - 1].focus(); 
                    }, 50);
                } 
                else { 
                    if (i === inputs.length - 1 && inputs[i].value !== '') { 
                        return true; 
                    } 
                    else if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) { 
                        inputs[i].value = event.key; 
                        if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); 
                    } 
                    else if (event.keyCode > 64 && event.keyCode < 91) { 
                        return false; 
                    } 
                } 
            }); 
        }
        form.addEventListener('submit', event => {
            inputs[0].pattern = otpValue[0]; 
            inputs[1].pattern = otpValue[1]; 
            inputs[2].pattern = otpValue[2]; 
            inputs[3].pattern = otpValue[3];
        if ((inputs[0].pattern == otpValue[0]) && (inputs[1].pattern == otpValue[1]) && (inputs[2].pattern == otpValue[2]) && (inputs[3].pattern == otpValue[3])) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                if ((inputs[0].pattern !== otpValue[0]) && (inputs[1].pattern !== otpValue[1]) && (inputs[2].pattern !== otpValue[2]) && (inputs[3].pattern !== otpValue[3])) {  
                    inputs[0].pattern = 'DummyValue';
                    inputs[1].pattern = 'DummyValue';
                    inputs[2].pattern = 'DummyValue';
                    inputs[3].pattern = 'DummyValue';
                }
            } else {
                window.location.replace("personal-detail.html");
                event.preventDefault()
                event.stopPropagation()

            }
            form.classList.add('was-validated')
        } 
        }, false)
    })

    
    const editPhoneNumber = document.querySelector('#editPhoneNumber')
    if(!editPhoneNumber == '') {
        editPhoneNumber.addEventListener('click', () => {
            needsvalidationlogin2.classList.remove('d-none');
            needsvalidationlogin2Verify.classList.add('d-none');
        }, false)
    }

    
    function isNumberKey2(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode != 46 && charCode > 31 &&
            (charCode < 48 || charCode > 57))
            return false;
        else {
            var itemdecimal = evt.srcElement.value.split('.');
            if (itemdecimal.length > 1 && charCode == 46)
                return false;
            return true;
        }
    }
    
    //! ################  End Login  ###########################

    
    //? ################  Personal Detail Page Start  ###########################

    // Fetch all the needsvalidationpersonalDetail we want to apply custom Bootstrap validation styles to
    const needsvalidationpersonalDetail = document.querySelectorAll('.needs-validation-personalDetail')
    const personalDetailBtn = document.querySelector('#personalDetailBtn')

    // Loop over them and prevent submission
    Array.from(needsvalidationpersonalDetail).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("summary.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                personalDetailBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                personalDetailBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })


    //! ################  End Personal Detail Page  ###########################

    
    //? ################  Address Page Start  ###########################

    // Fetch all the needsvalidationaddress we want to apply custom Bootstrap validation styles to
    const needsvalidationaddress = document.querySelectorAll('.needs-validation-address')
    const addressBtn = document.querySelector('#addressBtn')

    // Loop over them and prevent submission
    Array.from(needsvalidationaddress).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("summary.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                addressBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                addressBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })


    //! ################  End Address Page  ###########################

    
    //? ################  Payment Page Start  ###########################

    // Fetch all the needsvalidationpayment we want to apply custom Bootstrap validation styles to
    const needsvalidationpayment = document.querySelectorAll('.needs-validation-payment')
    const paymentBtn = document.querySelector('#paymentBtn')

    // Loop over them and prevent submission
    Array.from(needsvalidationpayment).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("payments-sucsess.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                paymentBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                paymentBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })


    //! ################  End Payment Page  ###########################

    
    //? ################  Edit Profile Page Start  ###########################

    // Fetch all the needsvalidationeditprofile we want to apply custom Bootstrap validation styles to
    const needsvalidationeditprofile = document.querySelectorAll('.needs-validation-editprofile')
    const editprofileBtn = document.querySelector('#editprofileBtn')

    // Loop over them and prevent submission
    Array.from(needsvalidationeditprofile).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("summary.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                editprofileBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                editprofileBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })


    //! ################  End Edit Profile Page  ###########################

    
    //? ################  Account Setting Page Start  ###########################
    

    // Fetch all the needsvalidationotpForDeletionPopup we want to apply custom Bootstrap validation styles to
    const needsvalidationotpForDeletionPopup = document.querySelectorAll('.needs-validation-otpForDeletionPopup')
    const otpForDeletionPopupBtn = document.querySelector('#otpForDeletionPopupBtn')
    const deactivateAccountReasonPopupOpen = document.querySelector('.deactivateAccountReasonPopupOpen')
    const inputs2 = document.querySelectorAll('#otp2 > *[id]');
    const otpValue2 = [1,2,3,4];

    // Loop over them and prevent submission
    Array.from(needsvalidationotpForDeletionPopup).forEach(form => { 
        for (let i = 0; i < inputs2.length; i++) { 
            inputs2[i].addEventListener('keydown', function (event) { 
                isNumberKey2(event);
                form.classList.remove('was-validated')
                inputs2[0].removeAttribute('pattern'); 
                inputs2[1].removeAttribute('pattern'); 
                inputs2[2].removeAttribute('pattern'); 
                inputs2[3].removeAttribute('pattern');
                if (!form.checkValidity()) {
                    otpForDeletionPopupBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    otpForDeletionPopupBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (event.key === "Backspace") { 
                    inputs2[i].value = ''; 
                    setTimeout(() => {
                    if (i !== 0) inputs2[i - 1].focus(); 
                    }, 50);
                } 
                else { 
                    if (i === inputs2.length - 1 && inputs2[i].value !== '') { 
                        return true; 
                    } 
                    else if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) { 
                        inputs2[i].value = event.key; 
                        if (i !== inputs2.length - 1) inputs2[i + 1].focus(); event.preventDefault(); 
                    } 
                    else if (event.keyCode > 64 && event.keyCode < 91) { 
                        return false; 
                    } 
                } 
            }); 
        }
        form.addEventListener('submit', event => {
            inputs2[0].pattern = otpValue2[0]; 
            inputs2[1].pattern = otpValue2[1]; 
            inputs2[2].pattern = otpValue2[2]; 
            inputs2[3].pattern = otpValue2[3];
        if ((inputs2[0].pattern == otpValue2[0]) && (inputs2[1].pattern == otpValue2[1]) && (inputs2[2].pattern == otpValue2[2]) && (inputs2[3].pattern == otpValue2[3])) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                if ((inputs2[0].pattern !== otpValue2[0]) && (inputs2[1].pattern !== otpValue2[1]) && (inputs2[2].pattern !== otpValue2[2]) && (inputs2[3].pattern !== otpValue2[3])) {  
                    inputs2[0].pattern = 'DummyValue';
                    inputs2[1].pattern = 'DummyValue';
                    inputs2[2].pattern = 'DummyValue';
                    inputs2[3].pattern = 'DummyValue';
                }
            } else {
                deactivateAccountReasonPopupOpen.click();
                event.preventDefault()
                event.stopPropagation()

            }
            form.classList.add('was-validated')
        } 
        }, false)
    })


    // Fetch all the needsvalidationdeactivateAccountReason we want to apply custom Bootstrap validation styles to
    const needsvalidationdeactivateAccountReason = document.querySelectorAll('.needs-validation-deactivateAccountReason')
    const deactivateAccountReasonBtn = document.querySelector('#deactivateAccountReasonBtn')
    const accountSuccessfullyDeletedPopupOpen = document.querySelector('.accountSuccessfullyDeletedPopupOpen')

    // Loop over them and prevent submission
    Array.from(needsvalidationdeactivateAccountReason).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            console.log('sdf');
            accountSuccessfullyDeletedPopupOpen.click();
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                deactivateAccountReasonBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                deactivateAccountReasonBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })


    //! ################  End Account Setting Page  ###########################

    
    // //? ################  example Page Start  ###########################

    // // Fetch all the needsvalidationexample we want to apply custom Bootstrap validation styles to
    // const needsvalidationexample = document.querySelectorAll('.needs-validation-example')

    // // Loop over them and prevent submission
    // Array.from(needsvalidationexample).forEach(form => {
    //     form.addEventListener('submit', event => {
    //     if (!form.checkValidity()) {
    //         event.preventDefault()
    //         event.stopPropagation()
    //     } else {
    //         activeOTP()
    //         event.preventDefault()
    //         event.stopPropagation()
    //     }
    //         form.classList.add('was-validated')
    //     }, false)
    // })


    // //! ################  End example Page  ###########################






function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    else {
        var itemdecimal = evt.srcElement.value.split('.');
        if (itemdecimal.length > 1 && charCode == 46)
            return false;
        return true;
    }
}





