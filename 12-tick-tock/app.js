const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();

let tempYear = tempDate.getFullYear();

let futureDate = new Date(tempYear, 7, 4, 0, 0, 0);
// year, month, date, hour, minute, second

if (tempDate > futureDate) {
  futureDate = new Date(tempYear + 1, 7, 4, 0, 0, 0);
}

//console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `Countdown ends on ${weekday}, ${date}th ${month} ${year} 0${hours}:0${minutes}am `;

// Future time in ms

const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  // console.log(new Date(tempDate));
  // console.log(futureDate);
  const t = futureTime - today;
  // console.log(t);
  // 1s=1000ms
  // 1m=60s
  // 1hr=60min
  // 1d= 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let days = Math.floor(t / oneDay);
  // console.log(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(minutes);

  let seconds = Math.floor((t % oneMinute) / oneSecond);
  // console.log(seconds);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> See you next year! </h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
