function validateForm() {
  var nameOutput = document.getElementById("name").value;
  var emailOutput = document.getElementById("email").value;

  console.log(nameOutput);
  console.log(emailOutput);

  if (nameOutput == "" || emailOutput == "") {
    if (nameOutput == "") {
      document.getElementById("err1").innerHTML = "Please enter your Name";
    } else {
      document.getElementById("err1").innerHTML = "";
    }

    if (emailOutput == "") {
      document.getElementById("err2").innerHTML = "Please enter your Email";
    } else {
      document.getElementById("err2").innerHTML = "";
    }
  } else {
    document.getElementById("form-input").style.display = "none";
    document.getElementById("name1").innerHTML = "Welcome " + nameOutput;
    document.getElementById("email1").innerHTML = emailOutput;
  }

  event.preventDefault();
}
