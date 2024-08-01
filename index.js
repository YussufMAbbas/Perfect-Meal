let name, budget, gender, age, weight, height, activityLevel, activityFactor, goal, tDEE, carbs, protein, fats;

const surveyButton = document.getElementById("survey-button");

function checkStorage() {
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
    if (name && budget && age && weight && height && activityLevel && goal && tDEE && carbs && protein && fats) {
        surveyButton.textContent = "اذهب إلى ملفك الشخصي"
        surveyButton.addEventListener("click", () => {
            window.location.href = "meal.html"
        })
    } else {
        surveyButton.addEventListener("click", () => {
            window.location.href = "meal-planner.html"
        })
    }
}

window.onload = checkStorage;
// surveyButton.addEventListener("click" checkStorage())