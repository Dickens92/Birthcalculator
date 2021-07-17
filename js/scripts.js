var weekDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


function findAkanName(){ 
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");
}
  if(day >31 || day <=0){
    alert("Kindly key in a valid day")
}
else if(month >12 || month <=0 || (month == 2 && day > 29)){
   alert("Kindly key in a valid month") 
}