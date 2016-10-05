var tillyearend = new Date(Date.parse(new Date()) + 75 * 24 * 60 * 60 * 1000);


function startClock(id, endtime) {
  var temp = document.getElementById(id);
  var daysDiv = temp.querySelector('#day');
  var hoursDiv = temp.querySelector('#hour');
  var minutesDiv = temp.querySelector('#minutes');
  var secondsDiv = temp.querySelector('#seconds');

  function updateClock() {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;

    if (t <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


startClock('wrapper', tillyearend);