var coll = document.getElementsByClassName("collapsible1");
var i;
var vehicle = document.getElementsByClassName("vehiclefield");
var alltype = document.getElementsByName("vehicle");
var type;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        if (vehicle[0].style.display === "block") {
            vehicle[0].style.display = "none";
        } else {
            vehicle[0].style.display = "block";
        }
    });
}

var next = document.getElementsByClassName("click_next1");
next[0].addEventListener("click", function () {
    vehicle[0].style.display = "none";
    document.getElementById("vehiclem").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your vehicle model";
    vehicle[1].style.display = "block";
});

next[1].addEventListener('click', function () {
    vehicle[1].style.display = "none";
    document.getElementById("vehicletype").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your vehicle type";
    vehicle[2].style.display = "block";
    for(i = 0; i < alltype.length; i++) { 
        console.log(alltype[i].checked)
        if(alltype[i].checked)
        {
            type = alltype[i].nodeValue;
            console.log(type);
        }
    }
});

next[2].addEventListener("click", function () {
    vehicle[2].style.display = "none";
    document.getElementById("vehiclenumber").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your vehicle number";
    vehicle[3].style.display = "block";
});

next[3].addEventListener("click", function () {
    vehicle[3].style.display = "none";
    document.getElementById("employee").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your Employee ID";
    vehicle[4].style.display = "block";
});

next[4].addEventListener("click", function () {
    vehicle[4].style.display = "none";
    document.getElementById("vehicleidentification").innerHTML = "Hi " + document.getElementById("fname").value + "Fill Identification mark of your vehicle";
    vehicle[5].style.display = "block";
});





var vehiclesubmit = document.getElementById("submitvehicledetails");
vehiclesubmit.addEventListener("submit", function () {
    vehicle.style.display = "none";
    
});


  

