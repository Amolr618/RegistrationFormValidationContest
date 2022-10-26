
let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let FullName = document.getElementById("full-name").value
    let PhoneNumber = document.getElementById("phone-number").value
    let email = document.getElementById("email").value
    let Zip = document.getElementById("zip").value
    let Gender = document.getElementById("gender").value
    let City = document.getElementById("city").value
    let State = document.getElementById("state").value
    let Hobbies1 = document.getElementById("Dancing").checked
    let Hobbies2= document.getElementById("Singing").checked
    let Hobbies3 = document.getElementById("Swimming").checked
    let Hobbies4 = document.getElementById("ReadingNovels").checked
    let TnC = document.getElementById("TnC").checked
    let error = false


    if (isSubmitted) {
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
        if (FullName.length >= 5 &&  FullName.includes(' ')>=1) {
            document.getElementById("full-name-valid").style.display = 'block'
            document.getElementById("full-name-invalid").style.display = 'none'
        } else {
            document.getElementById("full-name-invalid").style.display = 'block'
            document.getElementById("full-name-valid").style.display = 'none'
            error = true
        }


        if (PhoneNumber.length === 10) {
            document.getElementById("phone-number-valid").style.display = 'block'
            document.getElementById("phone-number-invalid").style.display = 'none'
        } else {
            document.getElementById("phone-number-invalid").style.display = 'block'
            document.getElementById("phone-number-valid").style.display = 'none'
            error = true
        }

        if (
            email.includes('@') &&
            email.includes('.') &&
            email.indexOf('@') != 0 &&
            email.length - email.lastIndexOf(".") >= 3) {
            document.getElementById("email-valid").style.display = 'block'
            document.getElementById("email-invalid").style.display = 'none'
        } else {
            document.getElementById("email-invalid").style.display = 'block'
            document.getElementById("email-valid").style.display = 'none'
            error = true
        }

        let zipNumber = parseInt(Zip)
        if (Zip.length === 6 && !isNaN(zipNumber)) {
            document.getElementById("zip-valid").style.display = 'block'
            document.getElementById("zip-invalid").style.display = 'none'
        } else {
            document.getElementById("zip-invalid").style.display = 'block'
            document.getElementById("zip-valid").style.display = 'none'
            error = true
        }

        if (Gender != 'None') {
            document.getElementById("gender-valid").style.display = 'block'
            document.getElementById("gender-invalid").style.display = 'none'
        } else {
            document.getElementById("gender-invalid").style.display = 'block'
            document.getElementById("gender-valid").style.display = 'none'
            error = true
        }

        if (City != 'None') {
            document.getElementById("city-valid").style.display = 'block'
            document.getElementById("city-invalid").style.display = 'none'
        } else {
            document.getElementById("city-invalid").style.display = 'block'
            document.getElementById("city-valid").style.display = 'none'
            error = true
        }

        if (State != 'None') {
            document.getElementById("state-valid").style.display = 'block'
            document.getElementById("state-invalid").style.display = 'none'
        } else {
            document.getElementById("state-invalid").style.display = 'block'
            document.getElementById("state-valid").style.display = 'none'
            error = true
        }

        if (Hobbies1 || Hobbies2 || Hobbies3 || Hobbies4     ) {
            document.getElementById("hobbies-invalid").style.display = 'none'
            document.getElementById("hobbies-valid").style.display = 'block'
        } else {
            document.getElementById("hobbies-invalid").style.display = 'block'
            document.getElementById("hobbies-valid").style.display = 'none'
            error = true
        }

        if (TnC) {
            document.getElementById("TnC-invalid").style.display = 'none'
        } else {
            document.getElementById("TnC-invalid").style.display = 'block'
            error = true
        }

        if (!error && isSubmitted) {
            var checkedValue=""; 
            var inputElements = document.getElementsByClassName('form-check-input');
            for(var i=0; inputElements[i]; ++i){
                  if(inputElements[i].checked){
                       checkedValue += inputElements[i].value;
                       checkedValue += " ";
                  }
            }
            alert("Hobies of "+FullName+" (" +Gender+") are "+checkedValue)

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}