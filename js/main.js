class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update(); 
        }, 500);
    }

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

let alarmTime = '00:00:00';

function alarmTimeSet() {
    //This will give the set alarm button something to do to save a time as a variable named alarmTime
    
}

function clearAlarmTime() {
    //This will re-set the mutable variable of the alarm time to the default placeholder time of 00:00:00
    let alarmTime = '00:00:00';
}

/*Some sort of if statement that plays a sound when the alarmTime variable == the current time*/

const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();