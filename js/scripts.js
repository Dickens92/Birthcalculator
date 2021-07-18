var weekDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


function findAkanName(){ 
  var DD = parseInt(document.getElementById("day").value);
  var MM = parseInt(document.getElementById("month").value);
  var YY = parseInt(year.substring (2,4));
  var CC = parseInt(0,2)
  var Year= parseInt(document.getElementById("year").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}
}
var
  if(day >31 || day <=0){
    alert("Kindly key in a valid day")
}
else if(month >12 || month <=0 || (month == 2 && day > 29)){
   alert("Kindly key in a valid month") 
}