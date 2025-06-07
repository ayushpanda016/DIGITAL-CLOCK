var hrs = document.querySelector("#hrs");
var min = document.querySelector("#mins");
var sec = document.querySelector("#sec");

setInterval(()=>{
    var currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000)


