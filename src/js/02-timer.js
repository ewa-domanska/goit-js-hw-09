import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let startButton = document.querySelector('[data-start]');
let userDate;
let days = document.querySelector('[data-days]');
let hours = document.querySelector('[data-hours]');
let minutes = document.querySelector('[data-minutes]');
let seconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert("Please choose a date in the future")
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      userDate = selectedDates[0];
    }
    console.log(selectedDates[0]);
  }
};

flatpickr('#datetime-picker', options);

startButton.addEventListener("click", () => {
  setInterval(calculateAndDisplayMissingTime, 1000);
});

function calculateAndDisplayMissingTime() {
  let timeDifference = convertMs(userDate - new Date());
  days.innerHTML = addLeadingZero(timeDifference.days);
  hours.innerHTML = addLeadingZero(timeDifference.hours);
  minutes.innerHTML = addLeadingZero(timeDifference.minutes);
  seconds.innerHTML = addLeadingZero(timeDifference.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {days, hours, minutes, seconds};
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}