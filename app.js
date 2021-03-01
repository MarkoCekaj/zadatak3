function validate_form() {
  var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;

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
  } else document.myForm.imeFirme.style.background = "white";

  if (document.myForm.email.value.match(illegalChars)) {
    document.myForm.email.style.background = "Yellow";
    alert("Illegal Characters");
    valid = false;
  } else document.myForm.imeFirme.style.background = "white";
  if (document.myForm.email.value == 0) {
    document.myForm.email.style.background = "Yellow";
    alert("Please fill in the 'Email' box.");
    valid = false;
  } else document.myForm.imeFirme.style.background = "white";

  return valid;
}
