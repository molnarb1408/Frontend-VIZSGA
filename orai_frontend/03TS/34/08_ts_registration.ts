const form = document.getElementById('registrationForm');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); //nem küldi el a szerver oldal felé az adatokat 
        // (submit alapműködését írjuk felül)

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;

        if (nameInput !==null && emailInput !==null && passwordInput !==null){
            try {
                const name = validateFieldIsEmpty(nameInput.value, "A név mező kitöltése kötelező!!!");
                const email = validateFieldIsEmpty(emailInput.value, "A email mező kitöltése kötelező!!!");
                const password = validateFieldIsEmpty(passwordInput.value, "A jelszó mező kitöltése kötelező!!!");

                alert("Sikeres regisztráció, név: "+name +"email: "+email); 
                //További feldolgozás helye (pld. DB-be mentés és/vagy átirányítás)
                // Adatok mentése SQL vagy NoSQL (MongoDB pld)
                nameInput.value = '';
                emailInput.value = '';
                passwordInput.value = '';

            } catch (error:any) {
                alert("Hiba történt: "+error.message);
            }
        }

    });

}

//Generikus - általános megoldás
function validateFieldIsEmpty(value: string, errorMsg:string):string{
    if (!value){
        throw new Error(errorMsg)
    }
    return value;
}

// DRY - Dont Repeat Yourself - chatGpt szerű kód
// function validateName(name: string):string {
//     if (!name){
//         throw new Error("A név mező kitöltése kötelező!!!")
//     }
//     return name;
// }

// function validateEmail(email: string):string {
//     if (!email){
//         throw new Error("Az email kitöltése kötelező!!!")
//     }
//     return email;
// }

// function validatePassword(password: string):string {
//     if (!password){
//         throw new Error("A jelszó kitöltése kötelező!!!")
//     }
//     return password;
// }