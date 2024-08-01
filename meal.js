let name, budget, gender, age, weight, height, activityLevel, activityFactor, goal, tDEE, carbs, protein, fats;

const nameElement = document.getElementById('name');
const budgetElement = document.getElementById('budget');
const economicMealPlan = document.getElementById("economic");
const expensiveMealPlan = document.getElementById("expensive");
const genderElement = document.getElementById("gender")
const ageElement = document.getElementById('age');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const activityElement = document.getElementById('activity');
const tdeeElement = document.getElementById('tdee');
const mealTotalCaloriesElement = document.getElementById('meal-total-calories');
const goalElement = document.getElementById('goal');
const carbsElement = document.getElementById('carbs');
const proteinElement = document.getElementById('protein');
const fatsElement = document.getElementById('fats');
const amounts = document.getElementsByClassName("amount");

function displayFormData() {
    if (name && budget && age && weight && height && activityLevel && goal && tDEE && carbs && protein && fats) {
        let mealTotalCalories = Number(tDEE);
        if (goal === "lose") {
            mealTotalCalories -= 500;
        } else if (goal === "gain") {
            mealTotalCalories += 500
        }
        nameElement.textContent = name;
        if (budget === "economic") {
            budgetElement.textContent = "محدودة";
            economicMealPlan.classList.remove("hidden");
            expensiveMealPlan.classList.add("hidden");
        } else {
            budgetElement.textContent = "عالية";
            economicMealPlan.classList.add("hidden");
            expensiveMealPlan.classList.remove("hidden");
        }
        if (gender === "male") {
            genderElement.textContent = "ذكر";
        } else {
            genderElement.textContent = "أنثى";
        }
        ageElement.textContent = age;
        weightElement.textContent = weight;
        heightElement.textContent = height;
        switch (activity) {
            case "very-low":
                activityElement.textContent = "قليل جدًّا"
                break;
            case "light":
                activityElement.textContent = "بسيط"
                break
            case "moderate":
                activityElement.textContent = "متوسط"
                break
            case "high":
                activityElement.textContent = "عالي"
                break
            case "very-high":
                activityElement.textContent = "عالي جدًّا"
                break
        }
        tdeeElement.textContent = Number(tDEE).toFixed(1);
        if (goal === "lose") {
            goalElement.textContent = "خسارة وزن";
        } else if (goal === "maintain") {
            goalElement.textContent = "ثبات";
        } else {
            goalElement.textContent = "اكتساب وزن";
        }

        mealTotalCaloriesElement.textContent = Number(mealTotalCalories).toFixed(1);
        carbsElement.textContent = carbs;
        proteinElement.textContent = protein;
        fatsElement.textContent = fats;

        const scalingFactor = mealTotalCalories / 2000;
        for (let amount of amounts) {
            amount.textContent = (amount.textContent * scalingFactor).toFixed(1);
        }
    } else {
        window.location.href = 'meal-planner.html';
    }
}

function loadFormData() {
    name = localStorage.getItem('name');
    budget = localStorage.getItem('budget');
    gender = localStorage.getItem('gender');
    age = localStorage.getItem('age');
    weight = localStorage.getItem('weight');
    height = localStorage.getItem('height');
    activityLevel = localStorage.getItem('activityLevel');
    goal = localStorage.getItem('goal');
    tDEE = localStorage.getItem('tDEE');
    carbs = localStorage.getItem('carbs');
    protein = localStorage.getItem('protein');
    fats = localStorage.getItem('fats');
    displayFormData()
}


window.onload = loadFormData;
