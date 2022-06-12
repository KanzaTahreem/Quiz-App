 // we ned ending date and current date and we also need to subtract.
 let daysEl = document.getElementById('days')
 let hoursEl = document.getElementById('hours')
 let minsEl = document.getElementById('mins')
 let secondsEl = document.getElementById('seconds')

 
 let date = '1 jan 2023'

 function countdown () {
    let newDate = new Date (date)
    let currentDate = new Date()

    let difference = Math.floor(newDate - currentDate)
    
    let days = Math.floor(difference/ (1000 * 3600 * 24))
    let hours = Math.floor(difference / (1000 * 3600)) % 24
    let mins = Math.floor(difference/(1000 * 60)) % 60
    let seconds = Math.floor(difference / 1000) % 60
    console.log(days, hours, mins, seconds)

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds)
 }

 function formatTime (time){
    return time < 10 ? `0${time}` : time
 }

 countdown()
setInterval(countdown, 1000)
