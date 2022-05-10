let koybi=document.getElementById("kou");
koybi.addEventListener('click',function(){
    localStorage.setItem("onoma",document.getElementById("on").value);
    localStorage.setItem("ilikia",document.getElementById("il").value);
    localStorage.setItem("tilefono",document.getElementById("til").value);
    localStorage.setItem("email",document.getElementById("em").value);
    localStorage.setItem("bio",document.getElementById("tx").value);
    
    localStorage.setItem("g1",document.getElementById("1").value);
    localStorage.setItem("g2",document.getElementById("2").value);
    localStorage.setItem("titlos",document.getElementById("p").value);
    localStorage.setItem("batmos",document.getElementById("ba").value);
    localStorage.setItem("epagkelma",document.getElementById("epa").value);

});