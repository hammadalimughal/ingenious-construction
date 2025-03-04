// Get the elements we need to manipulate
const countElements = $('.count');

// Define the function that will update the count for each fact
function updateCount() {
  countElements.each(function() {
    const target = +$(this).data('target');
    let count = +$(this).text();
    const increment = target / 100; // Increase the count by 1% of the target value
    if (count < target) {
      count += increment;
      $(this).text(Math.floor(count)); // Round down to the nearest integer
    } else {
      $(this).text(target);
    }
  });
}

// Set up the counter to start on page load
$(window).on('load', () => {
  updateCount();
});

// Set up the counter to run every 50ms
setInterval(updateCount, 50);

  /*--------------------------------------------------------------
  ##_ Date Counter
--------------------------------------------------------------*/
var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;

var target_date = new Date("Jan 1, " + next_year).getTime();
 
var days, hours, minutes, seconds;
 
var $days = document.getElementById("d");
var $hours = document.getElementById("h");
var $minutes = document.getElementById("m");
var $seconds = document.getElementById("s");

function update() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    $days.innerHTML = pad(days, 2);
    $hours.innerHTML = pad(hours, 2);
    $minutes.innerHTML = pad(minutes, 2);
    $seconds.innerHTML = pad(seconds, 2);
}


update();

setInterval(update, 1000);

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}