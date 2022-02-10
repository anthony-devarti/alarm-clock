class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    update{} {
        const parts = this.getTimeParts();
        /*making it so that the time displays with a leading 0 when the minutes are in the single digits
        this creates a variable called minutesFormatted that stores _*/
        const minuteFormatted = parts.minutes.toString().padStart(2, '0');
        const timeFormatted = `${parts.hour}:${minutesFormatted}`;
        const amPm = parts.isAM ? 'AM' : 'PM';

        this.element.querySelector(".clock-time").textContent = timeFormatted;

        console.log(timeFormatted);
    }
    getTimeParts() {
        const now = new Date();
        //creates the 3 values for hours, minutes, and am or pm
        return {
            /*the mod function here is present to find the remainder after divided
             by 12 for a 12 hour clock and checks to see if the value is falsy 
             (I think that's only 0, here) and will replace it with 12*/
            hour: now.getHours() % 12 || 12
            minute: now.getMinutes(),
            //shows AM if hours are <12
            isAm: now.getHours < 12
        };
    }


const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

