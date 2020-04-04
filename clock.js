class Clock {
	constructor(_second__indicator, _minute__indicator, _hour__indicator) {
		this._second__indicator = _second__indicator;
		this._minute__indicator = _minute__indicator;
		this._hour__indicator = _hour__indicator;
	}

	turnOnClock() {
		setInterval(() => {
			let now = new Date();
			let seconds = now.getSeconds();
			let minutes = now.getMinutes();
			let hours = now.getHours();

			let second__deg = seconds / 60;
			let minute__deg = (second__deg + minutes) / 60;
			let hour__deg = (minute__deg + hours) / 12;

			this._second__indicator.style.transform = `rotate(${
				second__deg * 360
			}deg)`;
			this._minute__indicator.style.transform = `rotate(${
				minute__deg * 360
			}deg)`;
			this._hour__indicator.style.transform = `rotate(${
				hour__deg * 360
			}deg)`;
		}, 1000);
	}
}

// Time indicators
let second__indicator = document.getElementById("sec");
let minute__indicator = document.getElementById("min");
let hour__indicator = document.getElementById("hour");

let clock1 = new Clock(second__indicator, minute__indicator, hour__indicator);

clock1.turnOnClock();
