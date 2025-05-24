<?php 

//formdan gelen verileri alıyorum


$kullanici_ad = $_POST["kullaniciAdi"];
$password = $_POST["sifre"];

// geçerli user pass bilgisi

$yetkiliUSR = "b2412100001@org.sakarya.edu.tr";
$yetkiliPWD = "b2412100001";

if(! count($_POST)) { //posttan gelen veriler 0 ise yani hiç veri gelmemişse if bloğu çalışır
    echo "bu dosyaya direk erişim yapamazsınız";
    echo "<a href='8Nisan.html'> Forma Geri Dön</a>";
}



//formdaki değişkenleri kontrol et
if ($kullanici_ad == $yetkiliUSR && $password == $yetkiliPWD) {
    header("Location: ../index.html?welcome=1&ad=" . urlencode($kullanici_ad)); //@ tarzı ifadeleri asci koduna çevirir
    exit(); //kodun devamını çalıştırma 
} 

else {
 header("Location: ../login.html?error=1");
 exit();
}




?>