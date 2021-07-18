var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleTitle = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleTitles= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function findAkanName() {
  day = parseInt(document.getElementById("day").value);
  month = parseInt(document.getElementById("month").value);
  Year = parseInt(year.substring(2, 4));
  Century = parseInt(year.substring(0, 2));
  male = document.getElementById("male");
  female = document.getElementById("female");

  if (day > 31 || day <= 0) {
    alert("Kindly key in a valid day")
  }
  else if (month > 12 || month <= 0 || (month == 2 && day > 29)) {
    alert("Kindly key in a valid month")
  }

  d = (((Century/4) -2*Century-1) + ((5*year/4)) + ((26*(month+1)/10)) + day)%7;
  
  if(maleTitles.checked == true){
    alert("was the day of the week you were born " + weekDays[d] + "Matching Akan name is: " + maleTitles[d]);
  }
  else if (femaleTitle.checked == true) {
    alert("Was the day of the week you were born " + weekDays[d] + "Matching Akan name is: " + femaleTitle[d])
  }

  
}
