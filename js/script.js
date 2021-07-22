var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleTitles = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleTitles = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];



function findAkanName() {
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  
  
  if (day <= 0 || day > 31) {
    alert("Valid day Required")
  }
  else if (month <= 0 || month > 12 || (month == 2 && day > 29)) {
    alert("Valid month required")
  }

  var A = Math.floor((14 - month) / 12)
  var Y = year - A
  var M = month + 12 * A - 2
  var D = (day + Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(year / 400) + Math.floor((31 * M) / 12)) % 7;

  if (male.checked == true) {
    alert("The day of the week you were born is " + weekDays[D] + " and Your Matching Akan name is: " + maleTitles[D]);
  }
  else if (female.checked == true) {
    alert("The day of the week you were born is " + weekDays[D] + " and Your Matching Akan name is: " + femaleTitles[D]);
  }

}
