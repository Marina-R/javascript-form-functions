function add (a, b) {
	return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
	return parseFloat(a) - parseFloat(b);
}

function tax (subtotal, tax) {
	subtotal = subtotal.split('').splice(1, subtotal.length-1).join('');
	tax = tax.split('').splice(0, tax.length-1).join('');
	var taxAmount = (parseFloat(subtotal)*parseFloat(tax))/100;
	return taxAmount;
}

function stringLength (string) {
		if (string.length<5) {
			return 'short string';
		} else if (string.length >=5 && string.length<=10) {
			return 'medium string';
		} else if (string.length >10) {
			return 'long string';
		}
}

function startsWith (string) {
	if (string.charAt(0).toUpperCase() == "A") {
		return 'starts with A';
	} else if (string.charAt(0).toUpperCase() == "B") {
		return 'starts with B';
	} else if (string.charAt(0).toUpperCase() == "C") {
		return 'starts with C';
	} else if (string.charAt(0).toUpperCase() == "D") {
		return 'starts with D';	
	} else if (string.charAt(0).toUpperCase() == "E") {
		return 'starts with E';
	} else {
		return 'starts with something else';
	}
}

function stringRepeat (string, number) {
	var num = parseInt(number);
	var result = [];	
	for (var i = 0; i < num; i++) {
		result.push(' ' + string);
	}
	result.join();
	return result;
}

function nSum (n) {
	var total = 0;
	n = parseFloat(n);
	for (var i = 1; i < n+1; i++) {
		total = total + i;
	}
	return total;
}

function join (checked, separator) {
	var result = checked.join(separator);
	return result;
}

function countLetters (string) {
	var array = []
	var obj = {};
	for (var i = 0; i < string.length; i++) {
		var letter = string[i];
		var count = 0;
		for (var j = 0; j < string.length; j++) {
			if (string[j] == letter) {
				count ++;
			}
		}
		obj[letter] = count;
	}
	for (var prop in obj) {
		array.push(' ' + prop + ':' + obj[prop]);
	}
	return array;
}

function maze () {
	var maze = [
		[true, true, true, false, true, true, 'start', true],
		['end', false, true, false, false, false, false, true],
		[true, false, true, true, false, true, true, true],
		[true, false, false, false, false, false, true, true],
		[true, true, true, false, true, false, false, true]
	];
	return maze;
}

function table (array, year, make, model, color) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (year == array[i].year) {
			result.push(array[i]);
		} else if (make == array[i].make) {
			result.push(array[i]);
		} else if (model == array[i].model) {
			result.push(array[i]);
		} else if (color == array[i].color) {
			result.push(array[i]);
		}
	}
	return result;
}