<?php 

//formdan gelen verileri alıyorum


$kullanici_ad = $_POST["kullaniciAdi"];
$password = $_POST["parola"];

// geçerli user pass bilgisi

$yetkiliUSR = "b2412100001@sakarya.edu.tr";
$yetkiliPWD = "b2412100001";

// $salt = "1234567890";
// $hash = hash('sha256', $salt . $password);

//NEREDEN ÇAĞRILACAĞINI KONTROL ET

if(! count($_POST)) {
    echo "bu dosyaya direk erişim yapamazsınız";
    echo "<a href='8Nisan.html'> Forma Geri Dön</a>";
}



//formdaki değişkenleri kontrol et
if ($kullanici_ad == $yetkiliUSR && $password == $yetkiliPWD) {
    header("Location: ../index.html?welcome=1&ad=" . urlencode($kullanici_ad));
    exit;
} 

else {
 header("Location: ../login.html?error=1");
 exit();
}


//Doğru ise aşağıdaki işlemleri yap










?>