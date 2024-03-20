/* ------------------------------------------------- 약관 동의 script ------------------------------------------------- */

/* 1. 전체 동의를 누를시 아래 있는 약관들이 check, unchecked 가 된다 */
document.addEventListener("DOMContentLoaded", function click() {

    var agreeToAllConditionsCheckbox = document.querySelector('.agreeToAllCheckbox');
    var subCheckboxes = document.querySelectorAll('.subCheckbox1, .subCheckbox2, .subCheckbox3, .subCheckbox4');
    function handleCheckboxClick() {

        if (agreeToAllConditionsCheckbox.checked) {
            for (const checkbox of subCheckboxes) {
                checkbox.checked = true;
            }
        } else {
            for (const checkbox of subCheckboxes) {
                checkbox.checked = false;
            }
        }

        if (subCheckboxes.checked) {
            agreeToAllConditionsCheckbox.checked;
        } else {
            !agreeToAllConditionsCheckbox.checked;
        }
    }
    handleCheckboxClick(); // 전체 동의 initial check

    agreeToAllConditionsCheckbox.addEventListener('change', handleCheckboxClick);
});

/* ====================================================================================================== */
/* 2. 하나의 subCheck라도 check 안돼있으면 전체동의는 활성화 되어있지 않는다 */
document.addEventListener("DOMContentLoaded", function checkboxConditions() {
    var subCheckboxes = document.querySelectorAll('.subCheckbox1, .subCheckbox2, .subCheckbox3, .subCheckbox4');
    var mainCheckbox = document.querySelector('.agreeToAllCheckbox');

    subCheckboxes.forEach(function(subCheckbox) {
        subCheckbox.addEventListener("change", function() {
            var allChecked = true;
            subCheckboxes.forEach(function(checkbox) {
                if (!checkbox.checked) { // 하나라도 check가 되어있지 않으면 false 값 return -> 전체 동의 checkbox = unchecked
                    allChecked = false;
                }
            });
            mainCheckbox.checked = allChecked; // 기본으로 전체동의 checkbox = true;
        });
    });
});

/* ====================================================================================================== */
/* 3. 모든 checkbox을 선택을 해야 다음 페이지 (결제 page)로 이동이 가능하다 */
document.addEventListener("DOMContentLoaded", function() {
    var allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
    var ontoPaymentButton = document.querySelector('.ontoPayment');
    var container = document.querySelector('.ontoPaymentPage');

    /* 정보들을 입력하지 않으면 다음 페이지로 넘어가지를 못한다 */
    var rewardGetPersonName = document.querySelector('.rewardGetPersonNameInfo');
    var rewardGetPersonAddress = document.querySelector('.rewardGetPersonAddressInfo');
    var rewardToNotify = document.querySelector('.rewardToNotifyText');

    /* checkbox가 모두 check가 되었는지 확인 */
    function checkAllCheckboxes() {
        var allChecked = true;
        allCheckBoxes.forEach(function(checkbox) {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });
        return allChecked;
    }

    // 모든 checkbox을 check해야 결제하기 button의 색이 바뀐다. 그렇지 않으면 원래 색으로 돌아간다
    function handlePaymentButton() {
        if (checkAllCheckboxes()) { // 모든 checkbox가 check 되어있으면
            ontoPaymentButton.style.backgroundColor = '#FCA652'; // Change button color
            ontoPaymentButton.style.color = 'white';
            // ontoPaymentButton.disabled = false; // enable button (alert를 해야하기 때문에 비활성화)
        } else { // 아니면
            ontoPaymentButton.style.backgroundColor = '#E7E7E7'; // 원래 색으로 되돌린다
            ontoPaymentButton.style.color = 'white';
            // ontoPaymentButton.disabled = true; // Disable button (같은 이유)
        };
    };

    // Event listener for checkbox changes
    allCheckBoxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            handlePaymentButton(); // Call the function to handle button color and enabling/disabling
        });
    });

    // event listener for text input changes
    var allTextInputs = document.querySelectorAll('.rewardDestination-container input[type="text"]');
    allTextInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            handlePaymentButton(); // Call the function to handle button color and enabling/disabling
        });
    });

    // check if all text input fields are filled out
    function checkAllTextInputs() {
        var allFilled = true;
        allTextInputs.forEach(function(input){
           if (!input.value.trim()) {
               allFilled = false;
           }
        });
        return allFilled;
    }

    // Event listener for button click to proceed to payment page
    ontoPaymentButton.addEventListener('click', function(event) {
        if (!checkAllCheckboxes() || !checkAllTextInputs()) {
            event.preventDefault(); // Prevent default action of button only if conditions are not met
            if (!checkAllCheckboxes() && !checkAllTextInputs()) {
                alert("모든 정보를 입력해주세요."); // Alert user to agree to all terms and conditions
            } else if (!checkAllCheckboxes()) {
                alert("체크박스에 체크를 해주세요");
            } else {
                alert("정보를 입력해주세요");
            }
        }
    });
});

/* ====================================================================================================== */
/* 5. 약관동의 보기를 누르면 해당 약관동의 page가 현재 page에서 overlay 되면서 현재 화면에 표시가 된다 */
// function openCondition(e) {
//
//     var button1 = document.getElementById('tNc1');
//     var button2 = document.getElementById('tNc2');
//     var button3 = document.getElementById('tNc3');
//     var button4 = document.getElementById('tNc4');
//
// // 각 약관동의들
// // var condition1 = document.getElementById('condition1');
// // var condition2 = document.getElementById('condition2');
// // var condition3 = document.getElementById('condition3');
// // var condition4 = document.getElementById('condition4');
//
// // 약관 동의 겉 부분 (hidden)
//     var condition1box = document.getElementById('myModal1');
//     var condition2box = document.getElementById('myModal2');
//     var condition3box = document.getElementById('myModal3');
//     var condition4box = document.getElementById('myModal4');
//
//     button1.addEventListener('click', function (e) {
//         condition1box.style.display = "block";
//     });
//
//     button2.addEventListener('click', function () {
//         condition2box.style.display = "block";
//     });
//
//     button3.addEventListener('click', function () {
//         condition3box.style.display = 'block';
//     });
//
//     button4.addEventListener('click', function () {
//         condition4box.style.display = 'block';
//     });
// };



//     const targetId = e.id // click한 id를 가져와
//     const num = targetId.substring(9); // id의 뒤에 있는 번호 No를 가져오고
//     const test2 = document.getElementById("seeCondition" + num); // 약관동의와 일치하게 만들어. 쉽잖아?
//     // 다음으로,,, 눌렀을 때 일치하면 hidden을 끌 수 있겠금 coding읋 하면 끝이잖아?
//     test2.classList.remove('display-hidden');
//     // document.querySelector('.display-hidden').remove('display-hidden');
//
//     const modalBlock = document.getElementById('modal1');
//     const modalBlock2 = document.getElementById('modal2');
//     /*console.log(e.id);
//     if (targetId === 'condition1') {
//     if (condition1box.onclick) {
//         seeCondition1box.classList.add('showmodal');
//
//     } else if (targetId === 'condition2') {
//         test2.classList.remove('display-hidde');
//     } else if (targetId === 'condition3') {
//         test2.classList.remove('display-hidde');
//     } else if (targetId === 'condition4') {
//         test2.classList.remove('display-hidde');
//     }
// */
//     modalBlock.classList.remove('display-hidden');
//     modalBlock2.classList.remove('display-hidden');
// };

/* ====================================================================================================== */
/* 6. 쿠폰을 선택을 했을 때 총금액에 쿠폰금액만큼 차감한다, 아니면 주문금액 + 배송비값을 그대로 보낸다 */

/*document.addEventListener('DOMContentLoaded', function() {
    var selectedCoupon = document.getElementById('couponAmountId');         // 쿠폰을 선택할 때 id
    var preFinalPayment = document.getElementById('finalPaymentAmountId');  // 최종 결제 금액 id
    var originalFinalPayment = parseInt(preFinalPayment.textContent.replace('원', '')); // Original final payment amount

    // 쿠폰이 선택될때 마다 작동하는 코드
    function applyCoupon(selectedCouponAmount, selectedCouponCode) {
        var finalPaymentAfterCoupon = originalFinalPayment - selectedCouponAmount;
        preFinalPayment.textContent = finalPaymentAfterCoupon + '원'; // 쿠폰이 선택이 되면 최종결제 금액이 적용이 되겠금 하는 코드

        if (selectedCouponAmount > 0) {
            var selectedCoupon = document.getElementById('couponAmountId'); // 쿠폰 listbox의 id를 가져온다
            var selectedCouponOption = selectedCoupon.options[selectedCoupon.selectedIndex];       // 선택한 쿠폰의 index를 불러온다
            selectedCouponCode = selectedCouponOption.id;                                      // 쿠폰Code 값을 가져온다
        } else {
            selectedCouponCode = null;
        }


        // couponCode를 잘 담았는지 확인할 것
        console.log('Selected coupon code : ', selectedCouponCode); // 확인용
        console.log('Coupon Amount : ', selectedCouponAmount);
        console.log('Amount after subtractions : ', finalPaymentAfterCoupon);

        // Update hidden input for totalAmount
        var hiddenInputTotalAmount = document.createElement('input');
        hiddenInputTotalAmount.type = 'hidden';
        hiddenInputTotalAmount.name = 'totalAmount';
        hiddenInputTotalAmount.value = String(finalPaymentAfterCoupon);

        var hiddenInputCouponCode = document.createElement('input');
        hiddenInputCouponCode.type = 'hidden';
        hiddenInputCouponCode.name = 'couponCode';
        hiddenInputCouponCode.value = String(selectedCouponCode);

        // Remove existing hidden inputs
        var form = document.getElementById('myForm');
        var existingTotalAmountInput = form.querySelector('input[name="totalAmount"]');
        if (existingTotalAmountInput) {
            existingTotalAmountInput.remove();
        }
        var existingCouponCodeInput = form.querySelector('input[name="couponCode"]');
        if (existingCouponCodeInput) {
            existingCouponCodeInput.remove();
        }

        // Append the new hidden inputs
        form.append(hiddenInputTotalAmount);
        form.append(hiddenInputCouponCode);
    }

    // Event listener for coupon select element
    selectedCoupon.addEventListener('change', function() {
        var selectedCouponOption = selectedCoupon.options[selectedCoupon.selectedIndex];
        var selectedCouponAmount = parseInt(selectedCouponOption.value);

        if (selectedCouponAmount !== 0) { // 쿠폰 선택이 됐으면
            applyCoupon(selectedCouponAmount); // 값을 넣는다
        } else {
            // 쿠폰을 선택을 하지 않으면, 원래 값으로 돌아간다
            preFinalPayment.textContent = originalFinalPayment + '원';
            form.querySelector('input[name="totalAmount"]').remove(); // Remove existing hidden input
        }
    });


    // 쿠폰을 선택을 했을 때
    var initialSelectedCouponAmount = parseInt(selectedCoupon.options[selectedCoupon.selectedIndex].value);
    if (initialSelectedCouponAmount !== 0) {
        applyCoupon(initialSelectedCouponAmount);
    } else {

        // 쿠폰을 선택을 하지 않으면, 원래 값으로 돌아간다
        preFinalPayment.textContent = originalFinalPayment + '원';

        // Remove existing hidden inputs
        var form = document.getElementById('myForm');
        var existingTotalAmountInput = form.querySelector('input[name="totalAmount"]');
        if (existingTotalAmountInput) {
            existingTotalAmountInput.remove();
        }
        var existingCouponCodeInput = form.querySelector('input[name="couponCode"]');
        if (existingCouponCodeInput) {
            existingCouponCodeInput.remove();
        }
    }
});*/

// document.addEventListener('DOMContentLoaded', function() {
//     var selectedCoupon = document.getElementById('couponAmountId');         // 쿠폰을 선택할 때 id
//     var preFinalPayment = document.getElementById('finalPaymentAmountId');  // 최종 결제 금액 id
//     var originalFinalPayment = parseInt(preFinalPayment.textContent.replace('원', '')); // Original final payment amount
//
//     function applyCoupon(selectedCouponAmount, selectedCouponCode, form) {
//         var finalPaymentAfterCoupon = originalFinalPayment - selectedCouponAmount;
//         preFinalPayment.textContent = finalPaymentAfterCoupon + '원';
//
//         // if (selectedCouponAmount > 0) {
//         //     var selectedCouponOption = selectedCoupon.options[selectedCoupon.selectedIndex];
//         //     selectedCouponCode = selectedCouponOption.id;
//         // } else {
//         //     selectedCouponCode = null;
//         // }
//
//         if (selectedCouponAmount > 0) {
//             applyCoupon(selectedCouponAmount, null, form);
//         } else {
//             preFinalPayment.textContent = originalFinalPayment + '원';
//             // Instead of removing totalAmount input here, it's always appended in applyCoupon function
//         }
//
//
//         console.log('Selected coupon code: ', selectedCouponCode);
//         console.log('Coupon Amount: ', selectedCouponAmount);
//         console.log('Amount after subtractions: ', finalPaymentAfterCoupon);
//
//         var hiddenInputTotalAmount = document.createElement('input');
//         hiddenInputTotalAmount.type = 'hidden';
//         hiddenInputTotalAmount.name = 'totalAmount';
//         hiddenInputTotalAmount.value = String(finalPaymentAfterCoupon);
//
//         var hiddenInputCouponCode = document.createElement('input');
//         hiddenInputCouponCode.type = 'hidden';
//         hiddenInputCouponCode.name = 'couponCode';
//         hiddenInputCouponCode.value = String(selectedCouponCode);
//
//         var existingTotalAmountInput = form.querySelector('input[name="totalAmount"]');
//         if (existingTotalAmountInput) {
//             existingTotalAmountInput.remove();
//         }
//         var existingCouponCodeInput = form.querySelector('input[name="couponCode"]');
//         if (existingCouponCodeInput) {
//             existingCouponCodeInput.remove();
//         }
//
//         form.append(hiddenInputTotalAmount);
//         form.append(hiddenInputCouponCode);
//     }
//
//     selectedCoupon.addEventListener('change', function() {
//         var selectedCouponOption = selectedCoupon.options[selectedCoupon.selectedIndex];
//         var selectedCouponAmount = parseInt(selectedCouponOption.value);
//         var form = document.getElementById('myForm');
//
//         if (selectedCouponAmount !== 0) {
//             applyCoupon(selectedCouponAmount, null, form);
//         } else {
//             preFinalPayment.textContent = originalFinalPayment + '원';
//             form.querySelector('input[name="totalAmount"]').remove();
//         }
//     });
//
//     function applyInitialCoupon() {
//         var initialSelectedCouponAmount = parseInt(selectedCoupon.options[selectedCoupon.selectedIndex].value);
//         var form = document.getElementById('myForm');
//
//         if (initialSelectedCouponAmount !== 0) {
//             applyCoupon(initialSelectedCouponAmount, null, form);
//         } else {
//             preFinalPayment.textContent = originalFinalPayment + '원';
//             form.querySelector('input[name="totalAmount"]').remove();
//         }
//     }
//
//     applyInitialCoupon();
// });

function applyCoupon(selectedCouponAmount, selectedCouponCode, form) {
    var finalPaymentAfterCoupon = originalFinalPayment - selectedCouponAmount;
    preFinalPayment.textContent = finalPaymentAfterCoupon + '원';

    // Determine the coupon code
    if (selectedCouponAmount > 0) {
        var selectedCouponOption = selectedCoupon.options[selectedCoupon.selectedIndex];
        selectedCouponCode = selectedCouponOption.id;
    } else {
        selectedCouponCode = null;
    }

    console.log('Selected coupon code: ', selectedCouponCode);
    console.log('Coupon Amount: ', selectedCouponAmount);
    console.log('Amount after subtractions: ', finalPaymentAfterCoupon);

    // Create hidden input for totalAmount
    var hiddenInputTotalAmount = document.createElement('input');
    hiddenInputTotalAmount.type = 'hidden';
    hiddenInputTotalAmount.name = 'totalAmount';
    hiddenInputTotalAmount.value = String(finalPaymentAfterCoupon);

    // Create hidden input for couponCode
    var hiddenInputCouponCode = document.createElement('input');
    hiddenInputCouponCode.type = 'hidden';
    hiddenInputCouponCode.name = 'couponCode';
    hiddenInputCouponCode.value = String(selectedCouponCode);

    // Log the inputs being appended
    console.log('Appending hiddenInputTotalAmount:', hiddenInputTotalAmount);
    console.log('Appending hiddenInputCouponCode:', hiddenInputCouponCode);

    // Remove existing hidden inputs (if any)
    var existingTotalAmountInput = form.querySelector('input[name="totalAmount"]');
    if (existingTotalAmountInput) {
        existingTotalAmountInput.remove();
    }
    var existingCouponCodeInput = form.querySelector('input[name="couponCode"]');
    if (existingCouponCodeInput) {
        existingCouponCodeInput.remove();
    }

    // Append the new hidden inputs to the form
    form.append(hiddenInputTotalAmount);
    form.append(hiddenInputCouponCode);

    // Log the form's HTML after appending inputs
    console.log('Form HTML after appending inputs:', form.innerHTML);
}


/* ====================================================================================================== */
/* 약관동의 보기 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all the buttons with the class "btn"
    var modalButtons = document.querySelectorAll('.btn');

    // Get all the modals
    var modals = document.querySelectorAll('.modal');

    // Attach click event listener to each modal button
    modalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the ID of the modal to display from the data-target attribute
            var modalIdToShow = button.dataset.target;

            // Loop through all modals to hide them
            modals.forEach(function(modal) {
                modal.style.display = 'none';
            });

            // Display the modal with the corresponding ID
            var modalToShow = document.getElementById(modalIdToShow);
            if (modalToShow) {
                modalToShow.style.display = 'block';
            }
        });
    });

    // Attach click event listener to close buttons of modals
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            // Hide the modal when close button is clicked
            var modal = closeButton.closest('.modal');
            modal.style.display = 'none';
        });
    });
});
