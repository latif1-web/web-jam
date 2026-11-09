const dayNames = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

let schedules = JSON.parse(localStorage.getItem('schoolSchedules')) || [];

let customAudioSrc = null;
let lastTriggeredMinute = null;

const clockEl=document.getElementById('clock');
const dateEl=document.getElementById('date');
const currentDayLabel=document.getElementById('current-day-label');
const statusBadge=document.getElementById('status-badge');

const form=document.getElementById('schedule-form');
const scheduleBody=document.getElementById('schedule-body');

function updateClock(){

const now=new Date();

const hours=String(now.getHours()).padStart(2,'0');
const minutes=String(now.getMinutes()).padStart(2,'0');
const seconds=String(now.getSeconds()).padStart(2,'0');

clockEl.textContent=`${hours}:${minutes}:${seconds}`;

const dayIndex=now.getDay();
const currentDayName=dayNames[dayIndex];

currentDayLabel.textContent=currentDayName;

}

setInterval(updateClock,1000);
updateClock();