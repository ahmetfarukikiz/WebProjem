<?php
echo '
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Form Sonuçları</title>
    <style>

        strong {
        margin: 2px;
}
        body {
            font-family: Arial, sans-serif;
            background-color:rgb(65, 106, 94);
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .card {
            background-color: rgb(37, 117, 101);
            border-radius: 10px;
            width: 800px;
            color: rgb(208, 237, 231);
            padding: 30px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .card h2 {
            margin-top: 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .btn {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            background-color:rgb(8, 78, 61);
            color: white;
            cursor: pointer;
            text-decoration: none;
        }
        .btn:hover {
            background-color:rgb(13, 149, 99);
        }
        .color-box {
            width: 50px;
            height: 30px;
            display: inline-block;
            border: 1px solid #000;
            vertical-align: middle;
            margin-left: 10px;
        }
    </style>
</head>
<body>
<div class="card">
    <h2>Gönderilen Bilgiler:</h2>';

function yazdir($veri) {
    echo "<strong>$veri:</strong> " . (isset($_POST[$veri]) ? htmlspecialchars($_POST[$veri]) : "Veri Yok") . "<br> <br>"; 
}

yazdir("ad");
yazdir("soyad");
yazdir("telefon");
yazdir("email");
yazdir("yas");

// Aciliyet kısmı
$aciliyet = $_POST['aciliyet'] ?? 0;
$aciliyetstring = "";

if($aciliyet < 35) $aciliyetstring = "düşük";
else if($aciliyet > 35 && $aciliyet < 65) $aciliyetstring = "orta";
else  $aciliyetstring = "yüksek";

echo "<strong>Aciliyet: </strong> ". $aciliyetstring . "<br> <br>";

yazdir("basvuruNedeni");
yazdir("cinsiyet");

echo "<strong>Kodlama Dilleri: </strong>";
if (isset($_POST['kodlama']) && is_array($_POST['kodlama'])) {
    echo htmlspecialchars(implode(", ", $_POST['kodlama']));
} else {
    echo "Yok";
}
echo "<br> <br>";

yazdir("renk");
$renk = $_POST['renk'] ?? "#ffffff";
echo "<div class='color-box' style='background-color: $renk;'></div><br><br>";

yazdir("tarih");
yazdir("saat");
yazdir("konu");

if (isset($_FILES["dosya"]) && $_FILES["dosya"]["error"] == 0) {
    $dosyaAdi = $_FILES["dosya"]["name"];
    echo "<strong>Dosya:</strong> " . htmlspecialchars($dosyaAdi) . "<br>";
} else {
    echo "<strong>Dosya:</strong> Dosya Yüklenmedi veya Hata<br>";
}

echo '<br><a class="btn" href="../iletisim.html">Yeni Form Gönder</a>';
echo '<a class="btn" style="margin-left: 10px;" href="../index.html">Ana Sayfaya Dön</a>';
echo '
</div>
</body>
</html>';
?>