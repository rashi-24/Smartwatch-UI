const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");
const dayElement = document.querySelector(".day");

function formatTime(date) {
    return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

function formatDay(date) {
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return `${DAYS[date.getDay()]}`;
}

function formatDate(date) {
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();
    dateElement.textContent = formatDate(now);
    timeElement.textContent = formatTime(now);
    dayElement.textContent = formatDay(now);
}, 200);