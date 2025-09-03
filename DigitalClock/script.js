const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("sec");
const date = document.getElementById("date");
const day = document.getElementById("day");

function digitalClock() {
    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let sec = now.getSeconds();

    // let month = now.getMonth(); Pending
    let dates = now.getDate();
    let days = now.getDay();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sec = sec < 10 ? "0" + sec : sec;

    if (hour === 13) {
        hour = 1;
    } else if (hour === 14) {
        hour = 2;
    } else if (hour === 15) {
        hour = 3;
    } else if (hour === 16) {
        hour = 4;
    } else if (hour === 17) {
        hour = 5;
    } else if (hour === 18) {
        hour = 6;
    } else if (hour === 19) {
        hour = 7;
    } else if (hour === 20) {
        hour = 8;
    } else if (hour === 21) {
        hour = 9;
    } else if (hour === 22) {
        hour = 10;
    } else if (hour === 23) {
        hour = 11;
    } else if (hour === 24) {
        hour = 12;
    } 
    days = (days === 1) ? "Monday" : days;
    days = (days === 2) ? "Tuesday" : days;
    days = (days === 3) ? "Wednesday" : days;
    days = (days === 4) ? "Thursday" : days;
    days = (days === 5) ? "Friday" : days;
    days = (days === 6) ? "Saturday" : days;
    days = (days === 0) ? "Sunday" : days;
    
    h.innerText = hour;
    m.innerText = minutes;
    s.innerText = sec;

    date.innerText = `Date: ${dates}`;
    day.innerText = `Day: ${days}`;

}

setInterval(digitalClock, 1000);
digitalClock();