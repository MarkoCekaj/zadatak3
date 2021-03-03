function validate_form() {
  var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  var telreg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
  var webreg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var namereg = /^[a-z ,.'-]+$/i;
  var numbers = /^[0-9]+$/;
  var illegal = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
  valid = true;
  //validacija imeFirme//
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
  //validacija kontakt//
  if (document.myForm.kontakt.value == "") {
    document.myForm.kontakt.style.border = "1px solid red";
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">  Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (
    document.myForm.kontakt.value.match(numbers) ||
    document.myForm.kontakt.value.match(illegal)
  ) {
    document.myForm.kontakt.style.border = "1px solid red";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">Neispravan unos</i>`;
    valid = false;
  } else if (document.myForm.kontakt.value.match(namereg)) {
    document.myForm.kontakt.style.border = "1px solid green";
    document.getElementById("validation-warning2").innerHTML = null;
  } else {
    document.myForm.kontakt.style.border = "1px solid red";
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">Neispravan unos</i>`;
    valid = false;
  }
  //validacija email//
  if (document.myForm.email.value == "") {
    document.myForm.email.style.border = "1px solid red";
    document.myForm.email.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning3"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.email.value.match(reg)) {
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
  //validacija broj telefona//
  if (document.myForm.brtel.value == "") {
    document.myForm.brtel.style.border = "1px solid red";
    document.myForm.brtel.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.brtel.value.match(telreg)) {
    document.myForm.brtel.style.border = "1px solid green";
    document.getElementById("validation-warning4").innerHTML = null;
  } else {
    document.myForm.brtel.style.border = "1px solid red";
    document.myForm.brtel.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Format mora biti +382**** ili 06*******</i>`;
    valid = false;
  }
  //validacija website
  if (document.myForm.website.value == "") {
    document.myForm.website.style.border = "1px solid red";
    document.myForm.website.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning5"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; "> Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.website.value.match(webreg)) {
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
