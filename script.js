var m = 0 
var s = 0 
var h = 0 
var cron 
var time = 1000


function start(){
cron = setInterval(function (){timer()},time)

}

 function pause(){
clearInterval(cron)


 }

function reset(){
clearInterval(cron)
document.getElementById('time').innerText = '00:00:00'

}


function timer(){
s++

if(s==60){
    s=0
    m++
}

if(m==60){
m=0
h++
}

var format = ((h<10 ? '0'+h : h) + ':' + (m<10 ? '0' + m : m) + ':' + (s<10 ? '0' + s : s))
document.getElementById('time').innerText = format
}



