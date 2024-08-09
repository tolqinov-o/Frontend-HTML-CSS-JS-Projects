const btn = document.getElementById("calculate");
const birthday = document.getElementById("date");
const result = document.getElementById("age");

function calculateAge() {
    const birthdayValue = birthday.value;

    if (birthdayValue === "") { 
        alert("Please enter your birthday!");
    } else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getDate();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}

btn.addEventListener("click", calculateAge);