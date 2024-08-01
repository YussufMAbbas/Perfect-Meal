const genderRadioLabel = document.getElementById("gender-radio-label");
const genderRadioButtons = document.getElementsByName("gender");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const heightInput = document.getElementById("height");

const activityRadioLabel = document.getElementById("activity-radio-label");
const activityRadioButtons = document.getElementsByName("activity");

const inputs = [ageInput, weightInput, heightInput];

let activityFactorValue;

const submitButton = document.getElementById("submit");

const caloriesField = document.getElementById("calories")
const carbsField = document.getElementById("carbs")
const proteinField = document.getElementById("protein")
const fatsField = document.getElementById("fats")
const results = document.getElementById("results")

submitButton.addEventListener("click", (event) => {
    let genderRadioValid = false;
    let ageInputValid = false;
    let weightInputValid = false;
    let heightInputValid = false;
    let activityRadioValid = false;

    event.preventDefault();
    let checkedGenderRadio;
    for (let button of genderRadioButtons) {
        if (button.checked) {
            checkedGenderRadio = button.id
        }
    }
    if (checkedGenderRadio === undefined) {
        if (genderRadioLabel.nextElementSibling.nodeName === "SPAN") {
            genderRadioLabel.nextElementSibling.remove();
            genderRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            genderRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (genderRadioLabel.nextElementSibling.nodeName === "SPAN") {
            genderRadioLabel.nextElementSibling.remove();
        }
        genderRadioValid = true;
    }

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
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
        else {
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
    } else if (!(12 <= ageInput.value && ageInput.value <= 80)) {
        if (ageInput.previousElementSibling.nodeName === "SPAN") {
            ageInput.previousElementSibling.remove();
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (12-80 سنة)</span>`)
        }
        else {
            ageInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (12-80 سنة)</span>`)
        }
    }
    else {
        if (ageInput.previousElementSibling.nodeName === "SPAN") {
            ageInput.previousElementSibling.remove()
        }
        ageInputValid = true
    }

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
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
        else {
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
    } else if (!(40 <= weightInput.value && weightInput.value <= 300)) {
        if (weightInput.previousElementSibling.nodeName === "SPAN") {
            weightInput.previousElementSibling.remove();
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (40-300 كجم)</span>`)
        }
        else {
            weightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (40-300 كجم)</span>`)
        }
    }
    else {
        if (weightInput.previousElementSibling.nodeName === "SPAN") {
            weightInput.previousElementSibling.remove()
        }
        weightInputValid = true
    }

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
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
        else {
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">يجب أن تحوي هذه الخانة رقمًا</span>`)
        }
    } else if (!(150 <= heightInput.value && heightInput.value <= 250)) {
        if (heightInput.previousElementSibling.nodeName === "SPAN") {
            heightInput.previousElementSibling.remove();
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (150-250 سم)</span>`)
        }
        else {
            heightInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\">هذه القيمة غير صحيحة (150-250 سم)</span>`)
        }
    }
    else {
        if (heightInput.previousElementSibling.nodeName === "SPAN") {
            heightInput.previousElementSibling.remove()
        }
        heightInputValid = true
    }

    let checkedActivityRadio;
    for (let button of activityRadioButtons) {
        if (button.checked) {
            checkedActivityRadio = button.id
        }
    }
    if (checkedActivityRadio === undefined) {
        if (activityRadioLabel.nextElementSibling.nodeName === "SPAN") {
            activityRadioLabel.nextElementSibling.remove();
            activityRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            activityRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (activityRadioLabel.nextElementSibling.nodeName === "SPAN") {
            activityRadioLabel.nextElementSibling.remove();
        }
        activityRadioValid = true;
        switch (checkedActivityRadio) {
            case "very-low":
                activityFactorValue = 1.2;
                break;
            case "light":
                activityFactorValue = 1.375;
                break
            case "moderate":
                activityFactorValue = 1.55;
                break
            case "high":
                activityFactorValue = 1.725;
                break
            case "very-high":
                activityFactorValue = 1.9;
                break
    }
        }
        if (ageInputValid && heightInputValid && weightInputValid && genderRadioValid && activityRadioValid) {
            for (let input of inputs) {
                if (input.previousElementSibling.nodeName === "SPAN") {
                    input.previousElementSibling.remove();
                }
            }
            if (genderRadioLabel.nextElementSibling.nodeName === "SPAN") {
                genderRadioLabel.nextElementSibling.remove();
            }
            if (activityRadioLabel.nextElementSibling.nodeName === "SPAN") {
                activityRadioLabel.nextElementSibling.remove();
            }
            results.classList.remove("hidden")
            if (checkedGenderRadio === "male") {
                const maleTDEE = ((88.362 + (13.397 * Number(weightInput.value)) + (4.799 * Number(heightInput.value)) - (5.677 * Number(ageInput.value))) * Number(activityFactorValue)).toFixed(1)
                const carbs = ((maleTDEE * 0.5) / 4).toFixed(1)
                const protein = ((maleTDEE * 0.3) / 4).toFixed(1)
                const fats = ((maleTDEE * 0.2) / 9).toFixed(1)
    
                caloriesField.textContent = `${maleTDEE} سعرة حرارية`
                carbsField.textContent = `الكاربوهيدرات: ${carbs}`
                proteinField.textContent = `البروتين: ${protein}`
                fatsField.textContent = `الدهون الصحية: ${fats}`
            }
            else {
                const femaleTDEE = ((447.593 + (9.247 * Number(weightInput.value)) + (3.098 * Number(heightInput.value)) - (4.330 * Number(ageInput.value))) * Number(activityFactorValue)).toFixed(1)
    
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