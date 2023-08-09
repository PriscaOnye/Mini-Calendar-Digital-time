const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




function updateCalendar() {

    const today = new Date();

    date.innerHTML = today.getDate();
    day.innerHTML = daysOfWeek[today.getDay()];
    month.innerHTML = months[today.getMonth()];
    year.innerHTML = today.getFullYear();

    console.log(today);
}

updateCalendar();



// digital time

const hours = document.getElementById("timeHour");
const minutes = document.getElementById("timeMins");
const seconds = document.getElementById("timeSecs");
const dayTimeElement = document.getElementById("tellTime");


function updateTime() {
    const currentTime = new Date();

    const recentHour = String(currentTime.getHours()).padStart(2, '0');

    minutes.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');

    // Convert to 12-hour format and update AM/PM
    let dayTime = 'AM';

    let hourFormat  = recentHour;

    if(recentHour >= 12){
        dayTime = 'PM';

        if(recentHour > 12){
            hourFormat = String(recentHour - 12);
        }
    } else if (recentHour === '00') {
        hourFormat = '12';
    }

    const displayHour = hourFormat
   hours.innerHTML = displayHour;
    dayTimeElement.innerHTML = dayTime;

    // console.log(currentTime);
}

setInterval(updateTime, 1000);

updateTime();


