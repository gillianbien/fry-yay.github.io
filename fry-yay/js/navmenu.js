function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}

var today = new Date();
var day=today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var month=today.getMonth();
var monthlist = ["January","February","March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = daylist[day]+','+ today.getDate()+' '+monthlist[month] +' '+today.getFullYear();
document.getElementById('currentDate').innerHTML= date;

if(day==5){
    document.querySelector('aside').style.display='block';
}