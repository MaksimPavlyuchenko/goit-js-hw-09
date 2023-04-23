import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const start = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
const currentTime = new Date();
let selectedDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Confirm.show(
        'Sorry😪, date no valid',
        'Please choose a date in the future!!!',
        'OK'
      );
      selectedDate = null;
    }
    if (selectedDates[0] > Date.now()) {
      start.removeAttribute('disabled');
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

start.setAttribute('disabled', 'true');
start.addEventListener('click', onStart);
function onStart() {
  start.setAttribute('disabled', 'true');
  if (selectedDate > Date.now) {
    timerId = setInterval(() => {
      console.log(convertMs(selectedDate - Date.now()));
    }, 1000);
  } else if (selectedDate === Date.now()) {
    clearInterval(timerId);
    start.removeAttribute('disabled');
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  // daysValue.textContent = addLeadingZero(days);
  const hours = Math.floor((ms % day) / hour);
  // hoursValue.textContent = addLeadingZero(hours);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // minutesValue.textContent = addLeadingZero(minutes);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // secondsValue.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {}
