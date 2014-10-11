var TARGETTIME = new Date(2014,10,3);

var Counter = function() {
	this.msLeft = TARGETTIME.getTime() - currentDateAndTime().getTime();
	this.deciSecsLeft = 0;
	this.secsLeft = 0;
	this.minsLeft = 0;
	this.hoursLeft = 0;
	this.daysLeft = 0;
	this.monthsLeft = 0;
	this.target = TARGETTIME;

	this.convert();
};

Counter.prototype.convert = function() {

	this.deciSecsLeft += Math.floor(this.msLeft / 10);
	this.secsLeft += Math.floor(this.deciSecsLeft / 100);
	this.minsLeft += Math.floor(this.secsLeft / 60);
	this.hoursLeft += Math.floor(this.minsLeft / 60);
	this.daysLeft += Math.floor(this.hoursLeft / 24);
	this.monthsLeft += Math.floor(this.daysLeft / 30);

	this.deciSecsLeft = this.deciSecsLeft % 100;
	this.secsLeft = this.secsLeft % 60;
	this.minsLeft = this.minsLeft % 60;
	this.hoursLeft = this.hoursLeft % 24;
	this.daysLeft = this.daysLeft % 30;
	this.monthsLeft = Math.floor(this.daysLeft / 30);
};


Counter.prototype.print = function() {
	var deciseconds = pad(this.deciSecsLeft,2);
	var seconds = pad(this.secsLeft,2);
	var minutes = pad(this.minsLeft,2);
	var hours = pad(this.hoursLeft,1);
	var days = pad(this.daysLeft,1);
	var months = pad(this.monthsLeft,1);

	printString = "";

	if (months > 0) {
		printString += months + " months, ";
	};
	if (days > 0) {
		printString += days + " days, ";
	};
	printString += hours + ":";
	printString += minutes + ":";
	printString += seconds + ":";
	printString += deciseconds;
	
	return printString;
};

var currentDateAndTime = function() {
	return new Date();
};


var	formatDate = function(dateToFormat) {
	var month = convertToMonthName(dateToFormat.getMonth());
	var dayName = convertToDayName(dateToFormat.getDay());
	var dayNum = dateToFormat.getDate() ;
	var year = dateToFormat.getFullYear();

	var th = (function() {
			switch (dayNum % 10) {
			case 1:
				return "st";
				break;
			case 2:
				return "nd";
				break;
			case 3:
				return "rd";
				break;
			default:
				return "th";
			}
		}());

	dayNum = dayNum + th;
	var _sp = " ";

	return dayName + _sp + month + _sp + dayNum + _sp + year
};

var currentTime = function() {
	return new Date();
};

var convertToDayName = function(dayNum) {
	switch(dayNum) {
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
			break;
		default:
			return "Invalid Day"
	}
} ;

var convertToMonthName = function(monthNum) {
	switch(monthNum) {
		case 0:
			return "January";
			break;
		case 1:
			return "February";
			break;
		case 2:
			return "March";
			break;
		case 3:
			return "April";
			break;
		case 4:
			return "May";
			break;
		case 5:
			return "June";
			break;
		case 6:
			return "July";
			break;
		case 7:
			return "August";
			break;
		case 8:
			return "September";
			break;
		case 9:
			return "October";
			break;
		case 10:
			return "November";
			break;
		case 11:
			return "December";
			break;
		default:
			return "Invalid Month"
	}
} ;

var pad = function(input, numToPad) {
	if (String(input).length >= numToPad) {
		return input;
	} else {
		var zeroes = "";
		for (var i = 0; i < numToPad; i++) {
			zeroes += "0";	
		};
		return (zeroes + input).slice(-1 * numToPad)
	}
};

c = new Counter();
var d = function() {
	document.write(c.print())
	document.clear();
}
// window.setInterval(d,500);