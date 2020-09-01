const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Set Date Input Min with today's date
const today = new Date().toISOString().split('T')[0];
// .split the data from date/time into an array
console.log(today);

dateEl.setAttribute('min', today);