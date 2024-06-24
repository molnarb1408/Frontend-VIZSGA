function getMobilePhoneNumber(){
    let mobilePhoneNumber = document.getElementById('mobilePhoneNumber').value;
    //console.log(mobilePhoneNumber);
    return mobilePhoneNumber;
}

function isMobilePhoneNumberValidate() {
    let pattern = /^36[237]{1}0[0-9]{7}$/;
    // /^36\d{9}$/ - OK, de 36995551234 -igaz
    let mobilePhoneNumber = getMobilePhoneNumber();
    let result = false;
    if (pattern.test(mobilePhoneNumber)){
        result = true;
    }   
    return result;
}

function isMobilePhoneNumberEmpty(){
    let result = false;
    let mobilePhoneNumber = getMobilePhoneNumber();
    if (mobilePhoneNumber == "") {
        result = true;
    }
    return result;
}

function printResultMobilePhoneNumberValidate(){
    let result = "";
    let className = "";
    let resultObj = document.getElementById("result");

    if (!isMobilePhoneNumberEmpty()) {
        if (isMobilePhoneNumberValidate()){
            result = "A telefonszám formátuma megfelelő";
            className = "alert-success";
        } else {
            result = "A telefonszám formátuma NEM megfelelő";
            className = "alert-danger";
        }
    } else {
          result = "Nem adott meg telefonszámot :(";
          className = "alert-danger";
    }
    resultObj.classList.remove("alert-danger");
    resultObj.classList.remove("alert-success");
    resultObj.classList.add(className);
    resultObj.innerText = result;
}

