var weekDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


function findAkanName(){ 
  var day = parseInt(document.getElementById("day").value);
  var month= parseInt(document.getElementById("month").value);
  var Year = parseInt(year.substring (2,4));
  var Century = parseInt(year.substring (0,2));
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  
  if(day >31 || day <=0){
    alert("Kindly key in a valid day")
}
else if(month >12 || month <=0 || (month == 2 && day > 29)){
   alert("Kindly key in a valid month") 
}

var d = ( ( (Century/4) -2*Century-1) + ( (5*year/4) ) + ((26*(month+1)/10) ) + day)%7;
  console.log(d);
  return (Math.floor(d));
if (male.checked==true) {
  alert (daysOfTheWeek [d] + "was the day of the week you were born" + "Matching Akan name is: " + maleNames[d]);
}
else if(female.checked==true) {
  alert(daysOfTheWeek [d] + "Was the day of the week you were born" + "Matching Akan name is: " + femaleNames[d])
}

}
