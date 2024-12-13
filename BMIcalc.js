function updateHeightValue(value) {
	document.getElementById("heightValue").innerText = value;
}

function updateWeightValue(value) {
	document.getElementById("weightValue").innerText = value;
}
function calculateBMI() {
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	if (height > 0 && weight > 0) {
		var heightInMeters = height / 100;
		var bmi = weight / (heightInMeters * heightInMeters);
		 if (bmi < 16) {
		category = "Gầy độ III";
	} else if (bmi >= 16 && bmi < 17) {
		category = "Gầy độ II";
	} else if (bmi >= 17 && bmi < 18.5) {
		category = "Gầy độ I";
	} else if (bmi >= 18.5 && bmi < 25) {
		category = "Bình thường";
	} else if (bmi >= 25 && bmi < 30) {
		category = "Thừa cân";
	} else if (bmi >= 30 && bmi < 35) {
		category = "Béo phì độ I";
	} else if (bmi >= 35 && bmi < 40) {
		category = "Béo phì độ II";
	} else if (bmi >= 40) {
		category = "Béo phì độ III";
	}
		document.getElementById("result").innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "\n \ " + category;
	}
}