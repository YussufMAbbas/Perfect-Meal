const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const activityRadioButtons = document.getElementsByName("activity");
const genderRadioButtons = document.getElementsByName("gender");
const radioLabel1 = document.getElementById("radio-label1")
const radioLabel2 = document.getElementById("radio-label2")
const carbsField = document.getElementById("carbs")
const proteinField = document.getElementById("protein")
const fatsField = document.getElementById("fats")
const results = document.getElementById("results")

let checkedActivityRadio;
const checkingActivityRadio = function () {
    for (let button of activityRadioButtons) {
        if (button.checked) {
            checkedActivityRadio = button.id
        }
    }
}
const submitButton = document.getElementById("submit");
const inputs = [ageInput, weightInput, heightInput];
const caloriesField = document.getElementById("calories");
let activityFactor;
function calcActivityFactor(activityLevel) {
    switch (activityLevel) {
        case "very-low":
            activityFactor = 1.2;
            break;
        case "light":
            activityFactor = 1.375;
            break
        case "moderate":
            activityFactor = 1.55;
            break
        case "high":
            activityFactor = 1.725;
            break
        case "very-high":
            activityFactor = 1.9;
            break
    }
}
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let checkedGenderRadio;
    let genderRadioValid = false;
    for (let button of genderRadioButtons) {
        if (button.checked) {
            checkedGenderRadio = button.id
        }
    }
    if (checkedGenderRadio === undefined) {
        if (radioLabel1.nextElementSibling.nodeName === "SPAN") {
            radioLabel1.nextElementSibling.remove();
            radioLabel1.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            radioLabel1.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (radioLabel1.nextElementSibling.nodeName === "SPAN") {
            radioLabel1.nextElementSibling.remove();
        }
        genderRadioValid = true;
    }

    let ageInputValid = false;
    if (ageInput.value === "") {
        if (ageInput.previousElementSibling.nodeName === "SPAN") {
            ageInput.previousElementSibling.remove();
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)

        }
        else {
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
    }
    else if (isNaN(ageInput.value)) {
        if (ageInput.previousElementSibling.nodeName === "SPAN") {
            ageInput.previousElementSibling.remove();
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تكون هذه الخانة رقمًا</span>`)
        }
        else {
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تكون هذه الخانة رقمًا</span>`)
        }
    } else {
        if (ageInput.previousElementSibling.nodeName === "SPAN") {
            ageInput.previousElementSibling.remove()
        }
        ageInputValid = true
    }

    let weightInputValid = false;
    if (weightInput.value === "") {
        if (weightInput.previousElementSibling.nodeName === "SPAN") {
            weightInput.previousElementSibling.remove();
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)

        }
        else {
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
    }
    else if (isNaN(weightInput.value)) {
        if (weightInput.previousElementSibling.nodeName === "SPAN") {
            weightInput.previousElementSibling.remove();
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تكون هذه الخانة رقمًا</span>`)
        }
        else {
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تكون هذه الخانة رقمًا</span>`)
        }
    } else {
        if (weightInput.previousElementSibling.nodeName === "SPAN") {
            weightInput.previousElementSibling.remove()
        }
        weightInputValid = true
    }

    let heightInputValid = false;
    if (heightInput.value === "") {
        if (heightInput.previousElementSibling.nodeName === "SPAN") {
            heightInput.previousElementSibling.remove();
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
        else {
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
    }
    else if (isNaN(heightInput.value)) {
        if (heightInput.previousElementSibling.nodeName === "SPAN") {
            heightInput.previousElementSibling.remove();
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة</span>`)
        }
        else {
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة</span>`)
        }
    } else {
        if (heightInput.previousElementSibling.nodeName === "SPAN") {
            heightInput.previousElementSibling.remove()
        }
        heightInputValid = true
    }

    let activityRadioValid = false;
    let checkedActivityRadio;
    for (let button of activityRadioButtons) {
        if (button.checked) {
            checkedActivityRadio = button.id
        }
    }
    if (checkedActivityRadio === undefined) {
        if (radioLabel2.nextElementSibling.nodeName === "SPAN") {
            radioLabel2.nextElementSibling.remove();
            radioLabel2.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            radioLabel2.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (radioLabel2.nextElementSibling.nodeName === "SPAN") {
            radioLabel2.nextElementSibling.remove();
        }
        activityRadioValid = true;
    }

    if (ageInputValid && heightInputValid && weightInputValid && genderRadioValid && activityRadioValid) {
        for (let input of inputs) {
            if (input.previousElementSibling.nodeName === "SPAN") {
                input.previousElementSibling.remove();
            }
        }
        if (radioLabel1.nextElementSibling.nodeName === "SPAN") {
            radioLabel1.nextElementSibling.remove();
        }
        if (radioLabel2.nextElementSibling.nodeName === "SPAN") {
            radioLabel2.nextElementSibling.remove();
        }
        calcActivityFactor(checkedActivityRadio);
        results.classList.remove("hidden")
        if (checkedGenderRadio === "male") {
            const maleTDEE = ((88.362 + (13.397 * Number(weightInput.value)) + (4.799 * Number(heightInput.value)) - (5.677 * Number(ageInput.value))) * Number(activityFactor)).toFixed(1)
            const carbs = ((maleTDEE * 0.5) / 4).toFixed(1)
            const protein = ((maleTDEE * 0.3) / 4).toFixed(1)
            const fats = ((maleTDEE * 0.2) / 9).toFixed(1)

            caloriesField.textContent = `${maleTDEE} سعرة حرارية`
            carbsField.textContent = `الكاربوهيدرات: ${carbs}`
            proteinField.textContent = `البروتين: ${protein}`
            fatsField.textContent = `الدهون الصحية: ${fats}`
        }
        else {
            const femaleTDEE = ((447.593 + (9.247 * Number(weightInput.value)) + (3.098 * Number(heightInput.value)) - (4.330 * Number(ageInput.value))) * Number(activityFactor)).toFixed(1)

            const carbs = ((femaleTDEE * 0.5) / 4).toFixed(1)
            const protein = ((femaleTDEE * 0.3) / 4).toFixed(1)
            const fats = ((femaleTDEE * 0.2) / 9).toFixed(1)

            caloriesField.textContent = `${femaleTDEE} سعرة حرارية`
            carbsField.textContent = `الكاربوهيدرات: ${carbs}`
            proteinField.textContent = `البروتين: ${protein}`
            fatsField.textContent = `الدهون الصحية: ${fats}`
        }
    }
})