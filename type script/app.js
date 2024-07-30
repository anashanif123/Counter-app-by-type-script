var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var am_pm = document.getElementById("am_pm")
var date = document.getElementById("date")
var month = document.getElementById("month")
var year = document.getElementById("year")
var day = document.getElementById("day")

setInterval(function() {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    var period = "AM";
    var currentTareekh = currentDate.getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var currentMonth = monthNames[currentDate.getMonth()];
    var currentYear = currentDate.getFullYear();
    var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var currentDay = dayNames[currentDate.getDay()];
    if (currentHours === 0) {
        currentHours = 12
    }if (currentHours > 12) {
        currentHours -= 12
        period = "PM";
    }if (currentHours < 10) {
        currentHours = "0" + currentHours
    }if (currentSecond < 10) {
        currentSecond = "0" + currentSecond
    }if (currentMinute < 10) {
        currentMinute = "0" + currentMinute
    }if (currentTareekh < 10) {
        currentTareekh = "0" + currentTareekh
    }



    hours.innerText = currentHours;
    minutes.innerText = currentMinute;
    seconds.innerText = currentSecond;
    am_pm.innerText = period;
    date.innerText = currentTareekh + "/" + "\n" + currentDay   ;
    month.innerText = currentMonth;
    year.innerText = currentYear;
}, 1000)