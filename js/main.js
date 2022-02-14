class DigitalClock {
    constructor(element) {
        this.element = element;
    }
//Sets the interval for updating the time so that you don't need to refresh the page every second. Also checks for alarm
    start() {
        this.update();

        setInterval(() => {
            this.update(); 
            const parts = this.getTimeParts();
            if (userAlarmTime.userHours === parts.hour && userAlarmTime.userMinutes === parts.minute && userAlarmTime.userAmpm === parts.isAm){
                audio.play()
                alert('Alarm!')
            }
        
        }, 500);
    }
//This should help us to format the time so that it has an appropriate leading 0 so the numbers don't change positions
    update() {	
        const parts = this.getTimeParts();
        const secondFormatted = parts.second.toString().padStart(2, "0")	
        const minuteFormatted = parts.minute.toString().padStart(2, "0");	
        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;	
        const amPm = parts.isAm ? "AM" : "PM";	
        this.element.querySelector(".clock-time").textContent = timeFormatted;	
        this.element.querySelector(".clock-ampm").textContent = amPm;	
      }

    getTimeParts() {
        const now = new Date();

        //creates the 4 values for hours, minutes, seconds, and am or pm
        return {
            /*the mod function here is present to find the remainder after divided
             by 12 for a 12 hour clock and checks to see if the value is falsy 
             (I think that's only 0, here) and will replace it with 12*/
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            //shows AM if hours are <12
            isAm: now.getHours() < 12
        
        };
    }
}
//maybe making this an object will make it easier to compare the two?  an if else statement where if all 3 attributes match, it will play a sound.
let userAlarmTime = {
    userHours: '00',
    userMinutes: '00',
    userSeconds: '00',
    userAmpm: true
}

const compareTime = new Date();
const [hour, minutes] = [compareTime.getHours(), compareTime.getMinutes()];


function alarmTimeSet() {
    //This will give the set alarm button something to do to save a time as a variable named alarmTime
    let userHours = document.getElementById('hourInput').value
    let userMinutes = document.getElementById('minuteInput').value
    let userSeconds = '00'
    let userAmpm = document.getElementById('ampmInput').value.toLowerCase() === 'true'
    userAlarmTime = {userHours, userMinutes, userSeconds, userAmpm}
    console.log(userAlarmTime)
    return userAlarmTime
    }


function clearAlarmTime() {
    //This will re-set the mutable variable of the alarm time to the default placeholder time of 00:00:00.  Not sure why the variable is declared and never read.  I made a userAlarmTime global variable that was read by the previous function just fine.
    let userAlarmTime = {
        userHours: '00',
        userMinutes: '00',
        userSeconds: '00',
        userAmpm: '00'
    }
}
//Some sort of if statement that displays an alert when the alarmTime variable == the current time.
var audio  = new Audio('../audio/alarmsound.wav');
   // audio.play();


const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();

function newFunction() {
    return '/workspace/alarm-clock/audio/alarmsound.wav';
}
