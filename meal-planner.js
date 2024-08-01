const nameInput = document.getElementById("name");

const budgetRadioLabel = document.getElementById("budget-radio-label");
const budgetRadioButtons = document.getElementsByName("budget");


const proceedButton = document.getElementById("proceed");
const tdeeForm = document.getElementById("tdee-form");

const genderRadioLabel = document.getElementById("gender-radio-label");
const genderRadioButtons = document.getElementsByName("gender");

const ageInput = document.getElementById("age");

const weightInput = document.getElementById("weight");

const heightInput = document.getElementById("height");

const activityRadioLabel = document.getElementById("activity-radio-label");
const activityRadioButtons = document.getElementsByName("activity");

let activityFactorValue;

const goalRadioLabel = document.getElementById("goal-radio-label")
const goalRadioButtons = document.getElementsByName("goal")

const submitButton = document.getElementById("submit");

proceedButton.addEventListener("click", (event) => {
    event.preventDefault();
    let nameInputValid = false;
    let budgetRadioValid = false;


    if (nameInput.value === "") {
        if (nameInput.previousElementSibling.nodeName === "SPAN") {
            nameInput.previousElementSibling.remove();
            nameInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)

        }
        else {
            nameInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
    } else {
        if (nameInput.previousElementSibling.nodeName === "SPAN") {
            nameInput.previousElementSibling.remove()
        }
        nameInputValid = true;
    }

    let checkedBudgetRadio;
    for (let button of budgetRadioButtons) {
        if (button.checked) {
            checkedBudgetRadio = button.id
        }
    }
    if (checkedBudgetRadio === undefined) {
        if (budgetRadioLabel.nextElementSibling.nodeName === "SPAN") {
            budgetRadioLabel.nextElementSibling.remove();
            budgetRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            budgetRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (budgetRadioLabel.nextElementSibling.nodeName === "SPAN") {
            budgetRadioLabel.nextElementSibling.remove();
        }
        budgetRadioValid = true;
    }

    if (nameInputValid && budgetRadioValid) {
        proceedButton.classList.add("hidden");
        tdeeForm.classList.remove("hidden")
        tdeeForm.scrollIntoView({ behavior: "smooth" })
    }
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let nameInputValid = false;
    let budgetRadioValid = false;
    let genderRadioValid = false;
    let ageInputValid = false;
    let weightInputValid = false;
    let heightInputValid = false;
    let activityRadioValid = false;


    if (nameInput.value === "") {
        if (nameInput.previousElementSibling.nodeName === "SPAN") {
            nameInput.previousElementSibling.remove();
            nameInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)

        }
        else {
            nameInput.previousElementSibling.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) هذه الخانة مطلوبة</span>`)
        }
    } else {
        if (nameInput.previousElementSibling.nodeName === "SPAN") {
            nameInput.previousElementSibling.remove()
        }
        nameInputValid = true;
    }

    let checkedBudgetRadio;
    for (let button of budgetRadioButtons) {
        if (button.checked) {
            checkedBudgetRadio = button.id
        }
    }
    if (checkedBudgetRadio === undefined) {
        if (budgetRadioLabel.nextElementSibling.nodeName === "SPAN") {
            budgetRadioLabel.nextElementSibling.remove();
            budgetRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            budgetRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (budgetRadioLabel.nextElementSibling.nodeName === "SPAN") {
            budgetRadioLabel.nextElementSibling.remove();
        }
        budgetRadioValid = true;
    }

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

    let checkedGoalRadio;
    for (let button of goalRadioButtons) {
        if (button.checked) {
            checkedGoalRadio = button.id
        }
    }
    if (checkedGoalRadio === undefined) {
        if (goalRadioLabel.nextElementSibling.nodeName === "SPAN") {
            goalRadioLabel.nextElementSibling.remove();
            goalRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        } else {
            goalRadioLabel.insertAdjacentHTML("afterend", `<span class=\"warning\"> (*) يجب أن تختار من التالي</span>`)
        }
    } else {
        if (goalRadioLabel.nextElementSibling.nodeName === "SPAN") {
            goalRadioLabel.nextElementSibling.remove();
        }
        goalRadioValid = true;
    }

    if (nameInputValid && budgetRadioValid && genderRadioValid && ageInputValid && weightInputValid && heightInputValid && activityRadioValid && goalRadioValid) {
        const name = nameInput.value;
        const budget = checkedBudgetRadio;
        const gender = checkedGenderRadio;
        const age = ageInput.value;
        const weight = weightInput.value;
        const height = heightInput.value;
        const activityLevel = checkedActivityRadio;
        const activityFactor = activityFactorValue;
        const goal = checkedGoalRadio;

        let tDEE;
        if (checkedGenderRadio === "male") {
            tDEE = ((88.362 + (13.397 * Number(weightInput.value)) + (4.799 * Number(heightInput.value)) - (5.677 * Number(ageInput.value))) * Number(activityFactor)).toFixed(1)

        } else {
            tDEE = ((447.593 + (9.247 * Number(weightInput.value)) + (3.098 * Number(heightInput.value)) - (4.330 * Number(ageInput.value))) * Number(activityFactor)).toFixed(1)
        }
        if (checkedGoalRadio === "lose") {
            tDEE -= 500
        } else if (checkedGoalRadio === "gain") {
            tDEE += 500
        }

        const carbs = ((tDEE * 0.5) / 4).toFixed(1)
        const protein = ((tDEE * 0.3) / 4).toFixed(1)
        const fats = ((tDEE * 0.2) / 9).toFixed(1)
        console.log("R")
        localStorage.setItem('name', name);
        localStorage.setItem('budget', budget);
        localStorage.setItem('gender', gender);
        localStorage.setItem('age', age);
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('activityLevel', activityLevel);
        localStorage.setItem('activityFactor', activityFactor);
        localStorage.setItem('goal', goal);
        localStorage.setItem('tDEE', tDEE);
        localStorage.setItem('carbs', carbs);
        localStorage.setItem('protein', protein);
        localStorage.setItem('fats', fats);

        window.location.href = 'meal.html';
    }
}})