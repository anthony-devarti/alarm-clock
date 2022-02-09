class digitalClock {
    constructor(element) {
        this.element = element;
    }

    getTimeParts(){
        const now = new date();

        return {
            hour: now.getHours() % 12 || 12
            minute: now.getMinutes();
            isAm: now.getHours < 12
        };
    }
}

const clockElement = document.querySelector('.clock');
const clockObject = new digitalClock(clockElement);


console.log(clockObject.getTimeParts());
