function validateForm()
 {
  var x = document.forms["firstname"]["lastname"]["email"].value;
  if (x == "") {
    alert("All fields must be completed");
    return false;
  }
}