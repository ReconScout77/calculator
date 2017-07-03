var divide = function(weight, height) {
	return weight / height;
}

var weight = parseInt(prompt("Enter your weight in pounds:")) * 0.45;

var heightInches = parseInt(prompt("Enter your height in inches:")) * 0.025;

var height = heightInches * heightInches

var BMI = divide(weight, height);
alert("Your BMI is " + BMI);
