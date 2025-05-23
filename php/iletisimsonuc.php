<?php
echo "<h2>Gönderilen Bilgiler:</h2>";

//eğer veri gönderildiyse verinin kendisini yazıcak gönderilmediyse yok yazıcak
function yazdir($veri) {
    echo "<strong>$veri:</strong> " . (isset($_POST[$veri]) ? htmlspecialchars($_POST[$veri]) : "Veri Yok") . "<br>"; 
}

yazdir("ad");
yazdir("soyad");
yazdir("telefon");
yazdir("email");
yazdir("yas");
yazdir("aciliyet");
yazdir("basvuruNedeni");
yazdir("cinsiyet");


echo "<strong>Kodlama Dilleri: </strong>";
if (isset($_POST['kodlama']) && is_array($_POST['kodlama'])) { //veri gönderilmişse ve bir array ise (kodlama[])
    foreach ($_POST['kodlama'] as $eleman) { 
        echo $eleman .", ";
    }
} 

else {
    echo "Yok<br>";
}

echo "<br>";

yazdir("renk");
yazdir("tarih");
yazdir("saat");
yazdir("konu");

if (isset($_FILES["dosya"]) && $_FILES["dosya"]["error"] == 0) { //error 1 olursa max size aşıldı 4 olursa seçilmedi 
    $dosyaAdi = $_FILES["dosya"]["name"];
    echo "<strong>Dosya:</strong> " . htmlspecialchars($dosyaAdi) . "<br>";
} else {
    echo "<strong>Dosya:</strong> Dosya Yüklenmedi veya Hata<br>";
}

echo '<br><a href="../iletisim.html"><button>Yeni Form Gönder</button></a>'; 
echo '<a style="margin-left: 10px" href="../index.html"><button>Ana Sayfaya Dön</button></a>';


?>