var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleTitle = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleTitles= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function findAkanName() {
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var YY = parseInt(year.substring(2, 4));
  var Century = parseInt(year.substring(0, 2));
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var button =document.getElementById("submit");
  //submit.addEventListener("click", onSubmit)

  if (day > 31 || day <= 0) {
    alert("Kindly key in a valid day")
  }
  else if (month > 12 || month <= 0){
        alert ("Kindly key in a valid month")
  }

  var d = (((Century/4) -2*Century-1) + ((5*YY/4)) + ((26*(month+1)/10)) + day)%7;
  
  
  if(maleTitles.checked == true){
    alert("The day of the week you were born is " + weekDays[d] + "Matching Akan name is: " + maleTitles[d]);
  }
  else if (femaleTitle.checked == true) {
    alert("The day of the week you were born is" + weekDays[d] + "Matching Akan name is: " + femaleTitles[d]);
  }
  
}
