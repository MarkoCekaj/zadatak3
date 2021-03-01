function validate_form() {
  var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
  var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  valid = true;

  if (document.myForm.imeFirme.value == "") {
    document.myForm.imeFirme.style.background = "Yellow";
    alert("Unesite ime firme");
    valid = false;
  } else document.myForm.imeFirme.style.background = "white";

  if (document.myForm.kontakt.value == 0) {
    document.myForm.kontakt.style.background = "Yellow";
    alert("Unesite kontakt osobu");
    valid = false;
  } else document.myForm.kontakt.style.background = "white";

  if (document.myForm.email.value.match(re)) {
    alert("Dobar mail");
    valid = true;
  } else {
    alert("nije dobar");

    valid = false;
  }

  return valid;
}
