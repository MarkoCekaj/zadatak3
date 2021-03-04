const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const telreg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
const webreg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,3}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,3}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,3}|www\.[a-zA-Z0-9]+\.[^\s]{2,3})/gi;
const namereg = /^[a-z ,.'-]+$/i;
const numbers = /^[0-9]+$/;
const illegal = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
let valid = true;
document.myForm.addEventListener("submit", function validacija(e) {
  e.preventDefault();
  validacijaFirme();
  validacijaKontakt();
  validacijaEmail();
  validacijaTelefon();
  validacijaWeb();
  if (valid) {
    document.myForm.submit();
  }
  console.log(valid);
  console.log(document.myForm);
});

//validacija imeFirme//
function validacijaFirme() {
  if (document.myForm.imeFirme.value.match(illegal)) {
    document.myForm.imeFirme.style.border = "2px solid red";
    document.myForm.imeFirme.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning1"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red;">Neispravan unos</i>`;

    valid = false;
  } else if (document.myForm.imeFirme.value == "") {
    document.myForm.imeFirme.style.border = "2px solid red";
    document.myForm.imeFirme.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning1"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red;">  Polje ne smije biti prazno </i>`;
    valid = false;
  } else {
    document.myForm.imeFirme.style.border = "2px solid green";
    document.getElementById("validation-warning1").innerHTML = null;
    valid = true;
  }
  if (valid == false) {
    document.myForm.imeFirme.focus();
  }
}

//validacija kontakt//
function validacijaKontakt() {
  if (document.myForm.kontakt.value == "") {
    document.myForm.kontakt.style.border = "2px solid red";
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">  Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (
    document.myForm.kontakt.value.match(numbers) ||
    document.myForm.kontakt.value.match(illegal)
  ) {
    document.myForm.kontakt.style.border = "2px solid red";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">Neispravan unos</i>`;
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    valid = false;
  } else if (document.myForm.kontakt.value.match(namereg)) {
    document.myForm.kontakt.style.border = "2px solid green";
    document.getElementById("validation-warning2").innerHTML = null;
    valid = true;
  } else {
    document.myForm.kontakt.style.border = "2px solid red";
    document.myForm.kontakt.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle"style="font-size: 17px;color: red; ">Neispravan unos</i>`;
    valid = false;
  }
  if (valid == false) {
    document.myForm.kontakt.focus();
  }
}

//validacija email//
function validacijaEmail() {
  if (document.myForm.email.value == "") {
    document.myForm.email.style.border = "2px solid red";
    document.myForm.email.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning3"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.email.value.match(reg)) {
    document.myForm.email.style.border = "2px solid green";
    document.getElementById("validation-warning3").innerHTML = null;
    valid = true;
  } else {
    document.myForm.email.style.border = "2px solid red";
    document.myForm.email.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning3"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  E-mail mora biti u formatu example@google.com</i>`;
    valid = false;
  }
  if (valid == false) {
    document.myForm.email.focus();
  }
}
//validacija broj telefona//
function validacijaTelefon() {
  if (document.myForm.brtel.value == "") {
    document.myForm.brtel.style.border = "2px solid red";
    document.myForm.brtel.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.brtel.value.match(telreg)) {
    document.myForm.brtel.style.border = "2px solid green";
    document.getElementById("validation-warning4").innerHTML = null;
    valid = true;
  } else {
    document.myForm.brtel.style.border = "2px solid red";
    document.myForm.brtel.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Format mora biti +382**** ili 06*******</i>`;
    valid = false;
  }
  if (valid == false) {
    document.myForm.brtel.focus();
  }
}
//validacija website
function validacijaWeb() {
  if (document.myForm.website.value == "") {
    document.myForm.website.style.border = "2px solid red";
    document.myForm.website.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning5"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; "> Polje ne smije biti prazno</i>`;
    valid = false;
  } else if (document.myForm.website.value.match(webreg)) {
    document.myForm.website.style.border = "2px solid green";
    document.getElementById("validation-warning5").innerHTML = null;
    valid = true;
  } else {
    document.myForm.website.style.border = "2px solid red";
    document.myForm.website.style.margin = "7px 57px 0 58px";
    document.getElementById(
      "validation-warning5"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  Website mora biti u formatu www.example.com</i>`;
    valid = false;
  }
}
