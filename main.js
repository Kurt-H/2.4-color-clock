//alert("Howdy back");
(function(){
  'use strict';

/*
 *Third Objective: Consol.log the current time on page load.
 */

var currentTime = new Date();
console.log(currentTime);

/*
 *Fourth objective: Console.log the current time on page load. - Added stopButton to avoid having to close window to stop function running in console.
 */


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





/*
 *Fifth objective: Display the current time every second.
 */

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');


function displayTime() {
  var currentTime = new Date();
  hours.textContent = ("0" + currentTime.getHours()).slice(-2);
  minutes.textContent = ("0" + currentTime.getMinutes()).slice(-2);
  seconds.textContent = ("0" + currentTime.getSeconds()).slice(-2);

  if (hours < 10){
    hours = "0" + hours;
  }

  if (minutes < 10){
    minutes = "0" + minutes;
  }

  if (seconds < 10){
    seconds = "0" + seconds;
  }

  var incrementClock = window.setInterval(displayTime, 1000);
}
displayTime();









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
