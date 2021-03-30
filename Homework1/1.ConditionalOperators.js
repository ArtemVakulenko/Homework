//Условные операторы 1

function sumOrMultiply (a, b) {
    if (a % 2 == 0){
        var res = a * b;
    }
    else {
        var res = a + b;
    }
    return res;
}

//Условние операторы 2

function getQuarterByCoordinates(x, y){
		if ((x > 0) && (y > 0 )){
			var ans = 'точка лежит в первой четверти';
		}
		else if ((x < 0) && (y > 0 )){
			var ans = 'точка лежит во второй четверти';
			}
			else if ((x < 0) && (y < 0 )){
				var ans = 'точка лежит в третьей четверти';
			}
				else if ((x > 0) && (y < 0 )){
                    var ans = 'точка лежит в четвертой четверти';
			}
				else if ((x === 0) && (y > 0 )){
                    var ans = 'точка лежит на оси Y между первой и второй четвертями';
                }
                else if ((x  === 0) && (y < 0 )){
                    var ans = 'точка лежита оси Y между третьей и четвертой четвертями';
                }
                else if ((x > 0) && (y === 0 )){
                    var ans = 'точка лежит на оси X между первой и четвертой четвертями';
                }
                else if ((x <  0) && (y === 0 )){
                    var ans = 'точка лежит на оси X между третьей и второй четвертями';
                }
                else if ((x === 0) && (y === 0 )){
                    var ans = 'точка лежит в начале координат';
                }
                else {
                    var ans = 'неправильно введены данные';
                }
    return ans;
}

// Условние операторы 3

function getSumOfPositiveNumbers (x, y, z,){
	if((x >= 0) && (y >= 0) && (z >= 0)){
		var res = x + y + z
	}
	else if ((x >= 0) && (y >= 0) && (z <= 0)){
        var res = x + y 
		}
		else if ((x >= 0) && (y <= 0) && (z >= 0)){
            var res = x + z 
			}
			else if ((x <= 0) && (y >= 0) && (z >= 0)){
                var res = y + z 
				}
				else if ((x <= 0) && (y <= 0) && (z <= 0)){
					var res = 'введены только отрицательные числа'
				}
					else{
						var res = "неверно введены данные"
					}
    return res
}

//Условные операторы 4

function sumOrMultiplyPlus3 (a, b, c){
    if ((a * b * c ) > (a + b + c )){
	    var res = (a * b * c ) + 3;
	}
	else {
		var res = (a + b + c ) + 3;
	}
    return res;
}

//Условные операторы 5

function getGradeByRating(rating){
    if ((rating >= 0) && (rating <= 19)){
        var grade = 'F'
    }
    else if ((rating >= 20) && (rating <= 39)){
        var grade = 'E'
    }
    else if ((rating >= 40) && (rating <= 59)){
        var grade = 'D'
    }
    else if ((rating >= 60) && (rating <= 74)){
        var grade = 'C'
    }
    else if ((rating >= 75) && (rating <= 89)){
        var grade = 'B'
    }
    else if ((rating >= 90) && (rating <= 100)){
        var grade = 'A'
    }
    else {
        var grade = 'рейтинг введен некорректно'
    }
    return grade
}