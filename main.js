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
 *Fifth objective: Display the current time every second. - Displays all seven values, not just time
 */


/*function displayTime() {
  var currentTime = new Date();

  document.getElementById("display-time").textContent = new Date();

  var incrementClock = window.setInterval(displayTime, 1000);
}
displayTime();*/

/*Fifth objective:*/
/* Does not display padded with zeros*/
/*
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');


function displayTime() {
  var currentTime = new Date();
  document.querySelector(".hours").textContent = currentTime.getHours();
  document.querySelector(".minutes").textContent = currentTime.getMinutes();
  document.querySelector(".seconds").textContent = currentTime.getSeconds();

  var incrementClock = window.setInterval(displayTime, 1000);
}
displayTime();*/

/*Fifth objective*/

/*
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

function displayTime() {
  var currentTime = new Date();
  var currentTimeSeconds = currentTime.getSeconds();

  document.querySelector(".seconds").textContent = currentTimeSeconds;

  var incrementClock = window.setInterval(displayTime, 1000);
}
displayTime();*/


/* displays clock counting to 99 (for all 3 values?), increments to minutes every 60 seconds (60,20,80,40,00)*/

/*var startButton = document.getElementById('start-button');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

var startTime;
var currentText;

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

function logCurrentTime(){

  var startTime = new Date();

  var currentTime = millisecondsToInterval(startTime);

  displayInterval(currentTime);

}

window.setInterval(logCurrentTime, 1000);*/


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
