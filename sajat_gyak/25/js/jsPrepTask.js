///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Globális OBJ //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const buttonOptionObj = {
    1: { id: "btnTask1", onclick: "Task01()", title: "Bruttó ár számító" },
    2: { id: "btnTask2", onclick: "Task02()", title: "Számolj" },
    3: { id: "btnTask3", onclick: "Task03()", title: "Palindrom–e" },
    4: { id: "btnTask4", onclick: "Task04()", title: "Jelszó generálása!" },
    5: { id: "btnTask5", onclick: "Task05()", title: "Osztói egymásnak?" },
    6: { id: "btnTask6", onclick: "Task06()", title: "Generálj 5 nyerőszámot!" },
    7: { id: "btnTask7", onclick: "Task07()", title: "Generálj hatoslottó számait egy évre!" },
    8: { id: "btnTask8", onclick: "Task08()", title: "Számítsa ki a magánhangzó százalékát!" },
    9: { id: "btnTask9", onclick: "Task09()", title: "Számítsd ki az átfogót!" },
    10: { id: "btnTask10", onclick: "Task10()", title: "Számítsd ki az útiköltséget!" },
    11: { id: "btnTask11", onclick: "Task11()", title: "Átváltás forintra!" },
    12: { id: "btnTask12", onclick: "Task12()", title: "Számítás!" },
    13: { id: "btnTask13", onclick: "Task13()", title: "Számítás!" },
    14: { id: "btnTask14", onclick: "Task14()", title: "Feltöltés és számítás!" },
    15: { id: "btnTask15", onclick: "Task15()", title: "Számítás!" },
    16: { id: "btnTask16", onclick: "Task16()", title: "Átlagos alvásidő (óra):" },
    17: { id: "btnTask17", onclick: "Task17()", title: "Megoldás!" },
    18: { id: "btnTask18", onclick: "Task18()", title: "Pénzfeldobás!" },
    19: { id: "btnTask19", onclick: "Task19()", title: "Számítás!" },
    20: { id: "btnTask20", onclick: "Task20()", title: "Ellenőrzés!" }
};
const inputOptionObj = {
    1.1: { id: "productPrice", type: "number", placeholder: "1000", pattern: " " },
    1.2: { id: "tax", type: "number", placeholder: "27", pattern: "" },
    2: { id: "numberCheck", type: "number", placeholder: "7", pattern: "" },
    3: { id: "palindromeCheck", type: "text", placeholder: "Rád rohan a hordár", pattern: ""  },
    4: { id: "randomPasswordLength", type: "number", placeholder: "10", pattern: "/^-?\d+\.?\d*$/"  },
    5.1: { id: "firstNumber", type: "number", placeholder: "10", pattern: ""  },
    5.2: { id: "secondNumber", type: "number", placeholder: "10", pattern: ""  },
    9.1: { id: "legA", type: "number", placeholder: "10", pattern: ""  },
    9.2: { id: "legB", type: "number", placeholder: "10", pattern: ""  },
    10.1: { id: "consumption", type: "number", placeholder: "6", pattern: ""  },
    10.2: { id: "fuelPrice", type: "number", placeholder: "500", pattern: ""  },
    10.3: { id: "distance", type: "number", placeholder: "100", pattern: ""  },
    11.1: { id: "exchangeRate", type: "number", placeholder: "365", pattern: ""  },
    11.2: { id: "amount", type: "number", placeholder: "100", pattern: ""  },
    12: { id: "sideLength", type: "number", placeholder: "10", pattern: ""  },
    13.1: { id: "coneRadius", type: "number", placeholder: "10", pattern: ""  },
    13.2: { id: "coneHeight", type: "number", placeholder: "15", pattern: ""  },
    14.1: { id: "lowerBound", type: "number", placeholder: "3", pattern: ""  },
    14.2: { id: "upperBound", type: "number", placeholder: "8", pattern: ""  },
    15.1: { id: "personWeight", type: "number", placeholder: "80", pattern: ""  },
    15.2: { id: "personHeight", type: "number", placeholder: "185", pattern: ""  },
    16: { id: "sleepHours", type: "number", placeholder: "8", pattern: ""  },
    17.1: { id: "numberA", type: "number", placeholder: "8", pattern: ""  },
    17.2: { id: "numberB", type: "number", placeholder: "15", pattern: ""  },
    17.3: { id: "numberC", type: "number", placeholder: "13", pattern: ""  },
    19: { id: "dailyRevenue", type: "number", placeholder: "450000", pattern: ""  },
    20: { id: "birthPlace", type: "text", placeholder: "Sárvár", pattern: ""  },
};
const labelOptionObj = {
    1.1: { inputId: "productPrice", title: "Termék ára: " },
    1.2: { inputId: "tax", title: "ÁFA (%): " },
    2: { inputId: "numberCheck", title: "Add meg a számot amit szeretnél megvizsgálni (prím-e?): " },
    3: { inputId: "palindromeCheck", title: "Add meg a szöveget amit szeretnél megvizsgálni (palindrom–e?): " },
    4: { inputId: "randomPasswordLength", title: "Add meg milyen hosszú jelszót szeretnél: (generálás: kis-nagybetü; abc-számok): " },
    5.1: { inputId: "firstNumber", title: "Add meg első számot: " },
    5.2: { inputId: "secondNumber", title: "Add meg a második számot: " },
    9.1: { inputId: "legA", title: "Adj meg egy befogót (a):" },
    9.2: { inputId: "legB", title: "Adj meg egy befogót (b):" },
    10.1: { inputId: "consumption", title: "Fogyasztás (liter/100 km):" },
    10.2: { inputId: "fuelPrice", title: "Benzin ára (liter / Ft):" },
    10.3: { inputId: "distance", title: "Út hossza (km):" },
    11.1: { inputId: "exchangeRate", title: "Euró árfolyama (1 € hány Ft):" },
    11.2: { inputId: "amount", title: "Átváltandó euró (€):" },
    12: { inputId: "sideLength", title: "Kocka élhossza (cm):" },
    13.1: { inputId: "coneRadius", title: "Kúp sugara (r - cm):" },
    13.2: { inputId: "coneHeight", title: "Kúp magassága (m - cm):" },
    14.1: { inputId: "lowerBound", title: "Alsó határ:" },
    14.2: { inputId: "upperBound", title: "Felső határ:" },
    15.1: { inputId: "personWeight", title: "Tömeg (kg):" },
    15.2: { inputId: "personHeight", title: "Magasság (cm):" },
    16: { inputId: "sleepHours", title: "Átlagos alvásidő (óra):" },
    17.1: { inputId: "numberA", title: "a: Együttható" },
    17.2: { inputId: "numberB", title: "b: Együttható" },
    17.3: { inputId: "numberC", title: "c: Együttható" },
    19: { inputId: "dailyRevenue", title: "Napi bevétel (Ft):" },
    20: { inputId: "birthPlace", title: "Születési hely:" },
};

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Globális függvények ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function clearPlaceholder() {
    document.getElementById("displayTaskSolution").innerHTML = "";
}

function createPTextBoxForSolution() {
    let pTextBox = document.createElement("p");
    pTextBox.setAttribute("id", "pTextBox");
    pTextBox.setAttribute("class", "bg-body-tertiary p-3 fw-bold");

    return pTextBox;
}

function createButton(buttonOptionObj) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", buttonOptionObj.id);
    button.setAttribute("name", buttonOptionObj.id);
    button.setAttribute("class", "btn btn-primary m-3 p-2");
    button.setAttribute("onclick", buttonOptionObj.onclick);
    button.innerHTML = buttonOptionObj.title;

    return button;
}

function createInputField(inputOptionObj) {
    let input = document.createElement("input");
    input.setAttribute("type", inputOptionObj.type);
    input.setAttribute("id", inputOptionObj.id);
    input.setAttribute("placeholder", inputOptionObj.placeholder);
    input.classList.add("m-2");
    input.setAttribute("pattern", inputOptionObj.pattern);
    input.required = true;

    return input;
}

function createLabelText(labelOptionObj) {
    let label = document.createElement("label");
    label.setAttribute("for", labelOptionObj.inputId);
    label.setAttribute("class", "p-2");
    label.innerHTML = labelOptionObj.title;

    return label;
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 1. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask01() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[1.1]));
    container.appendChild(createInputField(inputOptionObj[1.1]));
    container.appendChild(createLabelText(labelOptionObj[1.2]));
    container.appendChild(createInputField(inputOptionObj[1.2]));
    container.appendChild(createButton(buttonOptionObj[1]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask01() {
    clearPlaceholder();
    formDomTask01();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 2. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask02() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[2]));
    container.appendChild(createInputField(inputOptionObj[2]));
    container.appendChild(createButton(buttonOptionObj[2]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask02() {
    clearPlaceholder();
    formDomTask02();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 3. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask03() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[3]));
    container.appendChild(createInputField(inputOptionObj[3]));
    container.appendChild(createButton(buttonOptionObj[3]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask03() {
    clearPlaceholder();
    formDomTask03();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 4. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function preventInvalidCharsTask04() {
    document.getElementById("randomPasswordLength").defaultValue = "1";
    let inputBoxTask04 = document.getElementById("randomPasswordLength");
    const invalidCharsTask04 = ["-", "+", "e", ".", ","];
    inputBoxTask04.addEventListener("keydown", function (e) {
        if (invalidCharsTask04.includes(e.key)) {
            e.preventDefault();
        }
    });
}

function formDomTask04() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[4]));
    container.appendChild(createInputField(inputOptionObj[4]));
    container.appendChild(createButton(buttonOptionObj[4]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask04() {
    clearPlaceholder();
    formDomTask04();
    preventInvalidCharsTask04();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 5. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function preventInvalidCharsTask05() {
    const inputBoxes = document.getElementsByClassName("preventChars");
    const invalidChars = ["+", "e"];
    for (let inputBox of inputBoxes) {
        inputBox.value = "1";
        inputBox.addEventListener("keydown", function (event) {
            if (invalidChars.includes(event.key)) {
                event.preventDefault();
            }
        });
    }
}

function formDomTask05() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[5.1]));
    container.appendChild(createInputField(inputOptionObj[5.1]));
    container.appendChild(createLabelText(labelOptionObj[5.2]));
    container.appendChild(createInputField(inputOptionObj[5.2]));
    container.appendChild(createButton(buttonOptionObj[5]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask05() {
    clearPlaceholder();
    formDomTask05();
    preventInvalidCharsTask05();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 6. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask06() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createButton(buttonOptionObj[6]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask06() {
    clearPlaceholder();
    formDomTask06();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 7. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask07() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createButton(buttonOptionObj[7]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask07() {
    clearPlaceholder();
    formDomTask07();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 8. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function createInputTextTask08() {
    let inputText = document.createElement("textarea");
    inputText.setAttribute("id", "inputText");
    inputText.setAttribute("placeholder", "Írj be egy szöveget...");
    inputText.setAttribute("rows", "4");
    inputText.setAttribute("cols", "50");
    return inputText;
}

function formDomTask08() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createPTextBoxForSolution());
    container.appendChild(createInputTextTask08());
    container.appendChild(createButton(buttonOptionObj[8]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask08() {
    clearPlaceholder();
    formDomTask08();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 9. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask09() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[9.1]));
    container.appendChild(createInputField(inputOptionObj[9.1]));
    container.appendChild(createLabelText(labelOptionObj[9.2]));
    container.appendChild(createInputField(inputOptionObj[9.2]));
    container.appendChild(createButton(buttonOptionObj[9]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask09() {
    clearPlaceholder();
    formDomTask09();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 10. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask10() {
    let container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[10.1]));
    container.appendChild(createInputField(inputOptionObj[10.1]));
    container.appendChild(createLabelText(labelOptionObj[10.2]));
    container.appendChild(createInputField(inputOptionObj[10.2]));
    container.appendChild(createLabelText(labelOptionObj[10.3]));
    container.appendChild(createInputField(inputOptionObj[10.3]));
    container.appendChild(createButton(buttonOptionObj[10]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask10() {
    clearPlaceholder();
    formDomTask10();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 11. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask11() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[11.1]));
    container.appendChild(createInputField(inputOptionObj[11.1]));
    container.appendChild(createLabelText(labelOptionObj[11.2]));
    container.appendChild(createInputField(inputOptionObj[11.2]));
    container.appendChild(createButton(buttonOptionObj[11]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask11() {
    clearPlaceholder();
    formDomTask11();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 12. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask12() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[12]));
    container.appendChild(createInputField(inputOptionObj[12]));
    container.appendChild(createButton(buttonOptionObj[12]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask12() {
    clearPlaceholder();
    formDomTask12();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 13. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask13() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[13.1]));
    container.appendChild(createInputField(inputOptionObj[13.1]));
    container.appendChild(createLabelText(labelOptionObj[13.2]));
    container.appendChild(createInputField(inputOptionObj[13.2]));
    container.appendChild(createButton(buttonOptionObj[13]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask13() {
    clearPlaceholder();
    formDomTask13();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 14. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask14() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[14.1]));
    container.appendChild(createInputField(inputOptionObj[14.1]));
    container.appendChild(createLabelText(labelOptionObj[14.2]));
    container.appendChild(createInputField(inputOptionObj[14.2]));
    container.appendChild(createButton(buttonOptionObj[14]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask14() {
    clearPlaceholder();
    formDomTask14();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 15. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask15() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[15.1]));
    container.appendChild(createInputField(inputOptionObj[15.1]));
    container.appendChild(createLabelText(labelOptionObj[15.2]));
    container.appendChild(createInputField(inputOptionObj[15.2]));
    container.appendChild(createButton(buttonOptionObj[15]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask15() {
    clearPlaceholder();
    formDomTask15();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 16. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask16() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[16]));
    container.appendChild(createInputField(inputOptionObj[16]));
    container.appendChild(createButton(buttonOptionObj[16]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask16() {
    clearPlaceholder();
    formDomTask16();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 17. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function createInputFieldTask17(id, placeholder) {
    let inputField = document.createElement("input");
    inputField.setAttribute("type", "number");
    inputField.setAttribute("id", id);
    inputField.setAttribute("placeholder", placeholder);
    inputField.classList.add("m-2");

    return inputField;
}

function formDomTask17() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[17.1]));
    container.appendChild(createInputField(inputOptionObj[17.1]));
    container.appendChild(createLabelText(labelOptionObj[17.2]));
    container.appendChild(createInputField(inputOptionObj[17.2]));
    container.appendChild(createLabelText(labelOptionObj[17.3]));
    container.appendChild(createInputField(inputOptionObj[17.3]));
    container.appendChild(createButton(buttonOptionObj[17]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask17() {
    clearPlaceholder();
    formDomTask17();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 18. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask18() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createButton(buttonOptionObj[18]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask18() {
    clearPlaceholder();
    formDomTask18();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 19. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask19() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[19]));
    container.appendChild(createInputField(inputOptionObj[19]));
    container.appendChild(createButton(buttonOptionObj[19]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask19() {
    clearPlaceholder();
    formDomTask19();
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// 20. Feladat ////////////////////////////////
//////////////////////////////////////////////////////////////////////

function formDomTask20() {
    const container = document.getElementById("displayTaskSolution");
    container.appendChild(createLabelText(labelOptionObj[20]));
    container.appendChild(createInputField(inputOptionObj[20]));
    container.appendChild(createButton(buttonOptionObj[20]));
    container.appendChild(createPTextBoxForSolution());
}

function prepTask20() {
    clearPlaceholder();
    formDomTask20();
}