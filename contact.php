<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Validacija Ispravna</title>
</head>

<body style="background: none" class="body-valid">
    <div class="circle"></div>
    <div class="success"><img src="./slike/success-2.png" /></div>
    <div class="main-content">
        <p>
            Hvala što ste se prijavili.<br /><br />
            Izvlačenje dobitnika je 25.12.2018. u 12:00 sati. U međuvremenu
            pogledajte naš katalog.
        </p>
    </div>
    <div class="arrow">
        <img id="arrowimg" src="./slike/up-arrow-with-scribble.png" />

        <button type="submit">
            <img src="./slike/pdf-file-outlined-interface-symbol.png" />Amplitudo
            katalog
        </button>
        <img id="ampllogo" src="./slike/Group 27.png" />
    </div>
    <div class="background-shapes">
        <img id="left" src="./slike/shapes left.png" />
        <img id="right" src="./slike/Shapes right.png" />
    </div>
</body>

</html>


<?php
$con = mysqli_connect('localhost', 'root', '', 'db_connect');
$imeFirme = $_POST['imeFirme'];
$kontakt = $_POST['kontakt'];
$email = $_POST['email'];
$brtel = $_POST['brtel'];
$website = $_POST['website'];

$sql = "INSERT INTO `tbl_contact` (`id`, `fldNazivFirme`, `fldKontaktOsoba`, `fldEmail`, `fldBrojTelefona`,`fldWebsite`) VALUES ('0', '$imeFirme', '$kontakt', '$email', '$brtel', '$website')";

$rs = mysqli_query($con, $sql);
if ($rs) {
    echo "Contact Records Inserted";
}
