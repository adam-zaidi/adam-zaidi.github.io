tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear+=1900;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour===0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

let num = 0;


function HitCounter() {
    num += 1;
    document.getElementById('hit').innerHTML=num
}


window.onload=function(){
GetClock();
setInterval(GetClock,1000);

};


function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() === "hi") {
alert('You Got it Right!');
window.open('3049u309weruoh2i.html');
break;
} 
testV+=1;

pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-8);
return " ";
}