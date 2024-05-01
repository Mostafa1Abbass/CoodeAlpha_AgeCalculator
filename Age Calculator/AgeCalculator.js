function calculateAge() {
  var birthDate = new Date(document.getElementById("birthdate").value);
  var todayDate = new Date();
  var age = todayDate.getFullYear() - birthDate.getFullYear();
  if (
    todayDate.getMonth() < birthDate.getMonth() ||
    (todayDate.getMonth() == birthDate.getMonth() &&
      todayDate.getDay() < birthDate.getDay())
  ) {
    age--;
  }

  if (isNaN(age)) {
    alert("Give me something to calculate a least !");
  } else {
    document.getElementById("result").innerHTML = "Your age is <span style = 'color: crimson;'>" + age + "</span>";
  }
}
