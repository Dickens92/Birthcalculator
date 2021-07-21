var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleTitle = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleTitles= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function findAkanName() {
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var button =document.getElementById("submit");
  //submit.addEventListener("click", onSubmit)
  //var d = (((Century/4) -2*Century-1) + ((5*YY/4)) + ((26*(month+1)/10)) + day)%7;

  if(day <=0 || day >31){
    alert("Valid day Required")
}
else if(month <=0 || month >12 || (month == 2 && day > 29)){
   alert("Valid month required") 
}

  var A = Math.floor((14 - month) / 12)
  var Y = year - A
  var M = month + 12 * A - 2
  var D = (day + Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(year / 400) + Math.floor((31 * M )/ 12)) % 7;
  
  if (male.checked == true){
      alert("The day of the week you were born is " + weekDays[D] + "Matching Akan name is: " + maleTitles[D]);
  }
  else if (female.checked == true){
      alert("The day of the week you were born is" + weekDays[D] + "Matching Akan name is: " + femaleTitles[D]);
  }

}
