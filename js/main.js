var index=1;
function prev() {
    if (index==1) {index=21;}
    if (index > 1) {index--;}
    document.getElementById("slider-img").src = "../images/gal" + index + ".jpg";
}
function next() {
    if (index==20) {index=0;}
    if (index < 20) {index++;}
    document.getElementById("slider-img").src = "../images/gal" + index + ".jpg";
}

function show(){
    document.getElementById("side-menu").classList.toggle("show");
}
function dc(){
    var date=new Date();
    var text;
    if(date.getDate()>9)
    {text=date.getDate()}
    else {text="0"+date.getDate();}
    if(date.getMonth()+1>9)
    {text=text+"."+(date.getMonth()+1);}
    else {text=text+"."+"0"+(date.getMonth()+1);}
    text=text+"."+date.getFullYear();
    document.getElementById("text-data").innerHTML=text;
}
dc();