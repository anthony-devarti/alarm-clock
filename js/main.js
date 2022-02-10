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
        const minuteFormatted = parts.minute.toString().padStart(2, "0");	
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;	
        const amPm = parts.isAm ? "AM" : "PM";	
        this.element.querySelector(".clock-time").textContent = timeFormatted;	
        this.element.querySelector(".clock-ampm").textContent = amPm;	
      }

    getTimeParts() {
        const now = new Date();

        //creates the 3 values for hours, minutes, and am or pm
        return {
            /*the mod function here is present to find the remainder after divided
             by 12 for a 12 hour clock and checks to see if the value is falsy 
             (I think that's only 0, here) and will replace it with 12*/
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            //shows AM if hours are <12
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();