// this section for collapse and expand

var coll = document.getElementsByClassName("collapsible");
var i;
var content = document.getElementsByClassName("singlefield");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (content[0].style.display === "block") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "block";
    }
  });
}
var next = document.getElementsByClassName("click_next");
next[0].addEventListener("click", function () {
  var name = document.getElementById("fname").value;
  if (name.includes([0 - 9]) || name.length < 2) {
    fnameerror.textContent = "Please enter correct Full Name"
    fnameerror.style.color = "red"
    return false;
  }

  content[0].style.display = "none";
  document.getElementById("genderlabel").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your gender";
  content[1].style.display = "block";
});

next[1].addEventListener('click', function () {
  content[1].style.display = "none";
  document.getElementById("emaillabel").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your Email";
  content[2].style.display = "block";
});

next[2].addEventListener("click", function () {
  var email = document.getElementById("email").value;
  if (email == "" || !email.includes("@")) {
    error.textContent = "Please enter correct email"
    error.style.color = "red"
    return false;

  }
  content[2].style.display = "none";
  document.getElementById("passwordlabel").innerHTML = "Hi " + document.getElementById("fname").value + " ! Choose strong password";
  content[3].style.display = "block";
});

next[3].addEventListener("click", function () {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;

  if (!(password == confirmpassword)) {
    confirmpassworderror.textContent = "Confirm password must be same as password"
    confirmpassworderror.style.color = "red"
    return false;
  }

  content[3].style.display = "none";
  document.getElementById("contactlabel").innerHTML = "Hi " + document.getElementById("fname").value + " ! can i know your contact";
  content[4].style.display = "block";
});


var submit = document.getElementById("submit_form");
submit.addEventListener("submit", function () {
  var contact = document.getElementById("contactnumber")
  if (!(contact == 10)) {
    contacterror.textContent = "Enter a valid number"
    contacterror.style.color = "red";
  }
  content.style.display = "none";
});

