<?php
echo '
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Form Sonuçları</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }
        .card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            width: 600px;
            padding: 20px;
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
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            text-decoration: none;
        }
        .btn:hover {
            background-color: #0056b3;
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
    echo "<strong>$veri:</strong> " . (isset($_POST[$veri]) ? htmlspecialchars($_POST[$veri]) : "Veri Yok") . "<br>"; 
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

echo "<strong>Aciliyet: </strong> ". $aciliyetstring . "<br>";

yazdir("basvuruNedeni");
yazdir("cinsiyet");

echo "<strong>Kodlama Dilleri: </strong>";
if (isset($_POST['kodlama']) && is_array($_POST['kodlama'])) {
    echo htmlspecialchars(implode(", ", $_POST['kodlama']));
} else {
    echo "Yok";
}
echo "<br>";

yazdir("renk");
$renk = $_POST['renk'] ?? "#ffffff";
echo "<div class='color-box' style='background-color: $renk;'></div><br>";

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