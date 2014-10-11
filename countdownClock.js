var TARGETTIME = new Date(2014,10,3);
var TICK = 1000;

var Counter = function() {
	this.msLeft = 
		TARGETTIME.getTime() - currentDateAndTime().getTime();
	this.secsLeft = 0;
	this.minsLeft = 0;
	this.hoursLeft = 0;
	this.daysLeft = 0;
	this.monthsLeft = 0;
	this.target = TARGETTIME;

	this.convert();
};

Counter.prototype.convert = function() {

	this.secsLeft += Math.floor(this.msLeft / 1000);
	this.minsLeft += Math.floor(this.secsLeft / 60);
	this.hoursLeft += Math.floor(this.minsLeft / 60);
	this.daysLeft += Math.floor(this.hoursLeft / 24);
	this.monthsLeft += Math.floor(this.daysLeft / 30);

	this.msLeft = this.msLeft % 1000;
	this.secsLeft = this.secsLeft % 60;
	this.minsLeft = this.minsLeft % 60;
	this.hoursLeft = this.hoursLeft % 24;
	this.daysLeft = this.daysLeft % 30;
	this.monthsLeft = Math.floor(this.daysLeft / 30);



	// while	(this.msLeft > 1000) {
	// 	this.msLeft -= 1000;
	// 	this.secsLeft += 1;
	// }
	// while	(this.secsLeft > 60) {
	// 	this.secsLeft -= 60;
	// 	this.minsLeft += 1;
	// }
	// while	(this.minsLeft > 60) {
	// 	this.minsLeft -= 60;
	// 	this.hoursLeft += 1;
	// }
	// while	(this.hoursLeft > 24) {
	// 	this.hoursLeft -= 24;
	// 	this.daysLeft += 1;
	// }
	// while	(this.daysLeft > 30) {
	// 	this.daysLeft -= 30;
	// 	this.monthsLeft += 1;
	// }
};



Counter.prototype.print = function() {
	var milliseconds = pad(this.msLeft,3);
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
	printString += milliseconds;
	
	return printString;
};

var currentDateAndTime = function() {
	return new Date();
};

var	currentDate = function() {
	var cdat = currentDateAndTime();

	var month = cdat.getMonth();
	var dayName = convertToDayName(cdat.getDay());
	var dayNum = cdat.getDate();
	var year = cdat.getFullYear();
};

var currentTime = function() {
	return new Date();
};

var convertToDayName = function(dayNum) {
	switch(dayNum) {
		case 0:
			"Sunday";
			break;
		case 1:
			"Monday";
			break;
		case 2:
			"Tuesday";
			break;
		case 3:
			"Wednesday";
			break;
		case 4:
			"Thursday";
			break;
		case 5:
			"Friday";
			break;
		case 6:
			"Saturday";
			break;
		default:
			"Invalid Day"
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