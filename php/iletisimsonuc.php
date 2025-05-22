<?php
echo "<h2>Gönderilen Bilgiler:</h2>";

function postYaz($key) {
    echo "<strong>$key:</strong> " . (isset($_POST[$key]) ? htmlspecialchars($_POST[$key]) : "Yok") . "<br>";
}

postYaz("ad");
postYaz("soyad");
postYaz("telefon");
postYaz("email");
postYaz("yas");
postYaz("aciliyet");
postYaz("basvuruNedeni");
postYaz("cinsiyet");

echo "<strong>Kodlama Dilleri:</strong><br>";
if (isset($_POST['kodlama']) && is_array($_POST['kodlama'])) {
    foreach ($_POST['kodlama'] as $dil) {
        echo $dil ."<br>";
    }
} else {
    echo "Yok<br>";
}

postYaz("renk");
postYaz("tarih");
postYaz("saat");
postYaz("konu");

if (isset($_FILES["dosya"]) && $_FILES["dosya"]["error"] == 0) {
    $dosyaAdi = $_FILES["dosya"]["name"];
    echo "<strong>Dosya:</strong> " . htmlspecialchars($dosyaAdi) . "<br>";
} else {
    echo "<strong>Dosya:</strong> Yüklenmedi veya Hata<br>";
}


?>