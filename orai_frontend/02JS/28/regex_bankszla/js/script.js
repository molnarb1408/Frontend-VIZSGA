function bankAccountNumberValidate(){
     // let pattern = /^[0-9]{8}([\-]{1}[0-9]{8}){1,2}$/; //1234567812345678 nem helyes
    let pattern = /^[0-9]{8}([-]?[0-9]{8}){1,2}$/; //1234567812345678 ez is helyes
    let bankAccountNumber = document.getElementById("bankAccountNumber").value;
    alert(pattern.test(bankAccountNumber));
}

//HF: telefonszámos regex-hez hasonló megjelenítés és működés