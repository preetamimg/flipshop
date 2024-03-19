'use strict';


    
    //? ################  Login Start  ###########################

    // Fetch all the needsvalidationlogin we want to apply custom Bootstrap validation styles to
    const needsvalidationlogin = document.querySelectorAll('.needs-validation-login')

    // Loop over them and prevent submission
    Array.from(needsvalidationlogin).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            activeOTP()
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })

    function activeOTP () {
        let otpField = document.querySelector('.otpField');
        let otpInput = document.querySelector('.otpInput');
        let otpLoginForm = document.querySelector('.otpLoginForm');
        let confirmCheck = document.querySelector('.confirmCheck');
        let phoneNumber = document.querySelector('#phoneNumber');

        if (otpField.classList.contains('d-none')) {
            otpField.classList.remove('d-none');
            otpLoginForm.classList.remove('was-validated')
            confirmCheck.classList.add('d-none')
            phoneNumber.setAttribute('readonly', true);
            sendbtn.innerHTML = 'Verify'
        }
        else {
            setInterval(() => {
                otpInput.setAttribute('required', true);
            }, 100);
            
            if(otpInput.value == 1234) {
                window.location.replace("shop-name.html");
            }
        }
    }

    let checker = document.getElementById('invalidCheck');
    let sendbtn = document.getElementById('loginBtn');
    if(! checker == "") {
        checker.onchange = function() {
            sendbtn.disabled = !this.checked;
        };
    }

    // Fetch all the needsvalidationresendOTP we want to apply custom Bootstrap validation styles to
    const needsvalidationresendOTP = document.querySelectorAll('.needs-validation-resendOTP')
    Array.from(needsvalidationresendOTP).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault()
            event.stopPropagation();
            document.getElementById('resendotpmodal').click();
        }
            form.classList.add('was-validated')
        }, false)
    })
    
    function isNumberKey2(evt) {
        let otpLoginForm = document.querySelector('.otpLoginForm');
            otpLoginForm.classList.remove('was-validated')
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


    

    //? ################  Shop Name Page Start  ###########################

    // Fetch all the needsvalidationshopName we want to apply custom Bootstrap validation styles to
    const needsvalidationshopName = document.querySelectorAll('.needs-validation-shopName')
    Array.from(needsvalidationshopName).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("create-link.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })

    let shopname = document.getElementById('shopName');
    let shopNameBtn = document.getElementById('shopNameBtn');
    if(!shopname == "") {
        shopname.addEventListener("input", ()=> {
            if(shopname.value == null | shopname.value == "") {
                shopNameBtn.disabled = true;
            } else {
                shopNameBtn.disabled = false;
            }
        })
    }

    //! ################  End Shop Name Page  ###########################


    
    
    //? ################  Create Link Page Start  ###########################



    // Fetch all the needsvalidationcreateLink we want to apply custom Bootstrap validation styles to
    const needsvalidationcreateLink = document.querySelectorAll('.needs-validation-createLink')
    Array.from(needsvalidationcreateLink).forEach(form => {
        form.addEventListener('submit', event => {
        if (createLink.innerText.trim().length > 20) {
            event.preventDefault()
            event.stopPropagation()
            alreadyTakken.classList.remove('d-none');
        } else {
            document.getElementById('urlConfirmPopupBtn').click();
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })

    let inputBox = document.querySelector('.inputBox');
    if(!inputBox == "") {
        inputBox.addEventListener("click", ()=> {
            var div = document.querySelector('.inputBox div');
            div.focus();
        })
    }

    let createLink = document.querySelector('#createLink');
    let shopLinkBtn = document.querySelector('#shopLinkBtn');
    let alreadyTakken = document.querySelector('.alreadyTakken');
    let recommendName = document.querySelectorAll('.recommendOptions li a');
    recommendName.forEach( val  => {
        val.addEventListener('click', ()=>{
            createLink.innerHTML = val.innerHTML;
            alreadyTakken.classList.add('d-none');
            shopLinkBtn.disabled = false;
        })
    })
    

    let settings = {maxLen: 40}
    let keys = {
        'backspace': 8,
        'shift': 16,
        'ctrl': 17,
        'alt': 18,
        'delete': 46,
        // 'cmd':
        'leftArrow': 37,
        'upArrow': 38,
        'rightArrow': 39,
        'downArrow': 40,
    }
    let utils = {
        special: {},
        navigational: {},
        isSpecial(e) {
            return typeof this.special[e.keyCode] !== 'undefined';
        },
        isNavigational(e) {
            return typeof this.navigational[e.keyCode] !== 'undefined';
        }
    }
    utils.special[keys['backspace']] = true;
    utils.special[keys['shift']] = true;
    utils.special[keys['ctrl']] = true;
    utils.special[keys['alt']] = true;
    utils.special[keys['delete']] = true;
    utils.navigational[keys['upArrow']] = true;
    utils.navigational[keys['downArrow']] = true;
    utils.navigational[keys['leftArrow']] = true;
    utils.navigational[keys['rightArrow']] = true;
    if(!createLink == "") {
        createLink.addEventListener('keydown', function(event1) {
            subDomainLength(event1);
        });
        
        window.onload = function() {
            checkLengths()
        }

        
        recommendName.forEach( val  => {
            val.addEventListener('click', function() {
                checkLengths()
            })
        })



        function checkLengths() {
            let len = createLink.innerText.trim().length;
            if(len > 20){
                var trimmedString = createLink.innerText.substring(0, 20);
                createLink.innerText = trimmedString
            }
        }
        
        if(!createLink == "") {
            createLink.addEventListener("input", function() {
                checkSubDomain()
            }, false);

            window.onload = function() {
                checkSubDomain()
            }

            function checkSubDomain() {
                if (createLink.innerHTML == createLink.getAttribute('soldDomain')) {
                    shopLinkBtn.disabled = true;
                    alreadyTakken.classList.remove('d-none');
                }
                else if(createLink.innerHTML == null | createLink.innerHTML == "") {
                    shopLinkBtn.disabled = true;
                } else {
                    shopLinkBtn.disabled = false;
                    alreadyTakken.classList.add('d-none');
                }
            }
        }


        function subDomainLength(event1) {
            let len = createLink.innerText.trim().length;
            let hasSelection = false;
            let selection = window.getSelection();
            let isSpecial = utils.isSpecial(event1);
            let isNavigational = utils.isNavigational(event1);
            if (selection) {
                hasSelection = !!selection.toString();
            }
            if (isSpecial || isNavigational) {
                return true;
            }
            if (len >= settings.maxLen && !hasSelection) {
                event1.preventDefault();
                return false;
            }
        }
    }
    
    // Fetch all the needsvalidationurlConfirmPopup we want to apply custom Bootstrap validation styles to
    const needsvalidationurlConfirmPopup = document.querySelectorAll('.needs-validation-urlConfirmPopup')
    Array.from(needsvalidationurlConfirmPopup).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("business-type.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })
    
    //! ################  End Create Link Page  ###########################


    

    //? ################  Business Type Page Start  ###########################

    // Fetch all the needsvalidationbusinessType we want to apply custom Bootstrap validation styles to
    const needsvalidationbusinessType = document.querySelectorAll('.needs-validation-businessType')
    Array.from(needsvalidationbusinessType).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            window.location.replace("add-product-intro.html");
            event.preventDefault()
            event.stopPropagation()
        }
            form.classList.add('was-validated')
        }, false)
    })
    
    
    // Fetch all the needsvalidationotherNatureOfBusinessPopup we want to apply custom Bootstrap validation styles to
    const needsvalidationotherNatureOfBusinessPopup = document.querySelectorAll('.needs-validation-otherNatureOfBusinessPopup')
    const otherNatureOfBusinessPopupBtn = document.querySelector('#otherNatureOfBusinessPopupBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationotherNatureOfBusinessPopup).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                otherNatureOfBusinessPopupBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                otherNatureOfBusinessPopupBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    //! ################  End Business Type Page  ###########################


    //? ################  Add Item Page Start  ###########################
    
    // Fetch all the needsvalidationaddItem we want to apply custom Bootstrap validation styles to
    const needsvalidationaddItem = document.querySelectorAll('.needs-validation-addItem')
    const loginBtn = document.querySelector('#loginBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationaddItem).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                loginBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                loginBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    var preview = document.querySelector("#uploadImg-preview");
    var firstLook = document.querySelectorAll(".uploadImg span");
    // var questionMarkForUpload = document.querySelectorAll(".questionMarkForUpload");
    var removeImg = document.querySelector(".removeImg")
    if(!removeImg == "") {
        removeImg.addEventListener("click", function() {
            document.querySelector("#uploadImg").value = "";
            preview.src = '';
            preview.classList.remove('d-block');
            preview.classList.add('d-none');
            firstLook.forEach( val  => {
                val.classList.remove('d-none');
            });
            removeImg.classList.remove('d-block');
            removeImg.classList.add('d-none');
        })
    }

    function showPreview(event){
        if(event.target.files.length > 0){
            var src = URL.createObjectURL(event.target.files[0]);
            preview.src = src;
            preview.classList.add('d-block');
            preview.classList.remove('d-none');
            firstLook.forEach( val  => {
                val.classList.add('d-none');
            })
            removeImg.classList.add('d-block');
            removeImg.classList.remove('d-none');
        }
    }

    const needsvalidationselectCategory = document.querySelectorAll('.needs-validation-selectCategory')
    const selectCategoryBtn = document.querySelector('#selectCategoryBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationselectCategory).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                selectCategoryBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                selectCategoryBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    const needsvalidationaddNewCategory = document.querySelectorAll('.needs-validation-addNewCategory')
    const addNewCategoryBtn = document.querySelector('#addNewCategoryBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationaddNewCategory).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                addNewCategoryBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                addNewCategoryBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    const needsvalidationaddSubCategory = document.querySelectorAll('.needs-validation-addSubCategory')
    const addSubCategoryBtn = document.querySelector('#addSubCategoryBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationaddSubCategory).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                addSubCategoryBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                addSubCategoryBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    const needsvalidationaddVariant = document.querySelectorAll('.needs-validation-addVariant')
    const addVariantBtn = document.querySelector('#addVariantBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationaddVariant).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                addVariantBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                addVariantBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    const needsvalidationSetExchangePolicy = document.querySelectorAll('.needs-validation-SetExchangePolicy')
    const SetExchangePolicyBtn = document.querySelector('#SetExchangePolicyBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationSetExchangePolicy).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                SetExchangePolicyBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                SetExchangePolicyBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })

    const needsvalidationSetReturnPolicy = document.querySelectorAll('.needs-validation-SetReturnPolicy')
    const SetReturnPolicyBtn = document.querySelector('#SetReturnPolicyBtn');
    // Loop over them and prevent submission
    Array.from(needsvalidationSetReturnPolicy).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false);
        form.addEventListener('input', event => {
            if (!form.checkValidity()) {
                SetReturnPolicyBtn.disabled = true;
                event.preventDefault()
                event.stopPropagation()
            } else {
                SetReturnPolicyBtn.disabled = false;
                event.preventDefault()
                event.stopPropagation()
            }
        }, false)
    })
    
    const offcanvasTooltip = document.getElementById('offcanvasTooltip')
    
    if(!offcanvasTooltip == "") {
        offcanvasTooltip.addEventListener('show.bs.offcanvas', event => {
        // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const title = button.getAttribute('data-bs-title')
            const content = button.getAttribute('data-bs-content')
            // If necessary, you could initiate an AJAX request here
            // and then do the updating in a callback.
            //
            // Update the modal's content.
            const tooltipTitle = offcanvasTooltip.querySelector('.offcanvas-title')
            const tooltipBodyContent = offcanvasTooltip.querySelector('.offcanvas-body .innerText')
    
            tooltipTitle.textContent = `${title}`
            tooltipBodyContent.textContent = `${content}`
        })
    }
    
    const offcanvasTooltip2 = document.getElementById('offcanvasTooltip2')

    if(!offcanvasTooltip2 == "") {
        offcanvasTooltip2.addEventListener('show.bs.offcanvas', event => {
        // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const title = button.getAttribute('data-bs-title')
            const content = button.getAttribute('data-bs-content')
            // If necessary, you could initiate an AJAX request here
            // and then do the updating in a callback.
            //
            // Update the modal's content.
            const tooltipTitle = offcanvasTooltip2.querySelector('.offcanvas-title')
            const tooltipBodyContent = offcanvasTooltip2.querySelector('.offcanvas-body .innerText')
    
            tooltipTitle.textContent = `${title}`
            tooltipBodyContent.textContent = `${content}`
        })
    }

    let textarea = document.querySelector('.productDes textarea');
    let counting = document.querySelector('.productDes label span');
    
    if(!textarea == "") {
        textarea.addEventListener('input', ()=> {
            let val = textarea.value.length;
            counting.innerHTML = val
        })
    }

    //! ################  End Add Item Page  ###########################


    //? ################  Orders Page Start  ###########################
    
    // Fetch all the needsvalidationfilterByDatePopup we want to apply custom Bootstrap validation styles to
    const needsvalidationfilterByDatePopup = document.querySelectorAll('.needs-validation-filterByDatePopup')
    const filterByDatePopupBtn = document.querySelector('.filterByDatePopupBtn');
    if(!needsvalidationfilterByDatePopup == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationfilterByDatePopup).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    document.querySelector('#closeCustom').click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    filterByDatePopupBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    filterByDatePopupBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationAddCustomRange we want to apply custom Bootstrap validation styles to
    const needsvalidationAddCustomRange = document.querySelectorAll('.needs-validation-AddCustomRange')
    const AddCustomRangePopupBtn = document.querySelector('.AddCustomRangePopupBtn');
    if(!needsvalidationAddCustomRange == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationAddCustomRange).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    document.querySelector('#closeCustom').click();
                    document.querySelector('.weekBtn').click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    AddCustomRangePopupBtn.disabled = true;
                    
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    AddCustomRangePopupBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        });
    }
    const addCustomRangePopupClose = document.querySelector('#addCustomRangePopupClose');
    if(!addCustomRangePopupClose == "") {
        addCustomRangePopupClose.addEventListener('click', ()=> {
            document.querySelector('.weekBtn').click();
        })
    }
    
    // Fetch all the needsvalidationprintManifest we want to apply custom Bootstrap validation styles to
    const needsvalidationprintManifest = document.querySelectorAll('.needs-validation-printManifest')
    if(!needsvalidationprintManifest == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationprintManifest).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }


    //! ################  End Orders Page  ###########################


    //? ################  Manage Page Start  ###########################
    
    // Fetch all the needsvalidationdeliveryWithinCityModal we want to apply custom Bootstrap validation styles to
    const needsvalidationdeliveryWithinCityModal = document.querySelectorAll('.needs-validation-deliveryWithinCityModal')
    const deliveryWithinCityModalBtn = document.querySelector('#deliveryWithinCityModalBtn');
    if(!needsvalidationdeliveryWithinCityModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationdeliveryWithinCityModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    deliveryWithinCityModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    deliveryWithinCityModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationdeliveryOutsideCityModal we want to apply custom Bootstrap validation styles to
    const needsvalidationdeliveryOutsideCityModal = document.querySelectorAll('.needs-validation-deliveryOutsideCityModal')
    const deliveryOutsideCityModalBtn = document.querySelector('#deliveryOutsideCityModalBtn');
    if(!needsvalidationdeliveryOutsideCityModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationdeliveryOutsideCityModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    deliveryOutsideCityModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    deliveryOutsideCityModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationupiIdModal we want to apply custom Bootstrap validation styles to
    const needsvalidationupiIdModal = document.querySelectorAll('.needs-validation-upiIdModal')
    const upiIdModalBtn = document.querySelector('#upiIdModalBtn');
    if(!needsvalidationupiIdModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationupiIdModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    upiIdModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    upiIdModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationdisPtachModal we want to apply custom Bootstrap validation styles to
    const needsvalidationdisPtachModal = document.querySelectorAll('.needs-validation-disPtachModal')
    const disPtachModalBtn = document.querySelector('#disPtachModalBtn');
    if(!needsvalidationdisPtachModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationdisPtachModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    disPtachModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    disPtachModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationprofileModal we want to apply custom Bootstrap validation styles to
    const needsvalidationprofileModal = document.querySelectorAll('.needs-validation-profileModal')
    const profileModalBtn = document.querySelector('#profileModalBtn');
    if(!needsvalidationprofileModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationprofileModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    profileModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    profileModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationfilterByDateInManagePopup we want to apply custom Bootstrap validation styles to
    const needsvalidationfilterByDateInManagePopup = document.querySelectorAll('.needs-validation-filterByDateInManagePopup')
    const filterByDateInManagePopupBtn = document.querySelector('.filterByDateInManagePopupBtn');
    if(!needsvalidationfilterByDateInManagePopup == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationfilterByDateInManagePopup).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    document.querySelector('#closeCustom').click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    filterByDateInManagePopupBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    filterByDateInManagePopupBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    // Fetch all the needsvalidationAddCustomRangeManagePopup we want to apply custom Bootstrap validation styles to
    const needsvalidationAddCustomRangeManagePopup = document.querySelectorAll('.needs-validation-AddCustomRangeManagePopup')
    const AddCustomRangeManagePopupBtn = document.querySelector('.AddCustomRangeManagePopupBtn');
    if(!needsvalidationAddCustomRangeManagePopup == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationAddCustomRangeManagePopup).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    document.querySelector('#closeCustom').click();
                    document.querySelector('.weekBtn').click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    AddCustomRangeManagePopupBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    AddCustomRangeManagePopupBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        });
    }
    const AddCustomRangeInManagePopupClose = document.querySelector('#AddCustomRangeInManagePopupClose');
    if(!AddCustomRangeInManagePopupClose == "") {
        AddCustomRangeInManagePopupClose.addEventListener('click', ()=> {
            document.querySelector('.weekBtn').click();
        })
    }


    //! ################  End Manage Page  ###########################

    
    //? ################  Aadhar Verify Start  ###########################

    
    // Fetch all the needsvalidationadhaarVerify we want to apply custom Bootstrap validation styles to
    const needsvalidationadhaarVerify = document.querySelectorAll('.needs-validation-adhaarVerify')
    const adhaarVerifyBtn = document.querySelector('#adhaarVerifyBtn');
    const getOtpLoginForm = document.querySelector('.getOtpLoginForm');
    const sendOtpLoginForm = document.querySelector('.sendOtpLoginForm');
    if(!needsvalidationadhaarVerify == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationadhaarVerify).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    sendOtpLoginForm.classList.add('d-none');
                    getOtpLoginForm.classList.remove('d-none');
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    adhaarVerifyBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    adhaarVerifyBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }

    // Fetch all the needsvalidationadhaarVerifyOTP we want to apply custom Bootstrap validation styles to
    const needsvalidationadhaarVerifyOTP = document.querySelectorAll('.needs-validation-adhaarVerifyOTP')
    if(!needsvalidationadhaarVerifyOTP == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationadhaarVerifyOTP).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    window.location.replace("manage.html");
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.remove('was-validated')
            }, false)
        })
    }

    
    // Fetch all the needsvalidationresendOTPAadharModal we want to apply custom Bootstrap validation styles to
    const needsvalidationresendOTPAadharModal = document.querySelectorAll('.needs-validation-resendOTPAadharModal')
    const resendotpAadharModalmodal = document.querySelector('#resendotpAadharModalmodal');
    if(!needsvalidationresendOTPAadharModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationresendOTPAadharModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    resendotpAadharModalmodal.click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    
    //! ################  End Aadhar Verify  ###########################

    
    //? ################  PAN verify Start  ###########################

    
    // Fetch all the needsvalidationpanVerify we want to apply custom Bootstrap validation styles to
    const needsvalidationpanVerify = document.querySelectorAll('.needs-validation-panVerify')
    const panVerifyBtn = document.querySelector('#panVerifyBtn');
    const panNumberInput = document.querySelector('.panNumberInput');
    if(!needsvalidationpanVerify == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationpanVerify).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if ((panNumberInput.value.length > 4) && (panNumberInput.value.length < 9)) {
                    panNumberInput.setAttribute('type', 'tel')
                } else {
                    panNumberInput.setAttribute('type', 'text')
                }
                if (panNumberInput.value.length != 10) {
                    panVerifyBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    panVerifyBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    
    //! ################  End PAN verify  ###########################

    
    //? ################  GST Verify Start  ###########################

    // Fetch all the needsvalidationgstVerify we want to apply custom Bootstrap validation styles to
    const needsvalidationgstVerify = document.querySelectorAll('.needs-validation-gstVerify')
    const gstVerifyBtn = document.querySelector('#gstVerifyBtn');
    const getOtpGSTForm = document.querySelector('.getOtpGSTForm');
    const sendOtpGSTForm = document.querySelector('.sendOtpGSTForm');
    const gstNumber = document.querySelector('.gstNumber');
    if(!needsvalidationgstVerify == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationgstVerify).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    sendOtpGSTForm.classList.add('d-none');
                    getOtpGSTForm.classList.remove('d-none');
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                // 66AAAAA6666A6A
                if (((gstNumber.value.length >= 2) && (gstNumber.value.length <= 6)) || ((gstNumber.value.length >= 11) && (gstNumber.value.length <= 11)) || ((gstNumber.value.length >= 13) && (gstNumber.value.length <= 13))) {
                    gstNumber.setAttribute('type', 'text')
                } else {
                    gstNumber.setAttribute('type', 'tel')
                }
                if (!form.checkValidity()) {
                    gstVerifyBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    gstVerifyBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }

    // Fetch all the needsvalidationgstVerifyOTP we want to apply custom Bootstrap validation styles to
    const needsvalidationgstVerifyOTP = document.querySelectorAll('.needs-validation-gstVerifyOTP')
    if(!needsvalidationgstVerifyOTP == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationgstVerifyOTP).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    window.location.replace("manage.html");
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.remove('was-validated')
            }, false)
        })
    }

    
    // Fetch all the needsvalidationresendOTPGstModal we want to apply custom Bootstrap validation styles to
    const needsvalidationresendOTPGstModal = document.querySelectorAll('.needs-validation-resendOTPGstModal')
    const resendOTPGstModalBtn = document.querySelector('#resendOTPGstModalBtn');
    const gstNumber2 = document.querySelector('.gstNumber2');
    if(!needsvalidationresendOTPGstModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationresendOTPGstModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    resendOTPGstModalBtn.click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                // 66AAAAA6666A6A
                if (((gstNumber2.value.length >= 2) && (gstNumber2.value.length <= 6)) || ((gstNumber2.value.length >= 11) && (gstNumber2.value.length <= 11)) || ((gstNumber2.value.length >= 13) && (gstNumber2.value.length <= 13))) {
                    gstNumber2.setAttribute('type', 'text')
                } else {
                    gstNumber2.setAttribute('type', 'tel')
                }
                if (!form.checkValidity()) {
                    resendOTPGstModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    resendOTPGstModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    
    //! ################  End GST Verify  ###########################

    
    //? ################  Setting Page Start  ###########################

    
    // Fetch all the needsvalidationdeactivateReasonModal we want to apply custom Bootstrap validation styles to
    const needsvalidationdeactivateReasonModal = document.querySelectorAll('.needs-validation-deactivateReasonModal')
    const deactivateReasonModalBtn = document.querySelector('#deactivateReasonModalBtn');
    if(!needsvalidationdeactivateReasonModal == "") {
        // Loop over them and prevent submission
        Array.from(needsvalidationdeactivateReasonModal).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    deactivateReasonModalBtn.click();
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false);
            form.addEventListener('input', event => {
                if (!form.checkValidity()) {
                    deactivateReasonModalBtn.disabled = true;
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    deactivateReasonModalBtn.disabled = false;
                    event.preventDefault()
                    event.stopPropagation()
                }
            }, false)
        })
    }
    
    
    //! ################  End Setting Page  ###########################
















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





