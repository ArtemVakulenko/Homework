//Функции 1

var days = ['понедельник',
	'вторник', 
	'среда', 
	'четверг',
	'пятница',
	'суббота',
	'воскресенье'];

    function numToDay (num){
        var day = days[num - 1]
        return day
    }

//Функции 2

function distanceDecart (x1, y1, x2, y2){
	var distX = Math.pow((x1 - x2), 2);
	var distY = Math.pow((y1 - y2), 2);
	var distance = Math.sqrt(distX + distY);
	return distance;
	}
	
//Функции 3

var wordsHundreds = [
	'сто',
	'двести',
	'триста',
	'четыреста',
	'пятьсот',
	'шестьсот',
	'семьсот',
	'восемьсот',
	'девятьсот',];
	
	var wordsTens = [
	'десять',
	'двадцать',
	'тридцать',
	'сорок',
	'пятьдесят',
	'шестьдесят',
	'семьдсят',
	'восемьдесят',
	'девяносто',
	'сто',];
	
	var wordsOnes = [
	'один',
	'два',
	'три',
	'четыре',
	'пять',
	'шесть',
	'семь',
	'восемь',
	'девять',
	'десять',];
	
	var wordsTenToTwenty = [
	'одиннадцать',
	'двенадцать',
	'тринадцать',
	'четырнадцать',
	'пятнадцать',
	'шестнадцать',
	'семнадцать',
	'восемнадцать',
	'девятнадцать',];
	
	
	
	function numberToString(num){
	if ((num >= 100) && (num <= 999)) {
		var word = hundreds (num)
	}
	else if ((num >= 20) && (num <= 99)){
		var word = tens (num)
		}
		else if ((num >= 11) && (num <= 19)){
		var word = tenToTwenty (num)
			}
			else if ((num >= 1) && (num <= 10)){
		var word = ones (num)
			}
			return word
	}

	function hundreds (num){
		if (num % 100 == 0){
			var word = wordsHundreds[(num / 100) - 1];
			}
		else {
			var firstDigit = Math.floor(num / 100);
			var secondDigit = Math.floor((num - (firstDigit * 100))/10);
			var thirdDigit = num - ((firstDigit * 100) + (secondDigit * 10));
				if (secondDigit == 0){
					var tens = ''
					var ones = wordsOnes[thirdDigit - 1];
				}
				else if ((num - (firstDigit * 100) >= 11 && (num - (firstDigit * 100) <= 19))) {
					var tens = wordsTenToTwenty[thirdDigit - 1];
					var ones = '';
					}
					else if (thirdDigit == 0){
						var ones = '';
						var tens = wordsTens[secondDigit - 1];
				}
						else {
						var ones = wordsOnes[thirdDigit - 1];
						var tens = wordsTens[secondDigit - 1];
				} 
					
	
			var hundreds = wordsHundreds[firstDigit - 1];
			
			var word = hundreds + ' ' + tens + ' ' + ones;
		
		}
		return word ;
	}	
	
	function tens (num){
		if (num % 10 == 0){
			var word = wordsTens[(num / 10) - 1];
			}
		else {
			var firstDigit = Math.floor(num / 10);
			var tens = wordsTens[firstDigit - 1];
			var ones = wordsOnes[(num - (firstDigit * 10)) - 1];
			var word = tens + ' ' + ones;
		}
		
		return word ;
	}
	
	function tenToTwenty (num){
	var word = wordsTenToTwenty[num - 11];
	return word;
	}
	
	function ones (num){
		var word = wordsOnes[num - 1];
		return word;
	}
//Функции 4