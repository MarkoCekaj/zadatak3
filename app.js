function validate_form() {
  var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  var telreg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  var webreg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var namereg = /^[a-z ,.'-]+$/i;
  valid = true;

  if (document.myForm.imeFirme.value == "") {
    document.myForm.imeFirme.style.border = "1px solid red";
    valid = false;
  } else {
    document.myForm.imeFirme.style.border = "1px solid green";
  }

  if (document.myForm.kontakt.value.match(namereg)) {
    document.myForm.kontakt.style.border = "1px solid green";
  } else {
    document.myForm.kontakt.style.border = "1px solid red";
    valid = false;
  }

  if (document.myForm.email.value.match(reg)) {
    document.myForm.email.style.border = "1px solid green";
  } else {
    document.myForm.email.style.border = "1px solid red";
    valid = false;
  }
  if (document.myForm.brtel.value.match(telreg)) {
    document.myForm.brtel.style.border = "1px solid green";
  } else {
    document.myForm.brtel.style.border = "1px solid red";
    valid = false;
  }
  if (document.myForm.website.value.match(webreg)) {
    document.myForm.website.style.border = "1px solid green";
  } else {
    document.myForm.website.style.border = "1px solid red";
    valid = false;
  }
  return valid;
}
