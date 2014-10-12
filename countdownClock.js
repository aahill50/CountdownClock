var TARGETTIME = new Date(2014,10,3);
var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var MONTHS = ["January", "February", "March", "April", "May", "June", 
							"July", "August", "September", "October", "November", "December"];
var INFLECTORS = ["th","st","nd","rd"];

var Counter = function() {
	this.msLeft 			= TARGETTIME.getTime() - currentDateAndTime().getTime();
	this.deciSecsLeft = null;
	this.secsLeft 		= null;
	this.minsLeft 		= null;
	this.hoursLeft 		= null;
	this.daysLeft 		= null;
	this.monthsLeft		= null;
	this.target 			= TARGETTIME;

	this.convert();
};

Counter.prototype.convert = function() {

	this.deciSecsLeft += Math.floor(this.msLeft / 10);
	this.secsLeft		  += Math.floor(this.deciSecsLeft / 100);
	this.minsLeft 	  += Math.floor(this.secsLeft / 60);
	this.hoursLeft	  += Math.floor(this.minsLeft / 60);
	this.daysLeft 	  += Math.floor(this.hoursLeft / 24);
	this.monthsLeft	  += Math.floor(this.daysLeft / 30);

	this.deciSecsLeft = this.deciSecsLeft % 100;
	this.secsLeft 		= this.secsLeft % 60;
	this.minsLeft		  = this.minsLeft % 60;
	this.hoursLeft	  = this.hoursLeft % 24;
	this.daysLeft 		= this.daysLeft % 30;
	this.monthsLeft	  = Math.floor(this.daysLeft / 30);
};


Counter.prototype.print = function() {
	var deciseconds = pad(this.deciSecsLeft,2);
	var seconds 		= pad(this.secsLeft,2);
	var minutes 		= pad(this.minsLeft,2);
	var hours 			= pad(this.hoursLeft,1);
	var days 				= pad(this.daysLeft,1);
	var months 			= pad(this.monthsLeft,1);

	printString = "";

	if (months > 0) {
		printString += months + " months, ";
	};
	if (days > 0) {
		printString += days + " days, ";
	};
	printString += [hours, minutes, seconds, deciseconds].join(":");
	
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

	var inflector = INFLECTORS[dayNum % 10] || INFLECTORS[0];

	dayNum = dayNum + inflector; 

	return [dayName, month, dayNum, year].join(" ")
};

var currentTime = function() {
	return new Date();
};

var convertToDayName = function(dayNum) {
	if (dayNum >= 0 && dayNum <= 6) {
		return DAYS[dayNum];
	};

	return "Invalid Day";
};

var convertToMonthName = function(monthNum) {
	if (monthNum >= 0 && monthNum <= 11) {
		return MONTHS[monthNum];
	};

	return "Invalid Month";
};

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

// c = new Counter();
// var d = function() {
// 	document.write(c.print())
// 	document.clear();
// }
// window.setInterval(d,500);