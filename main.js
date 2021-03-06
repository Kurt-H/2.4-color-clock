//alert("Howdy back");
(function(){
  'use strict';

/*
 *Objective Three: Console.log the current time on page load.
 */
/*
var currentTime = new Date();
console.log(currentTime);
*/

/*
 *Objective Four: Console.log the current time on page load. - Added stopButton to avoid having to close window to stop function running in console.
 */

/*
function updateTimeToConsole(){
  currentTime = new Date();
  console.log(currentTime);
}

var incrementClock = window.setInterval(updateTimeToConsole, 1000);

function stopClockInConsole(){
  clearInterval(incrementClock);
}

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopClockInConsole);
*/




/*
 *Objective Five: Display the current time every second.
 *Objective Six: Display the curent tine, padded with zeros to be exactly two digits long every second.
 */

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timeBar = document.querySelector('.time-bar')

function displayTime() {
  var currentTime = new Date();
  hours.textContent = ("0" + currentTime.getHours()).slice(-2);
  minutes.textContent = ("0" + currentTime.getMinutes()).slice(-2);
  seconds.textContent = ("0" + currentTime.getSeconds()).slice(-2);

  window.setInterval(displayTime, 1000);
}
displayTime();

/*
 *Objective Seven: Console.log the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, console.log 0.5)
 */


 function calcMinutePercent(){
   var time = new Date();
   var secondsTime = time.getSeconds()
   var minutePercentDec = secondsTime / 60;

   console.log(minutePercentDec);
 }
 window.setInterval(calcMinutePercent, 1000);

/*Placed outside function for performance*/


/*
 *Objective Eight: Using the percentage above, dynamically modify the length of the time bar.
 */

 function dynamicTimeBar() {
   var time = new Date();
   var minutePercentInt = Math.floor((time.getSeconds() / 60) * 100);

   console.log(minutePercentInt);

   /*for testing static length (it works)*/
   /*var calcTimeBarLength = timeBar.style.width = "100px";*/

   /*timeBar.style.width requires a string; need to figure out how to get minutePercentInt value into string. Possibly use percentage instead of px, if max-width set? */
   /*var calcTimeBarLength = timeBar.style.width = "timeBarLength px";*/

  }
  window.setInterval(dynamicTimeBar, 1000);






}());


/*
 *stop-watch
 */

/*var startButton = document.getElementById('start-button');
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');

  var startTime;
  var currentText;

  console.log(startButton);

  function toggleButton(){
    currentText = startButton.textContent;

    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    } else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';
    }
  }

  function millisecondsToInterval(ms){
    var numMsInHour = 60000 * 60;
    var numMsInMinute = 60000;
    var numMsInSecond = 1000;

    var hourCount = Math.floor(ms / numMsInHour);
    var minuteCount = Math.floor(ms / numMsInMinute);
    var secondCount = Math.floor(ms / numMsInSecond);

    return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elasped = millisecondsToInterval(elapsedTime);

    displayInterval(elasped);
  }

  function startButtonHandler(){
    startTime = new Date();
    toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  startButton.addEventListener('click', startButtonHandler);

}());*/
