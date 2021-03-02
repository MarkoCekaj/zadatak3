function validate_form() {
  var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  var telreg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  var webreg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var namereg = /^[a-z ,.'-]+$/i;
  valid = true;

  if (document.myForm.imeFirme.value == "") {
    document.myForm.imeFirme.style.border = "1px solid red";
    document.myForm.imeFirme.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning1"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red;">  Polje ne smije biti prazno </i>`;
    valid = false;
  } else {
    document.myForm.imeFirme.style.border = "1px solid green";
    document.getElementById("validation-warning1").innerHTML = null;
  }

  if (document.myForm.kontakt.value.match(namereg)) {
    document.myForm.kontakt.style.border = "1px solid green";
    document.getElementById("validation-warning2").innerHTML = null;
  } else {
    document.myForm.kontakt.style.border = "1px solid red";
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">  Polje ne smije da bude prazno ili da sadrzi brojeve</i>`;

    valid = false;
  }

  if (document.myForm.email.value.match(reg)) {
    document.myForm.email.style.border = "1px solid green";
    document.getElementById("validation-warning3").innerHTML = null;
  } else {
    document.myForm.email.style.border = "1px solid red";
    document.myForm.email.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning3"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  E-mail mora biti u formatu example@google.com</i>`;
    valid = false;
  }
  if (document.myForm.brtel.value.match(telreg)) {
    document.myForm.brtel.style.border = "1px solid green";
    document.getElementById("validation-warning4").innerHTML = null;
  } else {
    document.myForm.brtel.style.border = "1px solid red";
    document.myForm.brtel.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  Broj mora biti u formatu +382*******</i>`;
    valid = false;
  }
  if (document.myForm.website.value.match(webreg)) {
    document.myForm.website.style.border = "1px solid green";
    document.getElementById("validation-warning5").innerHTML = null;
  } else {
    document.myForm.website.style.border = "1px solid red";
    document.myForm.website.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning5"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  Website mora biti u formatu www.example.com</i>`;
    valid = false;
  }
  return valid;
}
