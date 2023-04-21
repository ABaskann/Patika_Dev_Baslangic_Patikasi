let entered_name = prompt('Enter your name');
entered_name=entered_name.toUpperCase()
let main_div = document.querySelector("#main_div")
let name_area = document.querySelector("#nametxt")
let message_area = document.querySelector("#message")
document.body.style.backgroundColor="black";
document.body.style.color="rgb(51,0,102)"

name_area.innerHTML = `Merhaba ${entered_name} Hoş Geldin`;
message_area.innerHTML=`tarihinde Front-End Web Developer Patikasının
Javascript bölümünün 1.Ödevini ziyaret ettiniz.`
showTime()


function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);  
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}  

if(entered_name.length==0){
    main_div.setAttribute("hidden")    
}else{
    document.querySelector("#main_div").removeAttribute("hidden");
    
}



