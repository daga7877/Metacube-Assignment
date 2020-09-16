var field = document.getElementsByClassName("pricingfield");
var i;

if(type=="Cycle")
{
    field[0].style.display= "block";
}

else if(type=="Two Wheeler")
{
    field[1].style.display= "block";
}
else if(type=="Four Wheeler"){
    field[2].style.display="block";
}

var cycleprice = document.getElementsByName("cycleplan")
for(i = 0; i < cycleprice.length; i++) { 
    if(cycleprice[i].checked)
    {
        document.getElementById("cwheele").innerHTML = cycleprice[i].Value;
    }
}  

var motorcycleprice = document.getElementsByName("motorcycleplan")
for(i = 0; i < motorcycleprice.length; i++) { 
    if(motorcycleprice[i].checked)
    {
        document.getElementById("twheele").innerHTML = motorcycleprice[i].Value;
    }
}  

var fourwheeleprice = document.getElementsByName("fourwheelerplan")
for(i = 0; i < fourwheeleprice.length; i++) { 
    if(fourwheeleprice[i].checked)
    {
        document.getElementById("fwheele").innerHTML = fourwheeleprice[i].Value;
    }
}  